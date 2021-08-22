const name=document.querySelector('#name');
const id=document.querySelector('#id')
const department=document.querySelector('#department')
const btn=document.querySelector('.btn')
const studentform=document.querySelector('#student-form')

btn.addEventListener('click',function(event){
event.preventDefault()

//Basic vallidation
if(name.value==''|| id.value==''||department.value==''){
    alert("all  is find")
}else{
    const newRow=document.createElement('tr');

//creating new studentname
const newName = document.createElement('th')
newName.innerHTML = name.value
newRow.appendChild(newName)

//creating new ID
const newId = document.createElement('th')
newId.innerHTML = id.value
newRow.appendChild(newId)

//creating new Department
const newDepartment = document.createElement('th')
newDepartment.innerHTML = department.value
newRow.appendChild(newDepartment)

//displaying in table
studentform.appendChild(newRow)

}


});