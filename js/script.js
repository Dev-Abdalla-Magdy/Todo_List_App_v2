// handle form validation
const inputForm = document.getElementById('add-task-input');

// handle add button
const addButton = document.getElementById('add-task-btn');

// handle empty form screen
const emptyScreen = document.querySelector('.empty-form-screen');

// handle empty-btn-screen
const emptyScreenBtn = document.querySelector('.empty-btn-screen');

// handle tasks list Big Boss Of Tasks
const tasksList = document.querySelector('.tasks-list');

// handle total tasks
let totalTasks = document.querySelector('.total-tasks span');

let unDoneCounter = document.createTextNode('1');

totalTasks.appendChild(unDoneCounter);
// handle completed tasks
let completedTasks = document.querySelector('.completed-tasks span');

let doneCounter = document.createTextNode('0');

completedTasks.appendChild(doneCounter);
// create empty array to add tasks
let allTasks = [];

// create empty array
let doneTasks = [];



// add eventListener on addButton
addButton.addEventListener('click', () => {

  // check if inputForm empty or not
  if (inputForm.value === "" || inputForm.value === null)
  {
    // appear the empty screen
    emptyScreen.style.display = 'block';
    // add event on ok click of empty screen
    emptyScreenBtn.addEventListener('click', () => {
      // disappear the empty screen
      emptyScreen.style.display = 'none';
    });
  }
  else
  {
  // [1] Creating Every Single Task And Its Habshtakanato //
    // create task element (every single task)
    const taskDiv = document.createElement('div');
    // add task class to taskDiv
    taskDiv.classList.add('task');

    // create Task Information element => p 
    const taskInformation = document.createElement('p');
    // add task-info class to taskInformation
    taskInformation.classList.add('task-info');

    // create textNode into Task Information
    const taskInfoText = document.createTextNode(inputForm.value);
    
    // create control element
    const taskControl = document.createElement('div');
    // add task class to taskDiv
    taskControl.classList.add('control');
    
    // create don btn => span
    const donBtn = document.createElement('span');
    // add don class to donBtn
    donBtn.classList.add('don');
    // create textNode into Task Information
    const donText = document.createTextNode('don');
    
    // create del btn => span
    const delBtn = document.createElement('span');
    // add del class to donBtn
    delBtn.classList.add('del');
    // create textNode into Task Information
    const delText = document.createTextNode('del');

  // [2] Appending Its Habshtakanato To His Father => (Every Single Task)
    // append every single task to Big Father => (TasksList)
    tasksList.appendChild(taskDiv);

    // append p Element & control Element to every single task
    taskDiv.appendChild(taskInformation);
    taskDiv.appendChild(taskControl);
    
    // append text content to p element 
    taskInformation.appendChild(taskInfoText);
    
    // append control buttons don & del to control element
    taskControl.appendChild(donBtn);
    taskControl.appendChild(delBtn);
    
    // append text content to del & don elements
    donBtn.appendChild(donText);
    delBtn.appendChild(delText);

    //[3] Delete Text Of Input Form After Add Task
    inputForm.value = '';
    
    controlButtons();
  }

});

function controlButtons() {
  //[4] handle every single task
  const task = document.querySelectorAll('.task');

  allTasks.push(task);

  totalTasks.innerHTML = parseInt(allTasks.length);

  //[5] add delete or done tasks to arrays
  // handle all don btns
  const allDonBtns = document.querySelectorAll('.don');
  
  allDonBtns.forEach((donBtn, index) => {

    donBtn.addEventListener('click', ()=>{

      task[index].style.display = 'none';

      allTasks.length -= 1;

      doneTasks.push(task[index]);
      
      completedTasks.innerHTML = doneTasks.length;
    
      totalTasks.innerHTML = allTasks.length;
      
    })
  })
  
  // handle all del btns
  const allDelBtns = document.querySelectorAll('.del');
  
  allDelBtns.forEach((delBtn, index) => {
    
    delBtn.addEventListener('click', ()=>{
      
      task[index].style.display = 'none';
      allTasks.length--;
      // allTasks.slice(task[index], (task[index] + 1));
      
      totalTasks.innerHTML = allTasks.length;
    })

  })

}

controlButtons();