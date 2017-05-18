  function Fibber() {
    this.memo = {};
}

Fibber.prototype.fib = function(n) {

    // edge case: negative index
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');
    }

    // base case: 0 or 1
    else if (n === 0 || n === 1) {
        return n;
    }

    // see if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
        return this.memo[n];
    }

    var result = this.fib(n-1) + this.fib(n-2);

    // memoize
    this.memo[n] = result;

    return result;
};
