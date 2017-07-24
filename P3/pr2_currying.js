/**
 * Created by yahor.turets on 24.07.2017.
 */

function QuadraticEq(a, b, c, x) {
    return `${a}*(${x}**2) + ${b}*x + ${c}`;
}

function Curry() {
    return AddA.bind(null);
}

function AddA(a=1) {
    var partFuncB = AddB.bind(null, a);
    return partFuncB;
}

function AddB(a, b=3) {
    var partFuncC = AddC.bind(null, a, b);
    return partFuncC;
}

function AddC(a, b, c=4) {
    var partFuncX = AddX.bind(null, a, b, c);
    return partFuncX;
}

function AddX(a, b, c, x=6) {
    // var partFuncX = QuadraticEq.bind(null, a, b, c, x);
    // return partFuncX;
    return QuadraticEq(a, b, c, x);
}