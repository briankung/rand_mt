var searchIndex={};
searchIndex["rand_mt"] = {"doc":"Mersenne Twister random number generators.","i":[[3,"MT19937","rand_mt","The 32-bit flavor of the Mersenne Twister pseudorandom…",null,null],[3,"MT19937_64","","The 64-bit flavor of the Mersenne Twister pseudorandom…",null,null],[18,"DEFAULT_SEED","","Default seed used by [`MT19937::new_unseeded`].",0,null],[11,"new","","Create a new Mersenne Twister random number generator…",0,[[["u32"]],["self"]]],[11,"new_from_slice","","Create a new Mersenne Twister random number generator…",0,[[],["self"]]],[11,"new_unseeded","","Create a new Mersenne Twister random number generator…",0,[[],["self"]]],[11,"recover","","Recover the internal state of a Mersenne Twister instance…",0,[[],["option"]]],[11,"reseed","","Reseed a Mersenne Twister from a single `u32`.",0,[[["self"],["u32"]]]],[11,"reseed_from_slice","","Reseed a Mersenne Twister from a sequence of `u32`s.",0,[[["self"]]]],[18,"DEFAULT_SEED","","Default seed used by [`MT19937_64::new_unseeded`].",1,null],[11,"new","","Create a new Mersenne Twister random number generator…",1,[[["u64"]],["self"]]],[11,"new_from_slice","","Create a new Mersenne Twister random number generator…",1,[[],["self"]]],[11,"new_unseeded","","Create a new Mersenne Twister random number generator…",1,[[],["self"]]],[11,"recover","","Recover the internal state of a Mersenne Twister instance…",1,[[],["option"]]],[11,"reseed","","Reseed a Mersenne Twister from a single `u64`.",1,[[["self"],["u64"]]]],[11,"reseed_from_slice","","Reseed a Mersenne Twister from a sequence of `u64`s.",1,[[["self"]]]],[6,"MersenneTwister","","The most platform-appropriate Mersenne Twister flavor.",null,null],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"into","","",0,[[],["u"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"into","","",1,[[],["u"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"eq","","",0,[[["self"]],["bool"]]],[11,"eq","","",1,[[["self"]],["bool"]]],[11,"cmp","","",0,[[["self"]],["ordering"]]],[11,"cmp","","",1,[[["self"]],["ordering"]]],[11,"partial_cmp","","",0,[[["self"]],[["option",["ordering"]],["ordering"]]]],[11,"partial_cmp","","",1,[[["self"]],[["option",["ordering"]],["ordering"]]]],[11,"hash","","",0,[[["self"],["h"]]]],[11,"hash","","",1,[[["self"],["h"]]]],[11,"clone","","",0,[[["self"]],["mt19937"]]],[11,"clone","","",1,[[["self"]],["mt19937_64"]]],[11,"default","","Return a new `MT19937` with the default seed.",0,[[],["self"]]],[11,"default","","Return a new `MT19937_64` with the default seed.",1,[[],["mt19937_64"]]],[11,"next_u64","","Generate next `u64` output.",0,[[["self"]],["u64"]]],[11,"next_u32","","Generate next `u32` output.",0,[[["self"]],["u32"]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",0,[[["self"]]]],[11,"try_fill_bytes","","Fill a buffer with bytes generated from the RNG.",0,[[["self"]],[["result",["error"]],["error"]]]],[11,"next_u64","","Generate next `u64` output.",1,[[["self"]],["u64"]]],[11,"next_u32","","Generate next `u32` output.",1,[[["self"]],["u32"]]],[11,"fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[["self"]]]],[11,"try_fill_bytes","","Fill a buffer with bytes generated from the RNG.",1,[[["self"]],[["result",["error"]],["error"]]]],[11,"from_seed","","Reseed from a little endian encoded `u32`.",0,[[],["self"]]],[11,"from_seed","","Reseed from a little endian encoded `u64`.",1,[[],["self"]]]],"p":[[3,"MT19937"],[3,"MT19937_64"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);