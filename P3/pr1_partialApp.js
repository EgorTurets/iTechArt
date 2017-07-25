/**
 * Created by yahor.turets on 24.07.2017.
 */

function G1(a1, a2, a3, ...args) {
    return `arg1: ${a1}, arg2: ${a2}, arg3: ${a3}, and ${args.length} remaining arguments: ${args}`;
}

function F1(func, ...fixedArgs) {
    var partialFunc = func.bind(null, ...fixedArgs);
    return partialFunc;
}

