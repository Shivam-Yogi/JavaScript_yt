// Immediately Invoked Function Expression (IIFE)


(function chai() {
    console.log(`DB connected One`);
})();


( (name) => {
    console.log(`DB connected Two ${name}`);
} )('Shivam');

( function chai() {
    console.log(`DB Connected Three`);
})();

// IIFE is a way to create a private function inside another function, 
// so the inner function can't be accessed from outside of it.

