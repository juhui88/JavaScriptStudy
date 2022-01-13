const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기
const USERNAME_KEY = "username"

function onLoginSubmit(e) {
    e.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기
    
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm에 class추가하기
    
    localStorage.setItem(USERNAME_KEY, username);
    
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting에 class 제거하기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // loginForm에 class 제거하기
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername)
}