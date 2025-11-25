const tbody = document?.getElementById("tbody");
const savebtn = document?.getElementById("savebtn");
let title = document?.getElementById("title");
let content = document?.getElementById("content");
let data = localStorage.getItem("data");
data = JSON.parse(data);

(function getData() {
  data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
})();
function saveData() {
  title = title.value;
  content = content.value;
  const date = new Date();
  const fecha = date.toString().split(" ").slice(1, 4).join("-");
  const Task = {
    id: data.length ? data.length : 0,
    title,
    content,
    fecha,
  };
  data.push(Task);
  localStorage.setItem("data", JSON.stringify(data));
}
function update() {}
savebtn.addEventListener("click", () => {
  saveData();
});
