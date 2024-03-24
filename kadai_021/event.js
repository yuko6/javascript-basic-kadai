const Text = document.getElementById("text");
const Btn =document.getElementById("btn");

Btn.addEventListener('click', () => {
  setTimeout(() => {
   text.textContent = "ボタンがクリックされました"
   }, 2000);
});
