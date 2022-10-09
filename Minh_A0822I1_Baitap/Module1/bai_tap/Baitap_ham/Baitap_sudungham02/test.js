let anyArrayNumber = [1,2,3,4,5];
/*let arr= +prompt("Nhập số lượng số nguyên")
for (let i = 0; i <arr ; i++) {
    anyArrayNumber[i]= prompt("Nhập số nguyên bất kỳ " + i);
}*/
function reverseArray() {
    for (let i = anyArrayNumber.length - 1; i >= 0 ; i--) {
        newArray = anyArrayNumber[i];
        console.log(newArray);
    }
}
newArray = reverseArray()