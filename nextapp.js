let toDOListItems = ["make the bed", "take out the trash", "go to the store"];
let subtaskListOne = ["lay out sheet", "fluff pillows", "place stuffed animals"];


for(let item of toDOListItems){
    addLiToUl(item);
    
}

document.querySelector("input[name='addItem']").addEventListener("click", () =>{
    let toDoInput = document.querySelector("input[name='todo']");

    addLiToUl(toDoInput.value);
    toDoInput.value = "";

})

document.querySelector("#theForm").addEventListener("submit", (event) =>{
    console.log("submitted");
    event.preventDefault();
    
    let toDoInput = document.querySelector("input[name='todo']");

    addLiToUl(toDoInput.value);
    toDoInput.value = "";
})


document.querySelectorAll("#toDoList li button").forEach((button) =>{
    button.addEventListener("click", buttonClicked);
})



// for(let task of subtaskListOne){
//     addSubLiToSubUl(subtaskInput.value);
//     subtaskInput.value = "";
// }

document.querySelectorAll(".addSubTaskButton").forEach((button) =>{
    button.addEventListener("click", addSubtaskButtonClicked);
})


function addLiToUl(item){

    let toDOList = document.querySelector("#toDoList");
    let listItem = document.createElement("li");
    let hThree = document.createElement("h3");
    hThree.innerHTML =item;
    
    let subtaskForm = document.createElement("form");
    subtaskForm.setAttribute("class", "subtaskForm");
    
    let subtaskInput = document.createElement("input");
    subtaskInput.setAttribute("type", "text");
    subtaskInput.setAttribute("class", "subtaskInput");
    subtaskInput.setAttribute("name", "subtaskInput");
    
    let subtaskLabel = document.createElement("label");
    subtaskLabel.setAttribute("for", "subtaskInput");
    subtaskLabel.innerHTML ="Add New Subtasks";
   
    let addSubtaskButton = document.createElement("input");
    addSubtaskButton.setAttribute("type", "button");
    addSubtaskButton.setAttribute("class", "addSubTaskButton");
    addSubtaskButton.setAttribute("value", "Add Subtask");

    let button = document.createElement("button");
    button.innerHTML = "All Done";
    button.addEventListener("click", buttonClicked);


    toDOList.appendChild(listItem);
    listItem.appendChild(hThree);
    listItem.appendChild(button);
    listItem.appendChild(subtaskForm);
    subtaskForm.appendChild(subtaskLabel)
    subtaskForm.appendChild(subtaskInput);
    subtaskForm.appendChild(addSubtaskButton);
    
    
}

function buttonClicked(event){
    console.log("button was clicked");
    event.srcElement.parentElement.remove();
}

// function addSubLiToSubUl(task){
    
//    let subtaskList = document.createElement("ul");
//    let subtaskItem = document.createElement("li");
//     subtaskForm.appendChild(subtaskList);
//     subtaskItem.innerHTML = task;
//     subtaskList.appendChild(subtaskItem);

  
// }



function addSubtaskButtonClicked(event){
    console.log("this was clicked");

}