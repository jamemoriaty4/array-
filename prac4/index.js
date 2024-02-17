/* Phương thức Shift() 
    dùng để loại bỏ phần tử đầu tien của mảng và trả về phần tử đã loại bỏ
*/

let array = [1, 2, 3, 4, 5];

let fa = array.shift();

console.log(array); //[2,3,4,5]
console.log(fa); //1

// phương thức unshift()
// thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng mới

let longNewArray = array.unshift(-1, 0, 1);
console.log(array);
console.log(longNewArray);
