function *foo(x) {
    var y = 2 * (yield (x + 1));  // sends out value 6
    var z = yield (y / 3);  // sends out the value 8 b/c 24/3
    return (x + y + z);  // return (5 + 24 + 13)
}

var it = foo( 5 );  // pass in `x`

// note: not sending anything into `next()` here
console.log( it.next() );       // { value:6, done:false }

// send 12 to that waiting `yield (x + 1)`
// y is set to 12 * 2, value 24
console.log( it.next( 12 ) );   // { value:8, done:false }

// sends 13 to that waiting yield (y / 3)
console.log( it.next( 13 ) );   // { value:42, done:true }

