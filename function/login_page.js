// login.js
var accounts = [
    { username: "hoangphung", password: "14082002" },
    { username: "kieulinh", password: "15112002" },
    { username: "anhthu", password: "07112002" },
    { username: "ngocoanh", password: "11042002" },
    { username: "diemquynh", password: "28122002" },
    // Thêm các tài khoản khác nếu cần
];

document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector(".dangnhap2 a");
    const errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của nút Đăng nhập (chuyển đến trang khác)
        var enteredUsername = usernameInput.value;
        var enteredPassword = passwordInput.value;
        var validLogin = false;
        for (var i = 0; i < accounts.length; i++) {
            if (enteredUsername === accounts[i].username && enteredPassword === accounts[i].password) {
                validLogin = true;
                break; // Khi tìm thấy tài khoản hợp lệ, thoát khỏi vòng lặp
            }
        }

        if (validLogin) {
            window.location.href = "main_page.html";
        } else {
            window.location.href = "page_loginfalse.html";
        }
    });
});
