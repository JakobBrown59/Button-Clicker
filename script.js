function message() {
    alert("Ninja was liked")
}

function login(btn) {
    if( btn.innerText =="Login") {
        btn.innerText = "Logout";
    }  else {
        btn.innerText = "Login" 
    }
}  

function hide(btn) {
    btn.remove();
}