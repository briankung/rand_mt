// src/mt19937_64.rs
//
// Copyright (c) 2015,2017 rust-mersenne-twister developers
// Copyright (c) 2020 Ryan Lopopolo <rjl@hyperbo.la>
//
// Licensed under the Apache License, Version 2.0
// <LICENSE-APACHE or http://www.apache.org/licenses/LICENSE-2.0> or the MIT
// license <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. All files in the project carrying such notice may not be copied,
// modified, or distributed except according to those terms.

use core::convert::TryFrom;
use core::fmt;
use core::mem::size_of;
use core::num::Wrapping;

use crate::RecoverRngError;

#[cfg(feature = "rand-traits")]
mod rand;

const NN: usize = 312;
const MM: usize = 156;
const ONE: Wrapping<u64> = Wrapping(1);
const MATRIX_A: Wrapping<u64> = Wrapping(0xb502_6f5a_a966_19e9);
const UM: Wrapping<u64> = Wrapping(0xffff_ffff_8000_0000); // Most significant 33 bits
const LM: Wrapping<u64> = Wrapping(0x7fff_ffff); // Least significant 31 bits

/// The 64-bit flavor of the Mersenne Twister pseudorandom number
/// generator.
///
/// # Size
///
/// `Mt19937GenRand64` requires approximately 2.5KB of internal state.
///
/// You may wish to store an `Mt19937GenRand64` on the heap in a `Box` to make it
/// easier to embed in another struct.
///
/// `Mt19937GenRand64` is also the same size as
/// [`Mt19937GenRand32`](crate::Mt19937GenRand32).
///
/// ```
/// # use core::mem;
/// # use rand_mt::{Mt19937GenRand32, Mt19937GenRand64};
/// assert_eq!(2504, mem::size_of::<Mt19937GenRand64>());
/// assert_eq!(mem::size_of::<Mt19937GenRand32>(), mem::size_of::<Mt19937GenRand64>());
/// ```
#[derive(Clone, Hash, PartialEq, Eq, PartialOrd, Ord)]
pub struct Mt19937GenRand64 {
    idx: usize,
    state: [Wrapping<u64>; NN],
}

impl fmt::Debug for Mt19937GenRand64 {
    #[inline]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str("Mt19937GenRand64 {}")
    }
}

impl Default for Mt19937GenRand64 {
    /// Return a new `Mt19937GenRand64` with the default seed.
    ///
    /// Equivalent to calling [`Mt19937GenRand64::new_unseeded`].
    #[inline]
    fn default() -> Self {
        Self::new_unseeded()
    }
}

impl From<[u8; 8]> for Mt19937GenRand64 {
    /// Construct a Mersenne Twister RNG from 8 bytes.
    ///
    /// # Examples
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// // Default MT seed
    /// let seed = 5489_u64.to_le_bytes();
    /// let mut mt = Mt19937GenRand64::from(seed);
    /// assert_ne!(mt.next_u64(), mt.next_u64());
    /// ```
    #[inline]
    fn from(seed: [u8; 8]) -> Self {
        Self::new(u64::from_le_bytes(seed))
    }
}

impl From<u64> for Mt19937GenRand64 {
    /// Construct a Mersenne Twister RNG from a `u64` seed.
    ///
    /// This function is equivalent to [`new`].
    ///
    /// [`new`]: Self::new
    #[inline]
    fn from(seed: u64) -> Self {
        Self::new(seed)
    }
}

impl From<[u64; NN]> for Mt19937GenRand64 {
    /// Recover the internal state of a Mersenne Twister using the past 312
    /// samples.
    ///
    /// This conversion takes a history of samples from a RNG and returns a
    /// RNG that will produce identical output to the RNG that supplied the
    /// samples.
    #[inline]
    fn from(key: [u64; NN]) -> Self {
        let mut mt = Self {
            idx: NN,
            state: [Wrapping(0); NN],
        };
        for (sample, out) in key.iter().copied().zip(mt.state.iter_mut()) {
            *out = Wrapping(untemper(sample));
        }
        mt
    }
}

impl TryFrom<&[u64]> for Mt19937GenRand64 {
    type Error = RecoverRngError;

    /// Attempt to recover the internal state of a Mersenne Twister using the
    /// past 312 samples.
    ///
    /// This conversion takes a history of samples from a RNG and returns a
    /// RNG that will produce identical output to the RNG that supplied the
    /// samples.
    ///
    /// This conversion is implemented with [`Mt19937GenRand64::recover`].
    ///
    /// # Errors
    ///
    /// If `key` has less than 312 elements, an error is returned because there
    /// is not enough data to fully initialize the RNG.
    ///
    /// If `key` has more than 312 elements, an error is returned because the
    /// recovered RNG will not produce identical output to the RNG that supplied
    /// the samples.
    #[inline]
    fn try_from(key: &[u64]) -> Result<Self, Self::Error> {
        Self::recover(key.iter().copied())
    }
}

impl Mt19937GenRand64 {
    /// Default seed used by [`Mt19937GenRand64::new_unseeded`].
    pub const DEFAULT_SEED: u64 = 5489_u64;

    /// Create a new Mersenne Twister random number generator using the given
    /// seed.
    ///
    /// # Examples
    ///
    /// ## Constructing with a `u64` seed
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// let seed = 123_456_789_u64;
    /// let mt1 = Mt19937GenRand64::new(seed);
    /// let mt2 = Mt19937GenRand64::from(seed.to_le_bytes());
    /// assert_eq!(mt1, mt2);
    /// ```
    ///
    /// ## Constructing with default seed
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// let mt1 = Mt19937GenRand64::new(Mt19937GenRand64::DEFAULT_SEED);
    /// let mt2 = Mt19937GenRand64::new_unseeded();
    /// assert_eq!(mt1, mt2);
    /// ```
    #[inline]
    #[must_use]
    pub fn new(seed: u64) -> Self {
        let mut mt = Self {
            idx: 0,
            state: [Wrapping(0); NN],
        };
        mt.reseed(seed);
        mt
    }

    /// Create a new Mersenne Twister random number generator using the given
    /// key.
    ///
    /// Key can have any length.
    #[inline]
    #[must_use]
    pub fn new_with_key<I>(key: I) -> Self
    where
        I: IntoIterator<Item = u64>,
        I::IntoIter: Clone,
    {
        let mut mt = Self {
            idx: 0,
            state: [Wrapping(0); NN],
        };
        mt.reseed_with_key(key);
        mt
    }

    /// Create a new Mersenne Twister random number generator using the default
    /// fixed seed.
    ///
    /// # Examples
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// // Default MT seed
    /// let seed = 5489_u64;
    /// let mt = Mt19937GenRand64::new(seed);
    /// let unseeded = Mt19937GenRand64::new_unseeded();
    /// assert_eq!(mt, unseeded);
    /// ```
    #[inline]
    #[must_use]
    pub fn new_unseeded() -> Self {
        Self::new(Self::DEFAULT_SEED)
    }

    /// Generate next `u64` output.
    ///
    /// `u64` is the native output of the generator. This function advances the
    /// RNG step counter by one.
    ///
    /// # Examples
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// let mut mt = Mt19937GenRand64::new_unseeded();
    /// assert_ne!(mt.next_u64(), mt.next_u64());
    /// ```
    #[inline]
    pub fn next_u64(&mut self) -> u64 {
        // Failing this check indicates that, somehow, the structure
        // was not initialized.
        debug_assert!(self.idx != 0);
        if self.idx >= NN {
            fill_next_state(self);
        }
        let Wrapping(x) = self.state[self.idx];
        self.idx += 1;
        temper(x)
    }

    /// Generate next `u32` output.
    ///
    /// This function is implemented by generating one `u64`s from the RNG and
    /// shifting + masking them into a `u32` output.
    ///
    /// # Examples
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// let mut mt = Mt19937GenRand64::new_unseeded();
    /// assert_ne!(mt.next_u32(), mt.next_u32());
    /// ```
    #[inline]
    #[allow(clippy::cast_possible_truncation)]
    pub fn next_u32(&mut self) -> u32 {
        self.next_u64() as u32
    }

    /// Fill a buffer with bytes generated from the RNG.
    ///
    /// This method generates random `u64`s (the native output unit of the RNG)
    /// until `dest` is filled.
    ///
    /// This method may discard some output bits if `dest.len()` is not a
    /// multiple of 8.
    ///
    /// # Examples
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// let mut mt = Mt19937GenRand64::new_unseeded();
    /// let mut buf = [0; 32];
    /// mt.fill_bytes(&mut buf);
    /// assert_ne!([0; 32], buf);
    /// let mut buf = [0; 31];
    /// mt.fill_bytes(&mut buf);
    /// assert_ne!([0; 31], buf);
    /// ```
    #[inline]
    pub fn fill_bytes(&mut self, dest: &mut [u8]) {
        const CHUNK: usize = size_of::<u64>();
        let mut left = dest;
        while left.len() >= CHUNK {
            let (next, remainder) = left.split_at_mut(CHUNK);
            left = remainder;
            let chunk: [u8; CHUNK] = self.next_u64().to_le_bytes();
            next.copy_from_slice(&chunk);
        }
        let n = left.len();
        if n > 0 {
            let chunk: [u8; CHUNK] = self.next_u64().to_le_bytes();
            left.copy_from_slice(&chunk[..n]);
        }
    }

    /// Attempt to recover the internal state of a Mersenne Twister using the
    /// past 312 samples.
    ///
    /// This conversion takes a history of samples from a RNG and returns a
    /// RNG that will produce identical output to the RNG that supplied the
    /// samples.
    ///
    /// This constructor is also available as a [`TryFrom`] implementation for
    /// `&[u32]`.
    ///
    /// # Errors
    ///
    /// If `key` has less than 312 elements, an error is returned because there
    /// is not enough data to fully initialize the RNG.
    ///
    /// If `key` has more than 312 elements, an error is returned because the
    /// recovered RNG will not produce identical output to the RNG that supplied
    /// the samples.
    #[inline]
    pub fn recover<I>(key: I) -> Result<Self, RecoverRngError>
    where
        I: IntoIterator<Item = u64>,
    {
        let mut mt = Self {
            idx: NN,
            state: [Wrapping(0); NN],
        };
        let mut state = mt.state.iter_mut();
        for sample in key {
            let out = state.next().ok_or(RecoverRngError::TooManySamples(NN))?;
            *out = Wrapping(untemper(sample));
        }
        // If the state iterator still has unfilled cells, the given iterator
        // was too short. If there are no additional cells, return the
        // initialized RNG.
        if state.next().is_none() {
            Ok(mt)
        } else {
            Err(RecoverRngError::TooFewSamples(NN))
        }
    }

    /// Reseed a Mersenne Twister from a single `u64`.
    ///
    /// # Examples
    ///
    /// ```
    /// # use rand_mt::Mt19937GenRand64;
    /// // Default MT seed
    /// let mut mt = Mt19937GenRand64::new_unseeded();
    /// let first = mt.next_u64();
    /// mt.fill_bytes(&mut [0; 512]);
    /// // Default MT seed
    /// mt.reseed(5489_u64);
    /// assert_eq!(first, mt.next_u64());
    /// ```
    #[inline]
    pub fn reseed(&mut self, seed: u64) {
        self.idx = NN;
        self.state[0] = Wrapping(seed);
        for i in 1..NN {
            self.state[i] = Wrapping(6_364_136_223_846_793_005)
                * (self.state[i - 1] ^ (self.state[i - 1] >> 62))
                + Wrapping(i as u64);
        }
    }

    /// Reseed a Mersenne Twister from am iterator of `u64`s.
    ///
    /// Key can have any length.
    #[inline]
    #[allow(clippy::cast_possible_truncation)]
    pub fn reseed_with_key<I>(&mut self, key: I)
    where
        I: IntoIterator<Item = u64>,
        I::IntoIter: Clone,
    {
        self.reseed(19_650_218_u64);
        let mut i = 1_usize;
        for (j, piece) in key.into_iter().enumerate().cycle().take(NN) {
            self.state[i] = (self.state[i]
                ^ ((self.state[i - 1] ^ (self.state[i - 1] >> 62))
                    * Wrapping(3_935_559_000_370_003_845)))
                + Wrapping(piece)
                + Wrapping(j as u64);
            i += 1;
            if i >= NN {
                self.state[0] = self.state[NN - 1];
                i = 1;
            }
        }
        for _ in 0..NN - 1 {
            self.state[i] = (self.state[i]
                ^ ((self.state[i - 1] ^ (self.state[i - 1] >> 62))
                    * Wrapping(2_862_933_555_777_941_757)))
                - Wrapping(i as u64);
            i += 1;
            if i >= NN {
                self.state[0] = self.state[NN - 1];
                i = 1;
            }
        }
        self.state[0] = Wrapping(1 << 63);
    }
}

#[inline]
fn temper(mut x: u64) -> u64 {
    x ^= (x >> 29) & 0x5555_5555_5555_5555;
    x ^= (x << 17) & 0x71d6_7fff_eda6_0000;
    x ^= (x << 37) & 0xfff7_eee0_0000_0000;
    x ^= x >> 43;
    x
}

#[inline]
fn untemper(mut x: u64) -> u64 {
    // reverse "x ^=  x >> 43;"
    x ^= x >> 43;

    // reverse "x ^= (x << 37) & 0xfff7_eee0_0000_0000;"
    x ^= (x << 37) & 0xfff7_eee0_0000_0000;

    // reverse "x ^= (x << 17) & 0x71d6_7fff_eda6_0000;"
    x ^= (x << 17) & 0x0000_0003_eda6_0000;
    x ^= (x << 17) & 0x0006_7ffc_0000_0000;
    x ^= (x << 17) & 0x71d0_0000_0000_0000;

    // reverse "x ^= (x >> 29) & 0x5555_5555_5555_5555;"
    x ^= (x >> 29) & 0x0000_0005_5555_5540;
    x ^= (x >> 29) & 0x0000_0000_0000_0015;

    x
}

#[inline]
fn fill_next_state(rng: &mut Mt19937GenRand64) {
    for i in 0..NN - MM {
        let x = (rng.state[i] & UM) | (rng.state[i + 1] & LM);
        rng.state[i] = rng.state[i + MM] ^ (x >> 1) ^ ((x & ONE) * MATRIX_A);
    }
    for i in NN - MM..NN - 1 {
        let x = (rng.state[i] & UM) | (rng.state[i + 1] & LM);
        rng.state[i] = rng.state[i + MM - NN] ^ (x >> 1) ^ ((x & ONE) * MATRIX_A);
    }
    let x = (rng.state[NN - 1] & UM) | (rng.state[0] & LM);
    rng.state[NN - 1] = rng.state[MM - 1] ^ (x >> 1) ^ ((x & ONE) * MATRIX_A);
    rng.idx = 0;
}

#[cfg(test)]
mod tests {
    use core::convert::TryFrom;
    use core::num::Wrapping;

    use super::{Mt19937GenRand64, NN};
    use crate::vectors::mt64::{STATE_SEEDED_BY_SLICE, STATE_SEEDED_BY_U64, TEST_OUTPUT};
    use crate::RecoverRngError;

    #[test]
    fn seeded_state_from_u64_seed() {
        let mt = Mt19937GenRand64::new(0x0123_4567_89ab_cdef_u64);
        let mt_from_seed = Mt19937GenRand64::from(0x0123_4567_89ab_cdef_u64.to_le_bytes());
        assert_eq!(mt.state, mt_from_seed.state);
        for (&Wrapping(x), &y) in mt.state.iter().zip(STATE_SEEDED_BY_U64.iter()) {
            assert_eq!(x, y);
        }
        for (&Wrapping(x), &y) in mt_from_seed.state.iter().zip(STATE_SEEDED_BY_U64.iter()) {
            assert_eq!(x, y);
        }
    }

    #[test]
    fn seeded_state_from_u64_slice_key() {
        let key = [0x12345_u64, 0x23456_u64, 0x34567_u64, 0x45678_u64];
        let mt = Mt19937GenRand64::new_with_key(key.iter().copied());
        for (&Wrapping(x), &y) in mt.state.iter().zip(STATE_SEEDED_BY_SLICE.iter()) {
            assert_eq!(x, y);
        }
    }

    #[test]
    fn seed_with_empty_iter_returns() {
        let _ = Mt19937GenRand64::new_with_key(core::iter::empty());
    }

    #[test]
    fn output_from_u64_slice_key() {
        let key = [0x12345_u64, 0x23456_u64, 0x34567_u64, 0x45678_u64];
        let mut mt = Mt19937GenRand64::new_with_key(key.iter().copied());
        for &x in TEST_OUTPUT.iter() {
            assert_eq!(x, mt.next_u64());
        }
    }

    #[test]
    fn temper_untemper_is_identity() {
        let mut buf = [0; 8];
        for _ in 0..10_000 {
            getrandom::getrandom(&mut buf).unwrap();
            let x = u64::from_le_bytes(buf);
            assert_eq!(x, super::untemper(super::temper(x)));
            let x = u64::from_be_bytes(buf);
            assert_eq!(x, super::untemper(super::temper(x)));
        }
    }

    #[test]
    fn untemper_temper_is_identity() {
        let mut buf = [0; 8];
        for _ in 0..10_000 {
            getrandom::getrandom(&mut buf).unwrap();
            let x = u64::from_le_bytes(buf);
            assert_eq!(x, super::temper(super::untemper(x)));
            let x = u64::from_be_bytes(buf);
            assert_eq!(x, super::temper(super::untemper(x)));
        }
    }

    #[test]
    fn recovery_via_from() {
        let mut buf = [0; 8];
        for _ in 0..100 {
            getrandom::getrandom(&mut buf).unwrap();
            let seed = u64::from_le_bytes(buf);
            for skip in 0..256 {
                let mut orig_mt = Mt19937GenRand64::new(seed);
                // skip some samples so the RNG is in an intermediate state
                for _ in 0..skip {
                    orig_mt.next_u64();
                }
                let mut samples = [0; 312];
                for sample in samples.iter_mut() {
                    *sample = orig_mt.next_u64();
                }
                let mut recovered_mt = Mt19937GenRand64::from(samples);
                for _ in 0..312 * 2 {
                    assert_eq!(orig_mt.next_u64(), recovered_mt.next_u64());
                }
            }
        }
    }

    #[test]
    fn recovery_via_recover() {
        let mut buf = [0; 8];
        for _ in 0..100 {
            getrandom::getrandom(&mut buf).unwrap();
            let seed = u64::from_le_bytes(buf);
            for skip in 0..256 {
                let mut orig_mt = Mt19937GenRand64::new(seed);
                // skip some samples so the RNG is in an intermediate state
                for _ in 0..skip {
                    orig_mt.next_u64();
                }
                let mut samples = [0; 312];
                for sample in samples.iter_mut() {
                    *sample = orig_mt.next_u64();
                }
                let mut recovered_mt = Mt19937GenRand64::recover(samples.iter().copied()).unwrap();
                for _ in 0..312 * 2 {
                    assert_eq!(orig_mt.next_u64(), recovered_mt.next_u64());
                }
            }
        }
    }

    #[test]
    fn recover_required_exact_sample_length_via_from() {
        assert_eq!(
            Mt19937GenRand64::try_from(&[0; 0][..]),
            Err(RecoverRngError::TooFewSamples(NN))
        );
        assert_eq!(
            Mt19937GenRand64::try_from(&[0; 1][..]),
            Err(RecoverRngError::TooFewSamples(NN))
        );
        assert_eq!(
            Mt19937GenRand64::try_from(&[0; 311][..]),
            Err(RecoverRngError::TooFewSamples(NN))
        );
        assert!(Mt19937GenRand64::try_from(&[0; 312][..]).is_ok());
        assert_eq!(
            Mt19937GenRand64::try_from(&[0; 313][..]),
            Err(RecoverRngError::TooManySamples(NN))
        );
        assert_eq!(
            Mt19937GenRand64::try_from(&[0; 1000][..]),
            Err(RecoverRngError::TooManySamples(NN))
        );
    }

    #[test]
    fn recover_required_exact_sample_length_via_recover() {
        assert_eq!(
            Mt19937GenRand64::recover([0; 0].iter().copied()),
            Err(RecoverRngError::TooFewSamples(NN))
        );
        assert_eq!(
            Mt19937GenRand64::recover([0; 1].iter().copied()),
            Err(RecoverRngError::TooFewSamples(NN))
        );
        assert_eq!(
            Mt19937GenRand64::recover([0; 311].iter().copied()),
            Err(RecoverRngError::TooFewSamples(NN))
        );
        assert!(Mt19937GenRand64::recover([0; 312].iter().copied()).is_ok());
        assert_eq!(
            Mt19937GenRand64::recover([0; 313].iter().copied()),
            Err(RecoverRngError::TooManySamples(NN))
        );
        assert_eq!(
            Mt19937GenRand64::recover([0; 1000].iter().copied()),
            Err(RecoverRngError::TooManySamples(NN))
        );
    }
}
