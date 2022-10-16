let tasks = [];
let price = [];
const taskList = document.getElementById("task-list");
const task1Btn = document.getElementById("task-btn1");
const task2Btn = document.getElementById("task-btn2");
const task3Btn = document.getElementById("task-btn3");
const sendBtn = document.getElementById("send-btn");
const remove = document.getElementById("remove-tag");
const notes = document.getElementById("pin");
const totalPrice = document.getElementById("total-price");


let task1 = {name: "Task 1", price: 10};
let task2 = {name: "Task 2", price: 20};
let task3 = {name: "Task 3", price: 30};

taskList.innerHTML = "";

function addTaskToList(n, p){
    tasks.push(n);
    price.push(p);
    renderTasks();
    addTotal();
}

task1Btn.addEventListener("click", function(){
    if (!tasks.includes(task1.name)){
        let n = task1.name;
        let p = task1.price;
        addTaskToList(n, p);
    }
});

task2Btn.addEventListener("click", function(){
    if (!tasks.includes(task2.name)){
        let n = task2.name;
        let p = task2.price;
        addTaskToList(n, p);
    }
    

});

task3Btn.addEventListener("click", function(){
    if (!tasks.includes(task3.name)){
        let n = task3.name;
        let p = task3.price;
        addTaskToList(n, p);
    }
});

sendBtn.addEventListener("click" , function(){
    tasks = [];
    price = [];
    sum = 0;
    taskList.innerHTML = "";
    totalPrice.innerHTML = "0€";
    notes.value = "No notes";
})

function renderTasks(){
    
    let listItems = ""
    for (let i = 0; i < tasks.length; i++) {
        listItems += `<li class="list-item">
        ${tasks[i]}
        <span><button class="remove-btn" onclick="removeTask(${i})">remove</button></span>
        <span class="price-align">${price[i]}€</span >
        </li>`;
    }
    taskList.innerHTML = listItems 
}


function addTotal(){
  
    let sum = 0;

    for (let i = 0; i < price.length; i++) {
        sum += price[i];
    }
    totalPrice.innerHTML = `€${sum}`
    
}

function removeTask(n){
    tasks.splice(n,1);
    price.splice(n,1);
    addTotal();
    renderTasks();
}

