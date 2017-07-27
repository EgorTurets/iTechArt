/**
 * Created by yahor.turets on 24.07.2017.
 */

function Curry(func, ...args) {

    return (nextArg) => {
        var allArgs = args.concat(nextArg);
        if (allArgs.length < func.length) {

            return Curry(func, ...allArgs);
        } else {

            return func(...allArgs);
        }
    }
};

//Just for test
function QuadraticEq(a, b, c, x) {

    return a*(x**2) + b*x + c;
}