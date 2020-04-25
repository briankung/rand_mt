var searchIndex = JSON.parse('{\
"rand_mt":{"doc":"Mersenne Twister random number generators.","i":[[3,"Mt19937GenRand32","rand_mt","The 32-bit flavor of the Mersenne Twister pseudorandom…",null,null],[3,"Mt19937GenRand64","","The 64-bit flavor of the Mersenne Twister pseudorandom…",null,null],[4,"RecoverRngError","","Error returned from fallible Mersenne Twister recovery…",null,null],[13,"TooFewSamples","","Attempted to recover an RNG with too many samples.",0,null],[13,"TooManySamples","","Attempted to recover an RNG with too few samples.",0,null],[18,"DEFAULT_SEED","","Default seed used by [`Mt19937GenRand32::new_unseeded`].",1,null],[11,"new","","Create a new Mersenne Twister random number generator…",1,[[]]],[11,"new_with_key","","Create a new Mersenne Twister random number generator…",1,[[]]],[11,"new_unseeded","","Create a new Mersenne Twister random number generator…",1,[[]]],[11,"recover","","Attempt to recover the internal state of a Mersenne…",1,[[],[["result",4],["recoverrngerror",4]]]],[11,"reseed","","Reseed a Mersenne Twister from a single `u32`.",1,[[]]],[11,"reseed_with_key","","Reseed a Mersenne Twister from am iterator of `u32`s.",1,[[]]],[18,"DEFAULT_SEED","","Default seed used by [`Mt19937GenRand64::new_unseeded`].",2,null],[11,"new","","Create a new Mersenne Twister random number generator…",2,[[]]],[11,"new_with_key","","Create a new Mersenne Twister random number generator…",2,[[]]],[11,"new_unseeded","","Create a new Mersenne Twister random number generator…",2,[[]]],[11,"recover","","Attempt to recover the internal state of a Mersenne…",2,[[],[["result",4],["recoverrngerror",4]]]],[11,"reseed","","Reseed a Mersenne Twister from a single `u64`.",2,[[]]],[11,"reseed_with_key","","Reseed a Mersenne Twister from am iterator of `u64`s.",2,[[]]],[6,"Mt","","A type alias for [`Mt19937GenRand32`], 32-bit Mersenne…",null,null],[6,"Mt64","","A type alias for [`Mt19937GenRand64`], 64-bit Mersenne…",null,null],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","Recover the internal state of a Mersenne Twister using the…",1,[[]]],[11,"from","","Recover the internal state of a Mersenne Twister using the…",2,[[]]],[11,"clone","","",1,[[],["mt19937genrand32",3]]],[11,"clone","","",2,[[],["mt19937genrand64",3]]],[11,"clone","","",0,[[],["recoverrngerror",4]]],[11,"default","","Return a new `Mt19937GenRand32` with the default seed.",1,[[]]],[11,"default","","Return a new `Mt19937GenRand64` with the default seed.",2,[[]]],[11,"cmp","","",1,[[],["ordering",4]]],[11,"cmp","","",2,[[],["ordering",4]]],[11,"eq","","",1,[[]]],[11,"eq","","",2,[[]]],[11,"eq","","",0,[[["recoverrngerror",4]]]],[11,"ne","","",0,[[["recoverrngerror",4]]]],[11,"partial_cmp","","",1,[[],[["option",4],["ordering",4]]]],[11,"partial_cmp","","",2,[[],[["option",4],["ordering",4]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"hash","","",1,[[]]],[11,"hash","","",2,[[]]],[11,"hash","","",0,[[]]],[11,"try_from","","Attempt to recover the internal state of a Mersenne…",1,[[],["result",4]]],[11,"try_from","","Attempt to recover the internal state of a Mersenne…",2,[[],["result",4]]],[11,"next_u64","","Generate next `u64` output.",1,[[]]],[11,"next_u32","","Generate next `u32` output.",1,[[]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[]]],[11,"try_fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[],[["error",3],["result",4]]]],[11,"next_u64","","Generate next `u64` output.",2,[[]]],[11,"next_u32","","Generate next `u32` output.",2,[[]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",2,[[]]],[11,"try_fill_bytes","","Fill a buffer with bytes generated from the RNG.",2,[[],[["error",3],["result",4]]]],[11,"from_seed","","Reseed from a little endian encoded `u32`.",1,[[]]],[11,"from_seed","","Reseed from a little endian encoded `u64`.",2,[[]]]],"p":[[4,"RecoverRngError"],[3,"Mt19937GenRand32"],[3,"Mt19937GenRand64"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);