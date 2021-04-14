// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// let s = prompt(` Nhập vào một chuỗi bất kì `);
// let str = s;
// let newString = "";
// for( let i = str.length -1 ; i>=0; i--){
//     newString += str[i];
// }
// console.log(` Chuỗi đảo ngược là ${newString}`);


// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
// Đầu vào: str
// Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// Ví dụ
// Cho "this is Test"; In ra "This is Test"
// Cho "hello a"; In ra "Hello A”

// let s = String(prompt(`Nhập một câu bất kì:`));
// let str = s.toLowerCase().split(" ");
// let newString = "";
// for (let i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
//     newString += str[i] + " ";
// }
// console.log(newString);


// Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

// let arr = [];
// let s = prompt(`Nhập một dãy số bất kì`);
// arr = s.split(",");
// console.log(arr);

// // let result = arr.sort().reduce((a,b)=>{
// //     let lengt = a.length
// //     if(lengt === 0 || a[lengt - 1] !== b){
// //         a.push(b);
// //     }
// //     return a;
// // },[]);
// // console.log(` Mảng mới là  ${result}`);

// var newArr = []
// for (var i = 0; i < arr.length; i++) {
//   if (newArr.indexOf(arr[i]) === -1) {
//     newArr.push(arr[i])
//   }
// }
// console.log(` Mảng mới là ${newArr}`);


// Bài 4 : Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ).
//  Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

// let mindX = [{name: "Ngọc", age: 22, salary: 5000, position: "Sếp"},
//              {name: "Huyền", age: 22, salary: 4000, position: "Sếp"},
//             {name: "Toàn", age: 22, salary: 6000, position: "Sếp"}]

// let key = prompt(` Nhập vào lựa chọn C-R-U-D `);
// if(key === "C"){
//     let name = prompt('Name : ');
//     let age = Number(prompt('Age : '));
//     let salary = Number(prompt('Salary : '));
//     let position = prompt('Position : '); 
//     let newPerson = {
//             name :name,
//             age : age,
//             salary : salary,
//             position : position
//                     }
//     mindX.push(newPerson);
//     console.table(mindX);

// }
// else if( key === "R"){
//     console.table(mindX);
// }

// else if(key === "U"){

//     let input = prompt('Nhập vị trí cần sửa: ');
//      if(input > mindX.length || input < 0){
//         alert("ko tìm thây vị trí" + input);
//         }
//      else{
            
//         mindX[input].name = prompt('Name : ');
//         mindX[input].age = Number(prompt('Age : '));
//         mindX[input].salary = Number(prompt('Salary : '));
//         mindX[input].position = prompt('Position : ');    
//         console.table(mindX);
//      }
// }
// else if(key === "D"){
//     let d = prompt('Nhập vị trí cần xóa: ');
//     if(d > mindX.length || d < 0){
//         alert("ko tìm thây vị trí" + d);
//     }
//     else{
//     mindX.splice(d,1);
//     console.table(mindX);
//     }

// }
// else{
//     alert(` Lựa chọn không đúng. Mời nhập lại`);
// }

// Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// Ví dụ
// Ngày 30/4/2019 là ngày hợp lệ
// Ngày 29/2/2019 là ngày không hợp lệ
// Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30]
// và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 
//năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// Ví dụ
// Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021

let day = Number(prompt("Nhập ngày:"));
let month = Number(prompt("Nhập tháng:"));
let year = Number(prompt("Nhập năm:"));

switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        if (day > 0 && day <= 31) {
            console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`);
            if (day === 31 && month === 12) {
                console.log(`Ngày tiếp theo là: ${day - 30}/01/${year + 1}`);
            } else if (day === 31 && month < 12 ) {
                console.log(`Ngày tiếp theo là: ${day - 30}/${month + 1}/${year}`);
            } else {
                console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
            }
        } else {
            console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`);
        }
        break;
    case 4: case 6: case 9: case 11:
        if (day > 0 && day <= 30) {
            console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`);
            if (day === 30) {
                console.log(`Ngày tiếp theo là: ${day - 29}/${month + 1}/${year}`);
            } else {
                console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
            }
        } else {
            console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`);
        }
        break;
    case 2:
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            console.log(`${year} là năm nhuận`);
            if (day > 0 && day <= 29) {
                console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`)
                if (day === 29) {
                    console.log(`Ngày tiếp theo là: ${day - 28}/${month + 1}/${year}`);
                } else {
                    console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
                }
            } else {
                console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`);
            }
        } else {
            console.log(`${year} không là năm nhuận`);
            if (day > 0 && day <= 28) {
                console.log(`Ngày ${day}/${month}/${year} là ngày hợp lệ.`)
                if (day === 28) {
                    console.log(`Ngày tiếp theo là: ${day - 27}/${month + 1}/${year}`);
                } else {
                    console.log(`Ngày tiếp theo là: ${day + 1}/${month}/${year}`);
                }
            } else {
                console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ.`);
            }
        }
        break;
        default:
            break;
}




 




