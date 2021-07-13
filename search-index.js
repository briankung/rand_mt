var searchIndex = JSON.parse('{\
"rand_core":{"doc":"Random number generation traits","t":[18,8,3,18,8,16,8,0,11,11,11,10,11,11,11,11,11,10,0,11,0,10,10,11,11,10,11,11,11,3,3,8,16,16,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,5,5],"n":["CUSTOM_START","CryptoRng","Error","INTERNAL_START","RngCore","Seed","SeedableRng","block","borrow","borrow_mut","code","fill_bytes","fmt","fmt","from","from","from_rng","from_seed","impls","into","le","next_u32","next_u64","raw_os_error","seed_from_u64","try_fill_bytes","try_from","try_into","type_id","BlockRng","BlockRng64","BlockRngCore","Item","Results","borrow","borrow","borrow_mut","borrow_mut","clone","clone","core","core","fill_bytes","fill_bytes","fmt","fmt","from","from","from_rng","from_rng","from_seed","from_seed","generate","generate_and_set","generate_and_set","index","index","into","into","new","new","next_u32","next_u32","next_u64","next_u64","reset","reset","seed_from_u64","seed_from_u64","try_fill_bytes","try_fill_bytes","try_from","try_from","try_into","try_into","type_id","type_id","fill_bytes_via_next","fill_via_u32_chunks","fill_via_u64_chunks","next_u32_via_fill","next_u64_via_fill","next_u64_via_u32","read_u32_into","read_u64_into"],"q":["rand_core","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rand_core::block","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","rand_core::impls","","","","","","rand_core::le",""],"d":["Codes at or above this point can be used by users to …","A marker trait used to indicate that an <code>RngCore</code> or …","Error type of random number generators","Codes below this point represent OS Errors (i.e. positive …","The core of a random number generator.","Seed type, which is restricted to types …","A random number generator that can be explicitly seeded.","The <code>BlockRngCore</code> trait and implementation helpers","","","Retrieve the error code, if any.","Fill <code>dest</code> with random data.","","","","","Create a new PRNG seeded from another <code>Rng</code>.","Create a new PRNG using the given seed.","Helper functions for implementing <code>RngCore</code> functions.","","Little-Endian utilities","Return the next random <code>u32</code>.","Return the next random <code>u64</code>.","Extract the raw OS error code (if this error came from …","Create a new PRNG using a <code>u64</code> seed.","Fill <code>dest</code> entirely with random data.","","","","A wrapper type implementing <code>RngCore</code> for some type …","A wrapper type implementing <code>RngCore</code> for some type …","A trait for RNGs which do not generate random numbers …","Results element type, e.g. <code>u32</code>.","Results type. This is the ‘block’ an RNG implementing …","","","","","","","The <em>core</em> part of the RNG, implementing the <code>generate</code> …","The <em>core</em> part of the RNG, implementing the <code>generate</code> …","","","","","","","","","","","Generate a new block of results.","Generate a new set of results immediately, setting the …","Generate a new set of results immediately, setting the …","Get the index into the result buffer.","Get the index into the result buffer.","","","Create a new <code>BlockRng</code> from an existing RNG implementing …","Create a new <code>BlockRng</code> from an existing RNG implementing …","","","","","Reset the number of available results. This will force a …","Reset the number of available results. This will force a …","","","","","","","","","","","Implement <code>fill_bytes</code> via <code>next_u64</code> and <code>next_u32</code>, …","Implement <code>fill_bytes</code> by reading chunks from the output …","Implement <code>fill_bytes</code> by reading chunks from the output …","Implement <code>next_u32</code> via <code>fill_bytes</code>, little-endian order.","Implement <code>next_u64</code> via <code>fill_bytes</code>, little-endian order.","Implement <code>next_u64</code> via <code>next_u32</code>, little-endian order.","Reads unsigned 32 bit integers from <code>src</code> into <code>dst</code>.","Reads unsigned 64 bit integers from <code>src</code> into <code>dst</code>."],"i":[1,0,0,1,0,2,0,0,1,1,1,3,1,1,1,1,2,2,0,1,0,3,3,1,2,3,1,1,1,0,0,0,4,4,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,4,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,5,6,0,0,0,0,0,0,0,0],"f":[null,null,null,null,null,null,null,null,[[]],[[]],[[],[["nonzerou32",3],["option",4,["nonzerou32"]]]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["nonzerou32",3]]],[[]],[[["rngcore",8]],[["result",4,["error"]],["error",3]]],[[]],null,[[]],null,[[],["u32",15]],[[],["u64",15]],[[],[["i32",15],["option",4,["i32"]]]],[[["u64",15]]],[[],[["result",4,["error"]],["error",3]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["blockrng",3]],[[],["blockrng64",3]],null,null,[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[["rngcore",8]],[["result",4,["error"]],["error",3]]],[[["rngcore",8]],[["result",4,["error"]],["error",3]]],[[]],[[]],[[]],[[["usize",15]]],[[["usize",15]]],[[],["usize",15]],[[],["usize",15]],[[]],[[]],[[],["blockrng",3]],[[],["blockrng64",3]],[[],["u32",15]],[[],["u32",15]],[[],["u64",15]],[[],["u64",15]],[[]],[[]],[[["u64",15]]],[[["u64",15]]],[[],[["result",4,["error"]],["error",3]]],[[],[["result",4,["error"]],["error",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]],[[],["u32",15]],[[],["u64",15]],[[],["u64",15]],[[]],[[]]],"p":[[3,"Error"],[8,"SeedableRng"],[8,"RngCore"],[8,"BlockRngCore"],[3,"BlockRng"],[3,"BlockRng64"]]},\
"rand_mt":{"doc":"Mersenne Twister random number generators.","t":[18,18,6,3,3,6,4,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["DEFAULT_SEED","DEFAULT_SEED","Mt","Mt19937GenRand32","Mt19937GenRand64","Mt64","RecoverRngError","TooFewSamples","TooManySamples","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","cmp","cmp","default","default","eq","eq","eq","fill_bytes","fill_bytes","fill_bytes","fill_bytes","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from_seed","from_seed","hash","hash","hash","into","into","into","ne","ne","ne","new","new","new_unseeded","new_unseeded","new_with_key","new_with_key","next_u32","next_u32","next_u32","next_u32","next_u64","next_u64","next_u64","next_u64","partial_cmp","partial_cmp","recover","recover","reseed","reseed","reseed_with_key","reseed_with_key","to_owned","to_owned","to_owned","to_string","try_fill_bytes","try_fill_bytes","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id"],"q":["rand_mt","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Default seed used by <code>Mt19937GenRand32::new_unseeded</code>.","Default seed used by <code>Mt19937GenRand64::new_unseeded</code>.","A type alias for <code>Mt19937GenRand32</code>, 32-bit Mersenne …","The 32-bit flavor of the Mersenne Twister pseudorandom …","The 64-bit flavor of the Mersenne Twister pseudorandom …","A type alias for <code>Mt19937GenRand64</code>, 64-bit Mersenne …","Error returned from fallible Mersenne Twister recovery …","Attempted to recover an RNG with too many samples.","Attempted to recover an RNG with too few samples.","","","","","","","","","","","","","","","Return a new <code>Mt19937GenRand32</code> with the default seed.","Return a new <code>Mt19937GenRand64</code> with the default seed.","","","","Fill a buffer with bytes generated from the RNG.","Fill a buffer with bytes generated from the RNG.","Fill a buffer with bytes generated from the RNG.","Fill a buffer with bytes generated from the RNG.","","","","","Recover the internal state of a Mersenne Twister using …","","Construct a Mersenne Twister RNG from 4 bytes.","Construct a Mersenne Twister RNG from a <code>u32</code> seed.","Construct a Mersenne Twister RNG from 8 bytes.","Recover the internal state of a Mersenne Twister using …","","Construct a Mersenne Twister RNG from a <code>u64</code> seed.","","Reseed from a little endian encoded <code>u32</code>.","Reseed from a little endian encoded <code>u64</code>.","","","","","","","","","","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Create a new Mersenne Twister random number generator …","Generate next <code>u32</code> output.","Generate next <code>u32</code> output.","Generate next <code>u32</code> output.","Generate next <code>u32</code> output.","Generate next <code>u64</code> output.","Generate next <code>u64</code> output.","Generate next <code>u64</code> output.","Generate next <code>u64</code> output.","","","Attempt to recover the internal state of a Mersenne …","Attempt to recover the internal state of a Mersenne …","Reseed a Mersenne Twister from a single <code>u32</code>.","Reseed a Mersenne Twister from a single <code>u64</code>.","Reseed a Mersenne Twister from am iterator of <code>u32</code>s.","Reseed a Mersenne Twister from am iterator of <code>u64</code>s.","","","","","Fill a buffer with bytes generated from the RNG.","Fill a buffer with bytes generated from the RNG.","Attempt to recover the internal state of a Mersenne …","","","Attempt to recover the internal state of a Mersenne …","","","","","","",""],"i":[1,2,0,0,0,0,0,3,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,1,2,1,2,3,1,1,2,2,1,2,3,3,1,1,1,1,2,2,2,2,3,1,2,1,2,3,1,2,3,1,2,3,1,2,1,2,1,2,1,1,2,2,1,1,2,2,1,2,1,2,1,2,1,2,1,2,3,3,1,2,1,1,2,2,3,1,2,3,1,2,3],"f":[null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["mt19937genrand32",3]],[[],["mt19937genrand64",3]],[[],["recoverrngerror",4]],[[]],[[]],[[]],[[["mt19937genrand32",3]],["ordering",4]],[[["mt19937genrand64",3]],["ordering",4]],[[]],[[]],[[["mt19937genrand32",3]],["bool",15]],[[["mt19937genrand64",3]],["bool",15]],[[["recoverrngerror",4]],["bool",15]],[[]],[[]],[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[["u32",15]]],[[]],[[]],[[]],[[["u64",15]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["mt19937genrand32",3]],["bool",15]],[[["mt19937genrand64",3]],["bool",15]],[[["recoverrngerror",4]],["bool",15]],[[["u32",15]]],[[["u64",15]]],[[]],[[]],[[]],[[]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[],["u32",15]],[[],["u64",15]],[[],["u64",15]],[[],["u64",15]],[[],["u64",15]],[[["mt19937genrand32",3]],[["option",4,["ordering"]],["ordering",4]]],[[["mt19937genrand64",3]],[["option",4,["ordering"]],["ordering",4]]],[[],[["recoverrngerror",4],["result",4,["recoverrngerror"]]]],[[],[["recoverrngerror",4],["result",4,["recoverrngerror"]]]],[[["u32",15]]],[[["u64",15]]],[[]],[[]],[[]],[[]],[[]],[[],["string",3]],[[],[["result",4,["error"]],["error",3]]],[[],[["result",4,["error"]],["error",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]]],"p":[[3,"Mt19937GenRand32"],[3,"Mt19937GenRand64"],[4,"RecoverRngError"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};