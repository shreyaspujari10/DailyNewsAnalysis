document.addEventListener("DOMContentLoaded", function() {
    var chatBtn = document.getElementById("chatBtn");
    var chatPopup = document.getElementById("chatPopup");
    var chatCloseBtn = document.getElementById("chatCloseBtn");

    chatBtn.addEventListener("click", function() {
        chatPopup.style.display = "block";
    });

    chatCloseBtn.addEventListener("click", function() {
        chatPopup.style.display = "none";
    });
});