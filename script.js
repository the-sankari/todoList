const todoList = [{
    name: "let's got",
    dueDate: '2023-12-22'
},
{

    name: 'wash the brain',
    dueDate: '2023-12-22'
    
}
];

rendarTodoList();

function rendarTodoList() {
    let todoListHTML = '';


    todoList.forEach(function (todoObject, index) {
         const { name, dueDate } = todoObject; // distructering
      
      const html = `<div class ="todoList">
      <div class = "js-name-input">${name}</div>
      <div class = "js-date-input">${dueDate}</div>
       <div >
       <button class = "delete-btn" onclick = "
       todoList.splice(${index}, 1);
       rendarTodoList();
       " 
       >Delete</button>
       </div>
      </div>
      `;
        todoListHTML += html;
    })

    /*for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;

        const { name, dueDate } = todoObject; // distructering
      
      const html = `<div class ="todoList">
      <div class = "js-name-input">${name}</div>
      <div class = "js-date-input">${dueDate}</div>
       <div >
       <button class = "delete-btn" onclick = "
       todoList.splice(${i}, 1);
       rendarTodoList();
       " 
       >Delete</button>
       </div>
      </div>
      `;
        todoListHTML += html;
    }*/
    // console.log(todoListHTML)

    const list = document.querySelector('.todoList');

    list.innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');

    const dueDate = dateInputElement.value;


    todoList.push(
        {
            // name: name,
            // dueDate: dueDate
            name,
            dueDate
        }
    );
    // console.log(todoList);
    inputElement.value = '';
    rendarTodoList();
}