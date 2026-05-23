
const loginForm = document.querySelector("#myForm");
const navBtn = document.getElementById("nav-btn");
const navBTN_mobile = document.getElementById("nav-btn-mobile")

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;

        if (username === "admin1234" && password === "admin1234") {
            alert("Tizimga muvaffaqiyatli kirdingiz!");
            localStorage.setItem("isLoggedIn", "true");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            alert("Login yoki parol noto'g'ri");
        }
    });
}


function checkAuth() {
    const loginStatus = localStorage.getItem("isLoggedIn");
    
    if (navBtn) {
        if (loginStatus === "true") {
            navBtn.textContent = "Chiqish";
        } else {
            navBtn.textContent = "Kirish";
        }
    }
}

window.onload = checkAuth;


if (navBtn) {
    navBtn.addEventListener("click", function () {
        if (this.textContent === "Chiqish") {
            localStorage.removeItem("isLoggedIn"); 
            window.location.href = "login.html"; 
        }
    });
}


if (navBTN_mobile) {
    navBTN_mobile.addEventListener("click", function () {
        if (this.textContent === "Chiqish") {
            localStorage.removeItem("isLoggedIn"); 
            window.location.href = "login.html"; 
        }
    });
}
