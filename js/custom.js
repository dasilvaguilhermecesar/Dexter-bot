$("img").click(function () {
  $(".chat").toggle("slow");
});

function sideIn(id) {
  document.getElementById(id).src = "img/icon-chat-d.png"
}

function sideOut(id) {
  document.getElementById(id).src = "img/icon-chat.png"
}
