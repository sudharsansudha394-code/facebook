// Login function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("user", user);
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Invalid login!";
    }
}

// Logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}

// Add Post
function addPost() {
    let input = document.getElementById("postInput");
    let postText = input.value;

    if (postText === "") return;

    let feed = document.getElementById("feed");

    let div = document.createElement("div");
    div.className = "post";
    div.innerText = postText;

    feed.prepend(div);
    input.value = "";
}