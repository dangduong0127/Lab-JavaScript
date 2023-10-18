'use strict';
//Lấy element của các thành phần r gán vào các biến
const submitBtn = document.getElementById('submit-btn');
const btnDelete = document.querySelectorAll('btndelete');
const inputID =  document.getElementById('input-id');
const inputName = document.getElementById('input-name');
const age = document.getElementById('input-age');
const type = document.getElementById('input-type');
const Length = document.getElementById('input-length');
const Weight = document.getElementById('input-weight');
const color = document.getElementById('input-color-1');
const breed = document.getElementById('input-breed');
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody")
const healthyBtn = document.getElementById("healthy-btn");
const BMIbtn = document.getElementById("BMI-btn");

//Mảng chứa các trường dữ liệu đc nhập từ form
const petArr = [];
//Data test
const data1 = {
    id: "P001",
    name: "Name01",
    type: "Dog",
    Weight: 3,
    Length: 4,
    age: 2,
    color: "#000000",
    breed: "Tabby",
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    BMIrs: "?",
    date: new Date()
}
const data2 = {
    id: "P002",
    name: "Name02",
    type: "Cat",
    Weight: 5,
    Length: 4,
    age: 1,
    color: "#000000",
    breed: "Tabby",
    vaccinated: true,
    dewormed: true,
    sterilized: true,
    BMIrs: "?",
    date: new Date()
}
petArr.push(data1, data2);
renderTableData(petArr)

//Nút Submit đẩy dữ liệu nhập từ form vào mảng và hiển thị các trường dữ liệu vùa nhập
submitBtn.addEventListener('click', function(e){
    //Dữ liệu được nhập thông qua form
    const data = {
        id: inputID.value,
        name: inputName.value,
        type: type.value,
        Weight: parseInt(Weight.value),
        Length: parseInt(Length.value),
        age: parseInt(age.value),
        color: color.value,
        breed: breed.value,
        vaccinated: vaccinatedInput.checked,
        dewormed: dewormedInput.checked,
        sterilized: sterilizedInput.checked,
        BMIrs: "?",
        date: new Date()
    }
    //validate dữ liệu nếu đúng thì sẽ đẩy dữ liệu vào mảng petArr
    const validate = validateData(data);
    if(validate){
        //đẩy data vào mảng petArr
        petArr.push(data);
        //Hiển thị các truòng dữ liệu của mảng petArr
        renderTableData(petArr);
        //xóa dữ liệu mà ng dùng nhâp trên form
        clearInput();
    }

});
// Hàm xóa theo id
const deletePet = (petId) => {
    if(confirm('Are you sure?')){
        for(let i = 0; i < petArr.length; i++){
            if(petId === petArr[i].id){
                //xóa 1 phần tử của mảng petArr tại vị trí i
                petArr.splice(i,1);
                //Hiển thị lại mảng petArr sau khi xóa
                renderTableData(petArr);
            }
        }
    }
}
// Hàm xóa dữ liệu từ form đã nhập
const clearInput = () => {
    inputID.value = '';
    type.value = 'Select Type';
    inputName.value = '';
    Weight.value = '';
    Length.value = '';
    age.value = '';
    color.value = '';
    breed.value = 'Select Breed';
    vaccinatedInput.checked = false;
    dewormedInput.checked = false;
    sterilizedInput.checked = false;
}
//Hàm hiển thị các trường dữ liệu
function renderTableData(petArr){
    tableBodyEl.innerHTML = '';

    for(let i = 0; i < petArr.length; i++){
        //format thời gian theo định dạng "dd/mm/yyyy"
        let date = petArr[i].date.getDate();
        let month = petArr[i].date.getMonth() + 1;
        let year = petArr[i].date.getFullYear();
        //Nếu là từ ngày 1 đến ngày 9 thì sẽ công chuỗi thêm 1 số 0 ở đầu
        if (date < 10) {
            date = '0' + date;
          }
        //Nếu là từ tháng 1 đến tháng 9 thì sẽ thêm số 0 ở đầu
        if (month < 10) {
            month = '0' + month;
        }
        const formatDate =  date+"/"+month+"/"+year;
        //Tạo thêm element
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${petArr[i].id}</th>
            <td>${petArr[i].name}</td>
            <td>${petArr[i].age}</td>
            <td>${petArr[i].type}</td>
            <td>${petArr[i].Weight} kg</td>
            <td>${petArr[i].Length} cm</td>
            <td>${petArr[i].breed}</td>
            <td>
                <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
            </td>
            <td><i class="bi ${petArr[i].vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"}"></i></td>
            <td><i class="bi ${petArr[i].dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"}"></i></td>
            <td><i class="bi ${petArr[i].sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"}"></i></td>
            <td class="BMIbtn">${petArr[i].BMIrs}</td>
            <td>${formatDate}</td>
            <td>
            <button class="btn btn-danger" onclick="deletePet('${ petArr[i].id }')">Delete</button>
        </td>`;
        tableBodyEl.appendChild(row);
    }
}

//Hàm kiểm tra dữ liệu nhập vào
function validateData(data){
    let isVal = true;

    if(data.id.trim() === ""){
        alert('ID must be unique!');
        isVal = false;
    }

    if(data.name.trim() === ""){
        alert('Please input for name!!!');
        isVal = false;
    }

    if(isNaN(data.age)){
        alert('Age must be between 1 and 15!');
        isVal = false;
    }

    if(data.type === "Select Type"){
        alert("Please select type!!!");
        isVal = false;
    }

    if(isNaN(data.Weight)){
        alert('Weight must be between 1 and 15!');
        isVal = false;
    }

    if(isNaN(data.Length)){
        alert('Length must be between 1 and 100!');
        isVal = false;
    }

    if(data.breed === "Select Breed"){
        alert('Please select Breed!');
        isVal = false;
    }
    //Duyệt mảng kiểm tra xen id từ form nhập vào có trùng với id trong mảng petArr ko
    for(let i = 0 ; i < petArr.length; i++){
        if(data.id === petArr[i].id){
            alert("ID must unique!");
            isVal = false;
            break;
        }
    }

    if(data.age < 1 || data.age > 15){
        alert('Age must be between 1 and 15!')
        isVal = false;
    }

    if(data.Weight < 1 || data.Weight > 15){
        alert('Weight must be between 1 and 15!');
        isVal = false;
    }

    if(data.Length < 1 || data.Length > 100){
        alert('Length must be between 1 and 100!');
        isVal = false;
    }
    //Nếu tất cả điểu kiện đều hợp lệ thì sẽ trả về giá trị true
    // 1 trong các điều kiện ko hợp lệ thì validate là false
    return isVal;
}

//Nút hiển thị những thú cưng khỏe mạnh
let healthyCheck = true;
healthyBtn.addEventListener("click", function(){
    //Nếu thỏa mãn điều kiện tất cả phần check đều true 
    // thì sẽ đẩy những trường dữ liệu đó vào mảng mới là HealthyPetArr
    //Và hiển thị mảng đó lên
    if(healthyCheck === true){
        //Hiện thú cưng khỏe mạnh
        const HealthyPetArr = [];
        for(let i = 0; i< petArr.length; i++){
            if(petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized){
                HealthyPetArr.push(petArr[i]);
            }
        }
        renderTableData(HealthyPetArr);
        //Sau đó đổi nút
        healthyBtn.textContent = 'Show All Pet';

        healthyCheck = false;
    } else {
        //hiện toàn bộ thú cưng
        renderTableData(petArr);
        healthyBtn.textContent = 'Show Healthy Pet';
        healthyCheck = true;
    }
})
// Nút tính chỉ số BMI cho tất cả các thú cưng
BMIbtn.addEventListener("click", function(){
    //function BMI for cat
    function BMIforCat(weight, length){
        return (weight * 886) / length ** 2;
    }
    //function BMI for dog
    function BMIforDog(weight, length){
        return (weight * 703) / length ** 2;
    }
    //Duyêt mảng kiểm tra loại động vật để sử dụng hàm phù hợp với từng con 
    //sau đó hiển thị ra với giá trị BMI sẽ được làm tròn đến chữ số thập phân thứ 2.
    for(let i = 0; i < petArr.length; i++){
        if(petArr[i].type === "Cat"){
            // console.log(BMIcat(petArr[i].Weight, petArr[i].Length));
            petArr[i].BMIrs = BMIforCat(petArr[i].Weight, petArr[i].Length).toFixed(2);
        } else{
            // console.log(BMIforDog(petArr[i].Weight, petArr[i].Length));
            petArr[i].BMIrs = BMIforDog(petArr[i].Weight, petArr[i].Length).toFixed(2);
        }
        renderTableData(petArr)
    }
});

