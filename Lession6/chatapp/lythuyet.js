// 1. Cách set up file 

// a. css: chứa các file css

// b. assets: để lưu các hình ảnh 

// c. components: file chứa các file components 
// (vd: header)

// d. pages
// (Nhưng component ghép với nhau tạo thành pages)
// (file Main.js là file hiển thị ra giao diện của cta)


// 2. Khái niệm modules 

// - Là nơi chia sẻ qua lại giữa các components

// VD: Giả sử mk có 2 file js 

// + helpes.js : nhiệm vụ của file này chỉ là để defind (khởi
// tạo cái function thôi)

// + index.js 


// => Để file index.js lấy code của file helper.js thì 
// file helper.js phải có lệnh export 
// => còn file index.js phải import file kia về 

// vd: 

// helper.js

// export function sum(a, b){
//     return a + b;
// }


// index.js 

// import {sum} from "./helper.js";

// (cú pháp import {cái mk sẽ lấy ra}) from "đường dẫn file 
// muốn lấy")


// !! Chú ý để sử dụng đc module khi 
// link <script></script> ở dưới body phải thêm 
// type="module"



// * Về export default 

// - 1 file chỉ đc export default 1 lần 

// helper.js 

// export default User;
// (export class User)


// index.js 

// import User from "./helper.js";


