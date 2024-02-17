const Input = [1, 2, 2, 5, 5, 4, 10, 10, 10, 21, 11, 7];
let count = 0;
let x = +prompt("nhap vao so can dem: ");
for (let i = 0; i < Input.length; i++) {
  if (Input[i] === x) {
    count++;
  }
}
console.log(`so lan xuat hien cua so ${x} la: ${count}`);
