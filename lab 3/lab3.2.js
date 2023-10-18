const numNeighbours = prompt('How many neighbor countries does your country have?');

if (numNeighbours === 1){
    console.log('Only 1 border!');
} else if (numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// lab 3.2 câu 6
/*Thay "==" thành "===" thì sẽ in ra "No Borders" 
vì "===" là kiểu so sánh nghiêm ngặt lúc này 1 từ biến nhập vào là kiểu string khác với kiểu số
vậy nên chương trình sẽ thực thi khối lệnh else*/

// lab 3.2 câu 7
/* chương trình sẽ lỗi vì ko thể đặt tên biến là số*/

// lab 3.2 câu 8
// nên sử dụng toán tử "===" và chuyển đổi kiểu trong trường hợp này
// Vì để lấy được đúng số từ chuỗi mà người dùng nhập vào