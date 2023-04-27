document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const taskForm = document.querySelector("#create-task-form")
taskForm.addEventListener("submit",(e)=>{
 console.log(e);
  e.preventDefault();
  //console.log("hello,world")
const inputIn = e.target[0].value
 inputIn.style.color = priorityColor(priortyLevel)
const priortyLevel =parseInt(e.target[1].value)
//console.log(priortyLevel)
function priorityColor(priortyLevel){
  if(priortyLevel === 1){
    return "red"
  } else if(priortyLevel === 2){
   return "yellow"
  } else return "blue"
}

//const inputIn = e.target["new-task-description"]
//console.log(inputIn);
const list = document.createElement("li")
list.innerText = inputIn; 
const ulList = document.querySelector("#tasks")
console.log(ulList)
ulList.append(list)
const deleteButton = document.createElement("button")
deleteButton.innerText = "delete"
list.append(deleteButton)
deleteButton.addEventListener("click",()=>{
  //console.log(list)
 list.remove()
})
const editButton = document.createElement("button");
 editButton.innerText = "edit"
 list.append(editButton);
 editButton.addEventListener("click",()=>{
 const review = inputIn; 
 })
})