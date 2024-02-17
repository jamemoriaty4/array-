const array = [1, 2, 3, 4, 5];

/* splice array

    dùng để tbay đổi nội dung của mảng bằng cahsc loại bỏ hoặc thêm phần tử mới cho mảng
    Cú pháp: 
    array.splice(start, deleteCount, item1,item2,item3,...);
    start là vị trí bắt đầu thay đổi mảng
    deleteCount là số lượng phần tử cần xóa khỏi mảng
    item1,2,3,.. là số phần tử muốn thêm vào mảng từ vị trí start----- điều kiện thêm là deleteCount ===0
*/
array.splice(1, 2); // xóa đi 2 phần tử kể từ vị trí số 1
array.splice(1, 0, 5); //thêm phần tử số 5 vào vị trí số 1
array.splice(1, 1, 4); //thay thế phần tử ở vị trí số 1 bằng giá trị 4
console.log(array);

/* slice 
    dùng để tạo ra 1 bản sao của mảng hoặc lấy 1 phần tử của mảng đã cho
    Cú pháp: array.slice(start, end)
    output: mảng mới chứa các phần tử từ vị trí start đến end-1
*/
let newArray = array.slice(2, 4);
console.log(newArray);
