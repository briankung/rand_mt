var searchIndex = JSON.parse('{\
"rand_core":{"doc":"Random number generation traits","i":[[0,"block","rand_core","The <code>BlockRngCore</code> trait and implementation helpers",null,null],[8,"BlockRngCore","rand_core::block","A trait for RNGs which do not generate random numbers …",null,null],[16,"Item","","Results element type, e.g. <code>u32</code>.",0,null],[16,"Results","","Results type. This is the \'block\' an RNG implementing …",0,null],[10,"generate","","Generate a new block of results.",0,[[]]],[3,"BlockRng","","A wrapper type implementing [<code>RngCore</code>] for some type …",null,null],[12,"core","","The <em>core</em> part of the RNG, implementing the <code>generate</code> …",1,null],[11,"new","","Create a new <code>BlockRng</code> from an existing RNG implementing …",1,[[],["blockrng",3]]],[11,"index","","Get the index into the result buffer.",1,[[],["usize",15]]],[11,"reset","","Reset the number of available results. This will force a …",1,[[]]],[11,"generate_and_set","","Generate a new set of results immediately, setting the …",1,[[["usize",15]]]],[3,"BlockRng64","","A wrapper type implementing [<code>RngCore</code>] for some type …",null,null],[12,"core","","The <em>core</em> part of the RNG, implementing the <code>generate</code> …",2,null],[11,"new","","Create a new <code>BlockRng</code> from an existing RNG implementing …",2,[[],["blockrng64",3]]],[11,"index","","Get the index into the result buffer.",2,[[],["usize",15]]],[11,"reset","","Reset the number of available results. This will force a …",2,[[]]],[11,"generate_and_set","","Generate a new set of results immediately, setting the …",2,[[["usize",15]]]],[0,"impls","rand_core","Helper functions for implementing <code>RngCore</code> functions.",null,null],[5,"next_u64_via_u32","rand_core::impls","Implement <code>next_u64</code> via <code>next_u32</code>, little-endian order.",null,[[],["u64",15]]],[5,"fill_bytes_via_next","","Implement <code>fill_bytes</code> via <code>next_u64</code> and <code>next_u32</code>, …",null,[[]]],[5,"fill_via_u32_chunks","","Implement <code>fill_bytes</code> by reading chunks from the output …",null,[[]]],[5,"fill_via_u64_chunks","","Implement <code>fill_bytes</code> by reading chunks from the output …",null,[[]]],[5,"next_u32_via_fill","","Implement <code>next_u32</code> via <code>fill_bytes</code>, little-endian order.",null,[[],["u32",15]]],[5,"next_u64_via_fill","","Implement <code>next_u64</code> via <code>fill_bytes</code>, little-endian order.",null,[[],["u64",15]]],[0,"le","rand_core","Little-Endian utilities",null,null],[5,"read_u32_into","rand_core::le","Reads unsigned 32 bit integers from <code>src</code> into <code>dst</code>.",null,[[]]],[5,"read_u64_into","","Reads unsigned 64 bit integers from <code>src</code> into <code>dst</code>.",null,[[]]],[3,"Error","rand_core","Error type of random number generators",null,null],[8,"RngCore","","The core of a random number generator.",null,null],[10,"next_u32","","Return the next random <code>u32</code>.",3,[[],["u32",15]]],[10,"next_u64","","Return the next random <code>u64</code>.",3,[[],["u64",15]]],[10,"fill_bytes","","Fill <code>dest</code> with random data.",3,[[]]],[10,"try_fill_bytes","","Fill <code>dest</code> entirely with random data.",3,[[],[["error",3],["result",4]]]],[8,"CryptoRng","","A marker trait used to indicate that an [<code>RngCore</code>] or …",null,null],[8,"SeedableRng","","A random number generator that can be explicitly seeded.",null,null],[16,"Seed","","Seed type, which is restricted to types …",4,null],[10,"from_seed","","Create a new PRNG using the given seed.",4,[[]]],[11,"seed_from_u64","","Create a new PRNG using a <code>u64</code> seed.",4,[[["u64",15]]]],[11,"from_rng","","Create a new PRNG seeded from another <code>Rng</code>.",4,[[["rngcore",8]],[["error",3],["result",4]]]],[11,"borrow","rand_core::block","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"borrow","rand_core","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"next_u32","rand_core::block","",1,[[],["u32",15]]],[11,"next_u64","","",1,[[],["u64",15]]],[11,"fill_bytes","","",1,[[]]],[11,"try_fill_bytes","","",1,[[],[["error",3],["result",4]]]],[11,"next_u32","","",2,[[],["u32",15]]],[11,"next_u64","","",2,[[],["u64",15]]],[11,"fill_bytes","","",2,[[]]],[11,"try_fill_bytes","","",2,[[],[["error",3],["result",4]]]],[11,"from_seed","","",1,[[]]],[11,"seed_from_u64","","",1,[[["u64",15]]]],[11,"from_rng","","",1,[[["rngcore",8]],[["error",3],["result",4]]]],[11,"from_seed","","",2,[[]]],[11,"seed_from_u64","","",2,[[["u64",15]]]],[11,"from_rng","","",2,[[["rngcore",8]],[["error",3],["result",4]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","rand_core","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"from","","",5,[[["nonzerou32",3]]]],[11,"clone","rand_core::block","",1,[[],["blockrng",3]]],[11,"clone","","",2,[[],["blockrng64",3]]],[18,"CUSTOM_START","rand_core","Codes at or above this point can be used by users to …",5,null],[18,"INTERNAL_START","","Codes below this point represent OS Errors (i.e. positive …",5,null],[11,"raw_os_error","","Extract the raw OS error code (if this error came from …",5,[[],[["option",4],["i32",15]]]],[11,"code","","Retrieve the error code, if any.",5,[[],[["option",4],["nonzerou32",3]]]]],"p":[[8,"BlockRngCore"],[3,"BlockRng"],[3,"BlockRng64"],[8,"RngCore"],[8,"SeedableRng"],[3,"Error"]]},\
"rand_mt":{"doc":"Mersenne Twister random number generators.","i":[[3,"Mt19937GenRand32","rand_mt","The 32-bit flavor of the Mersenne Twister pseudorandom …",null,null],[3,"Mt19937GenRand64","","The 64-bit flavor of the Mersenne Twister pseudorandom …",null,null],[6,"Mt","","A type alias for [<code>Mt19937GenRand32</code>], 32-bit Mersenne …",null,null],[6,"Mt64","","A type alias for [<code>Mt19937GenRand64</code>], 64-bit Mersenne …",null,null],[4,"RecoverRngError","","Error returned from fallible Mersenne Twister recovery …",null,null],[13,"TooFewSamples","","Attempted to recover an RNG with too many samples.",0,null],[13,"TooManySamples","","Attempted to recover an RNG with too few samples.",0,null],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","Construct a Mersenne Twister RNG from 4 bytes.",1,[[]]],[11,"from","","Construct a Mersenne Twister RNG from a <code>u32</code> seed.",1,[[["u32",15]]]],[11,"from","","Recover the internal state of a Mersenne Twister using …",1,[[]]],[11,"from","","Construct a Mersenne Twister RNG from 8 bytes.",2,[[]]],[11,"from","","Construct a Mersenne Twister RNG from a <code>u64</code> seed.",2,[[["u64",15]]]],[11,"from","","Recover the internal state of a Mersenne Twister using …",2,[[]]],[11,"clone","","",1,[[],["mt19937genrand32",3]]],[11,"clone","","",2,[[],["mt19937genrand64",3]]],[11,"clone","","",0,[[],["recoverrngerror",4]]],[11,"default","","Return a new <code>Mt19937GenRand32</code> with the default seed.",1,[[]]],[11,"default","","Return a new <code>Mt19937GenRand64</code> with the default seed.",2,[[]]],[11,"cmp","","",1,[[["mt19937genrand32",3]],["ordering",4]]],[11,"cmp","","",2,[[["mt19937genrand64",3]],["ordering",4]]],[11,"eq","","",1,[[["mt19937genrand32",3]],["bool",15]]],[11,"ne","","",1,[[["mt19937genrand32",3]],["bool",15]]],[11,"eq","","",2,[[["mt19937genrand64",3]],["bool",15]]],[11,"ne","","",2,[[["mt19937genrand64",3]],["bool",15]]],[11,"eq","","",0,[[["recoverrngerror",4]],["bool",15]]],[11,"ne","","",0,[[["recoverrngerror",4]],["bool",15]]],[11,"partial_cmp","","",1,[[["mt19937genrand32",3]],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",2,[[["mt19937genrand64",3]],[["option",4],["ordering",4]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"hash","","",1,[[]]],[11,"hash","","",2,[[]]],[11,"hash","","",0,[[]]],[11,"try_from","","Attempt to recover the internal state of a Mersenne …",1,[[],["result",4]]],[11,"try_from","","Attempt to recover the internal state of a Mersenne …",2,[[],["result",4]]],[11,"next_u64","","Generate next <code>u64</code> output.",1,[[],["u64",15]]],[11,"next_u32","","Generate next <code>u32</code> output.",1,[[],["u32",15]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[]]],[11,"try_fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[],[["result",4],["error",3]]]],[11,"next_u64","","Generate next <code>u64</code> output.",2,[[],["u64",15]]],[11,"next_u32","","Generate next <code>u32</code> output.",2,[[],["u32",15]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",2,[[]]],[11,"try_fill_bytes","","Fill a buffer with bytes generated from the RNG.",2,[[],[["result",4],["error",3]]]],[11,"from_seed","","Reseed from a little endian encoded <code>u32</code>.",1,[[]]],[11,"from_seed","","Reseed from a little endian encoded <code>u64</code>.",2,[[]]],[18,"DEFAULT_SEED","","Default seed used by [<code>Mt19937GenRand32::new_unseeded</code>].",1,null],[11,"new","","Create a new Mersenne Twister random number generator …",1,[[["u32",15]]]],[11,"new_with_key","","Create a new Mersenne Twister random number generator …",1,[[]]],[11,"new_unseeded","","Create a new Mersenne Twister random number generator …",1,[[]]],[11,"next_u64","","Generate next <code>u64</code> output.",1,[[],["u64",15]]],[11,"next_u32","","Generate next <code>u32</code> output.",1,[[],["u32",15]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[]]],[11,"recover","","Attempt to recover the internal state of a Mersenne …",1,[[],[["result",4],["recoverrngerror",4]]]],[11,"reseed","","Reseed a Mersenne Twister from a single <code>u32</code>.",1,[[["u32",15]]]],[11,"reseed_with_key","","Reseed a Mersenne Twister from am iterator of <code>u32</code>s.",1,[[]]],[18,"DEFAULT_SEED","","Default seed used by [<code>Mt19937GenRand64::new_unseeded</code>].",2,null],[11,"new","","Create a new Mersenne Twister random number generator …",2,[[["u64",15]]]],[11,"new_with_key","","Create a new Mersenne Twister random number generator …",2,[[]]],[11,"new_unseeded","","Create a new Mersenne Twister random number generator …",2,[[]]],[11,"next_u64","","Generate next <code>u64</code> output.",2,[[],["u64",15]]],[11,"next_u32","","Generate next <code>u32</code> output.",2,[[],["u32",15]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",2,[[]]],[11,"recover","","Attempt to recover the internal state of a Mersenne …",2,[[],[["result",4],["recoverrngerror",4]]]],[11,"reseed","","Reseed a Mersenne Twister from a single <code>u64</code>.",2,[[["u64",15]]]],[11,"reseed_with_key","","Reseed a Mersenne Twister from am iterator of <code>u64</code>s.",2,[[]]]],"p":[[4,"RecoverRngError"],[3,"Mt19937GenRand32"],[3,"Mt19937GenRand64"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);