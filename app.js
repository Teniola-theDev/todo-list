// get all dom values
// -----links/states-----
const activeLink = document.querySelector('.active');
const allLink = document.querySelector('.all');
const completedLink = document.querySelector('.completed');
//----form input bar and button and checkbox ----
const inputBar = document.querySelector('.input-bar');
const inputBtn = document.querySelector('.input-btn');
const checkbox = document.querySelector('.checkbox');
// ----parent container----
const parentForTasks = document.querySelector('.list');
// functions

function addTask(task) {
  //create new li element, give class name, append to ul.
  const taskDiv = document.createElement('div');

  taskDiv.innerHTML = `
  <input type="checkbox" name="list" id="list" class="checkbox check-checkbox"  />
  <label for="list" class='check-label'>${task}</label>
  
  `;
  taskDiv.className = 'check-div';
  // taskDiv.style.border = '1px solid red';
  parentForTasks.appendChild(taskDiv);
  console.log(taskDiv);
}

//event listeners
// -----enter task and add to dom-----
inputBtn.addEventListener('click', function (e) {
  addTask(inputBar.value);
  e.preventDefault();
});
