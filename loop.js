// can iterate over a generator fn
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

// the for..of loop cannot be used in situations where you need to pass in
// values to the generator steps b/c there is no exposed `next()` call.
for (var v of foo()) {
    console.log( v );
}
// 1 2 3 4 5

console.log( v ); // still `5`, not `6` :(
