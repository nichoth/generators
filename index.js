function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}

// note: `fooFn(..)` here is NOT a generator!!
function fooFn(x) {
    console.log("x: " + x);
}

function *bar() {
    yield; // just pause
    fooFn( yield ); // pause waiting for a parameter to pass into `foo(..)`
}

var fooLog = console.log.bind(console, 'foo iterator');

var iterator = bar();
console.log('bar iterator', iterator.next());

var fooIt = foo();
fooLog(fooIt.next());
fooLog(fooIt.next());



