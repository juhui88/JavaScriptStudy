const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.getElementById("todo-list");

toDoInput.style.background = `linear-gradient(${chosenColor1}, ${chosenColor2})`;

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 문자열 형태로 넣어줌
}

function deleteToDo(e) {
    const li = e.target.parentElement; // 부모요소 얻기
    //const li = this.parentElement;와 같음
    
    li.remove(); // 해당 부모 요소 삭제
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); // 배열에서도 찾아서 삭제해줌
    // id는 문자열형태로 보이기 때문에 비교를 위해서 int로 바꿔줘야함
    saveToDos(); // 새로운 toDos로 저장
}

function checkToDo(e) {
    const li = e.target.parentElement;

    console.log(li);
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li"); // li태그 생성
    const span = document.createElement("span"); // span태그 생성
    const removeBtn = document.createElement("button"); // remove button 태그 생성
    const checkBtn = document.createElement("button"); // check button 태그 생성;

    span.innerText = newTodoObj.text; // span 내에 문구를 넣음
    removeBtn.innerText = "deleted"; // button 내에 x를 넣음
    checkBtn.innerText = "finished";

    checkBtn.style.background = `linear-gradient(${chosenColor1}, ${chosenColor2})`;
    checkBtn.style.borderRadius = "5px";

    removeBtn.style.background = `linear-gradient(${chosenColor1}, ${chosenColor2})`;
    removeBtn.style.borderRadius = "5px";
    li.id = newTodoObj.id; // li태그에 id부여
    
    li.appendChild(span); // li로 span 감싸기
    li.appendChild(checkBtn);
    li.appendChild(removeBtn); // li로 button 감싸기
    
    toDoList.appendChild(li); // todoList 안에 li 넣기

    checkBtn.addEventListener("click", checkToDo);
    checkBtn.addEventListener("mouseover", function(e) {
        
    })
    removeBtn.addEventListener("click", deleteToDo); // click시 해당 목록 삭제

}

function handleToDoSubmit(e) {
    e.preventDefault(); // 새로고침 방지
    
    const newTodo = toDoInput.value; // todoInput의 value를 가져와서 저장
    
    toDoInput.value = ""; // 초기화시켜줌

    const newTodoObj = { // 각 요소들을 분리해주기 위해 id가 부여된 객체 생성
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj); // newTodoObj를 배열에 저장

    paintToDo(newTodoObj); // newTodoObj를 목록에 추가함
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); // 엔터키 누르면 함수 호출

const savedToDos = localStorage.getItem(TODOS_KEY); // localStorge에서 아이템 얻기

if (savedToDos !== null) { // 비어있지 않다면
    const parsedToDos = JSON.parse(savedToDos); // 배열로 바꿔줌
    toDos = parsedToDos; // toDos배열에 parsedToDos배열을 대입
    parsedToDos.forEach(paintToDo); // 각 요소에 대해 paintToDo함수 실행
}