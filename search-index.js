var searchIndex = JSON.parse('{\
"rand_core":{"doc":"Random number generation traits","t":[0,8,16,16,10,3,12,11,11,11,11,3,12,11,11,11,11,0,5,5,5,5,5,5,0,5,5,3,8,10,10,10,10,8,8,16,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,18,18,11,11],"n":["block","BlockRngCore","Item","Results","generate","BlockRng","core","new","index","reset","generate_and_set","BlockRng64","core","new","index","reset","generate_and_set","impls","next_u64_via_u32","fill_bytes_via_next","fill_via_u32_chunks","fill_via_u64_chunks","next_u32_via_fill","next_u64_via_fill","le","read_u32_into","read_u64_into","Error","RngCore","next_u32","next_u64","fill_bytes","try_fill_bytes","CryptoRng","SeedableRng","Seed","from_seed","seed_from_u64","from_rng","borrow","borrow_mut","try_from","from","into","try_into","type_id","borrow","borrow_mut","try_from","from","into","try_into","type_id","borrow","borrow_mut","try_from","from","into","try_into","type_id","next_u32","next_u64","fill_bytes","try_fill_bytes","next_u32","next_u64","fill_bytes","try_fill_bytes","from_seed","seed_from_u64","from_rng","from_seed","seed_from_u64","from_rng","fmt","fmt","fmt","fmt","from","clone","clone","CUSTOM_START","INTERNAL_START","raw_os_error","code"],"q":["rand_core","rand_core::block","","","","","","","","","","","","","","","","rand_core","rand_core::impls","","","","","","rand_core","rand_core::le","","rand_core","","","","","","","","","","","","rand_core::block","","","","","","","","","","","","","","rand_core","","","","","","","rand_core::block","","","","","","","","","","","","","","","","rand_core","","","rand_core::block","","rand_core","","",""],"d":["The <code>BlockRngCore</code> trait and implementation helpers","A trait for RNGs which do not generate random numbers …","Results element type, e.g. <code>u32</code>.","Results type. This is the ‘block’ an RNG implementing …","Generate a new block of results.","A wrapper type implementing [<code>RngCore</code>] for some type …","The <em>core</em> part of the RNG, implementing the <code>generate</code> …","Create a new <code>BlockRng</code> from an existing RNG implementing …","Get the index into the result buffer.","Reset the number of available results. This will force a …","Generate a new set of results immediately, setting the …","A wrapper type implementing [<code>RngCore</code>] for some type …","The <em>core</em> part of the RNG, implementing the <code>generate</code> …","Create a new <code>BlockRng</code> from an existing RNG implementing …","Get the index into the result buffer.","Reset the number of available results. This will force a …","Generate a new set of results immediately, setting the …","Helper functions for implementing <code>RngCore</code> functions.","Implement <code>next_u64</code> via <code>next_u32</code>, little-endian order.","Implement <code>fill_bytes</code> via <code>next_u64</code> and <code>next_u32</code>, …","Implement <code>fill_bytes</code> by reading chunks from the output …","Implement <code>fill_bytes</code> by reading chunks from the output …","Implement <code>next_u32</code> via <code>fill_bytes</code>, little-endian order.","Implement <code>next_u64</code> via <code>fill_bytes</code>, little-endian order.","Little-Endian utilities","Reads unsigned 32 bit integers from <code>src</code> into <code>dst</code>.","Reads unsigned 64 bit integers from <code>src</code> into <code>dst</code>.","Error type of random number generators","The core of a random number generator.","Return the next random <code>u32</code>.","Return the next random <code>u64</code>.","Fill <code>dest</code> with random data.","Fill <code>dest</code> entirely with random data.","A marker trait used to indicate that an [<code>RngCore</code>] or …","A random number generator that can be explicitly seeded.","Seed type, which is restricted to types …","Create a new PRNG using the given seed.","Create a new PRNG using a <code>u64</code> seed.","Create a new PRNG seeded from another <code>Rng</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Codes at or above this point can be used by users to …","Codes below this point represent OS Errors (i.e. positive …","Extract the raw OS error code (if this error came from …","Retrieve the error code, if any."],"i":[0,0,1,1,1,0,2,2,2,2,2,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,5,5,5,5,2,2,2,2,2,2,2,3,3,3,3,3,3,3,6,6,6,6,6,6,6,2,2,2,2,3,3,3,3,2,2,2,3,3,3,2,3,6,6,6,2,3,6,6,6,6],"f":[null,null,null,null,[[]],null,null,[[],["blockrng",3]],[[],["usize",15]],[[]],[[["usize",15]]],null,null,[[],["blockrng64",3]],[[],["usize",15]],[[]],[[["usize",15]]],null,[[],["u64",15]],[[]],[[]],[[]],[[],["u32",15]],[[],["u64",15]],null,[[]],[[]],null,null,[[],["u32",15]],[[],["u64",15]],[[]],[[],[["result",4],["error",3]]],null,null,null,[[]],[[["u64",15]]],[[["rngcore",8]],[["result",4],["error",3]]],[[]],[[]],[[],["result",4]],[[]],[[]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[],["result",4]],[[]],[[]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[],["result",4]],[[]],[[]],[[],["result",4]],[[],["typeid",3]],[[],["u32",15]],[[],["u64",15]],[[]],[[],[["result",4],["error",3]]],[[],["u32",15]],[[],["u64",15]],[[]],[[],[["result",4],["error",3]]],[[]],[[["u64",15]]],[[["rngcore",8]],[["result",4],["error",3]]],[[]],[[["u64",15]]],[[["rngcore",8]],[["result",4],["error",3]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["nonzerou32",3]]],[[],["blockrng",3]],[[],["blockrng64",3]],null,null,[[],[["option",4],["i32",15]]],[[],[["nonzerou32",3],["option",4]]]],"p":[[8,"BlockRngCore"],[3,"BlockRng"],[3,"BlockRng64"],[8,"RngCore"],[8,"SeedableRng"],[3,"Error"]]},\
"rand_mt":{"doc":"Mersenne Twister random number generators.","t":[3,3,6,6,4,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,18,11,11,11,11,11,11,11,11,11,18,11,11,11,11,11,11,11,11,11],"n":["Mt19937GenRand32","Mt19937GenRand64","Mt","Mt64","RecoverRngError","TooFewSamples","TooManySamples","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","from","from","from","from","from","clone","clone","clone","default","default","cmp","cmp","eq","ne","eq","ne","eq","ne","partial_cmp","partial_cmp","fmt","fmt","fmt","fmt","hash","hash","hash","try_from","try_from","next_u64","next_u32","fill_bytes","try_fill_bytes","next_u64","next_u32","fill_bytes","try_fill_bytes","from_seed","from_seed","DEFAULT_SEED","new","new_with_key","new_unseeded","next_u64","next_u32","fill_bytes","recover","reseed","reseed_with_key","DEFAULT_SEED","new","new_with_key","new_unseeded","next_u64","next_u32","fill_bytes","recover","reseed","reseed_with_key"],"q":["rand_mt","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["The 32-bit flavor of the Mersenne Twister pseudorandom …","The 64-bit flavor of the Mersenne Twister pseudorandom …","A type alias for [<code>Mt19937GenRand32</code>], 32-bit Mersenne …","A type alias for [<code>Mt19937GenRand64</code>], 64-bit Mersenne …","Error returned from fallible Mersenne Twister recovery …","Attempted to recover an RNG with too many samples.","Attempted to recover an RNG with too few samples.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Construct a Mersenne Twister RNG from 4 bytes.","Construct a Mersenne Twister RNG from a <code>u32</code> seed.","Recover the internal state of a Mersenne Twister using …","Construct a Mersenne Twister RNG from 8 bytes.","Construct a Mersenne Twister RNG from a <code>u64</code> seed.","Recover the internal state of a Mersenne Twister using …","","","","Return a new <code>Mt19937GenRand32</code> with the default seed.","Return a new <code>Mt19937GenRand64</code> with the default seed.","","","","","","","","","","","","","","","","","","Attempt to recover the internal state of a Mersenne …","Attempt to recover the internal state of a Mersenne …","Generate next <code>u64</code> output.","Generate next <code>u32</code> output.","Fill a buffer with bytes generated from the RNG.","Fill a buffer with bytes generated from the RNG.","Generate next <code>u64</code> output.","Generate next <code>u32</code> output.","Fill a buffer with bytes generated from the RNG.","Fill a buffer with bytes generated from the RNG.","Reseed from a little endian encoded <code>u32</code>.","Reseed from a little endian encoded <code>u64</code>.","Default seed used by [<code>Mt19937GenRand32::new_unseeded</code>].","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Generate next <code>u64</code> output.","Generate next <code>u32</code> output.","Fill a buffer with bytes generated from the RNG.","Attempt to recover the internal state of a Mersenne …","Reseed a Mersenne Twister from a single <code>u32</code>.","Reseed a Mersenne Twister from am iterator of <code>u32</code>s.","Default seed used by [<code>Mt19937GenRand64::new_unseeded</code>].","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Generate next <code>u64</code> output.","Generate next <code>u32</code> output.","Fill a buffer with bytes generated from the RNG.","Attempt to recover the internal state of a Mersenne …","Reseed a Mersenne Twister from a single <code>u64</code>.","Reseed a Mersenne Twister from am iterator of <code>u64</code>s."],"i":[0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,2,3,1,2,3,2,3,2,2,3,3,1,1,2,3,2,3,1,1,2,3,1,2,3,2,2,2,2,3,3,3,3,2,3,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3],"f":[null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[["u32",15]]],[[]],[[]],[[["u64",15]]],[[]],[[],["mt19937genrand32",3]],[[],["mt19937genrand64",3]],[[],["recoverrngerror",4]],[[]],[[]],[[["mt19937genrand32",3]],["ordering",4]],[[["mt19937genrand64",3]],["ordering",4]],[[["mt19937genrand32",3]],["bool",15]],[[["mt19937genrand32",3]],["bool",15]],[[["mt19937genrand64",3]],["bool",15]],[[["mt19937genrand64",3]],["bool",15]],[[["recoverrngerror",4]],["bool",15]],[[["recoverrngerror",4]],["bool",15]],[[["mt19937genrand32",3]],[["ordering",4],["option",4]]],[[["mt19937genrand64",3]],[["ordering",4],["option",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["u64",15]],[[],["u32",15]],[[]],[[],[["result",4],["error",3]]],[[],["u64",15]],[[],["u32",15]],[[]],[[],[["result",4],["error",3]]],[[]],[[]],null,[[["u32",15]]],[[]],[[]],[[],["u64",15]],[[],["u32",15]],[[]],[[],[["result",4],["recoverrngerror",4]]],[[["u32",15]]],[[]],null,[[["u64",15]]],[[]],[[]],[[],["u64",15]],[[],["u32",15]],[[]],[[],[["result",4],["recoverrngerror",4]]],[[["u64",15]]],[[]]],"p":[[4,"RecoverRngError"],[3,"Mt19937GenRand32"],[3,"Mt19937GenRand64"]]}\
}');
initSearch(searchIndex);