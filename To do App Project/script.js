const inPUTBOX = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function AddTask() {
  if (inPUTBOX.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inPUTBOX.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inPUTBOX.value = "";
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "li") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "span") {
      e.target.parentNode.remove();
    }
  },
  false
);
