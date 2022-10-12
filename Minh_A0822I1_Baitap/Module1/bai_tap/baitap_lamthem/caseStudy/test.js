let A = [1, 2, 3]
let B = ['Một', 'Hai', 'ba'];
let C = ["a"];
let x = true;
function nhap(C) {

    for (let i = 0; i < B.length; i++) {
        result = B[i]
        for (let j = 0; j < A.length; j++) {
            if (C == A[i]) {
                C = result;
                console.log(result)
                x=false;
            }
        }
    }
    if (x == true) {
        console.log("not a number")
    }
}



nhap(C)