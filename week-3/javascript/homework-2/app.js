// inputtan aldigim todo degerim varsa createTodoElement() fonksiyonuyla yeni todo olusturup,
// olusturdugumuz todoyu da addTodoLocalStroge() fonksiyonuyla localStorage ekliyorum
// degerimi trim(); liyorum ki gereksiz bosluklari siliyorum. Ve bos deger girersem bu sayede alert gosterebiliyorum.
function newAddTodo() {
  let inputDOM = document.querySelector("#task");
  let inputDOMValue = inputDOM.value.trim();
  if (inputDOMValue) {
    let todo = { title: inputDOMValue, completed: false };
    createTodoElement(todo);
    addTodoLocalStroge(todo);
    inputDOM.value = "";
    $("#add-toast").toast("show");
  } else {
    $("#validation-toast").toast("show");
  }
}

// addTodoLocalStroge() fonksiyonu pullTodoLocalStroge() fonksiyonumdan gelen todolarimla birlikte suanki todolarimida localstorage ekliyor
function addTodoLocalStroge(todo) {
  let todos = pullTodoLocalStroge();
  localStorage.setItem("todos", JSON.stringify([...todos, todo]));
}

//  addTodoLocalStroge() fonksiyonu todolarimi localstorage ekliyor
function addTodosLocalStroge(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

//   pullTodoLocalStroge() fonksiyonu localStoragede todolarim eger varsa todolari bana veriyor yoksa bos array donduruyor.
function pullTodoLocalStroge() {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
}

// todolarimi olusturmami saglayan fonksiyon
function createTodoElement(todo) {
  let ulDOM = document.querySelector("#list");
  let liDOM = `<li class="${todo.completed ? "checked" : ""}"><span>${
    todo.title
  }</span><div><span  onclick="completeToggleTodo(this)" class="btn">Tamamla</span><span onclick="removeTodo(this)" class="btn-remove" >Sil</span></div></li>`;
  ulDOM.innerHTML += liDOM;
}

// todolarimi complete ve uncomplete etmemi saglayan fonksiyon
function completeToggleTodo(btn) {
  let liDOM = btn.closest("li");
  let spanDOM = liDOM.children[0];
  let text = spanDOM.textContent;
  let isChecked = liDOM.classList.contains("checked");
  if (isChecked) {
    liDOM.classList.remove("checked");
  } else {
    liDOM.classList.add("checked");
  }
  let todos = pullTodoLocalStroge();
  let newTodos = todos.map((item) => {
    if (item.title === text) {
      item.completed = !isChecked;
    }
    return item;
  });

  addTodosLocalStroge(newTodos);
}

// todolarimi silmemi saglayan fonksiyon
function removeTodo(btn) {
  let liDOM = btn.closest("li");
  let spanDOM = liDOM.children[0];
  let text = spanDOM.textContent;
  liDOM.remove();
  let todos = pullTodoLocalStroge();
  let removedTodoArray = todos.filter((todo) => todo.title !== text);
  addTodosLocalStroge(removedTodoArray);
}

// sayfa yuklendiginde todolarimi getiren fonksiyon
function init() {
  let todos = pullTodoLocalStroge();
  todos.forEach((todo) => createTodoElement(todo));
}

init();
