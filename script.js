function addTask() {
  const input = document.getElementById("taskInput");
  const timeline = document.getElementById("taskTimeline");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✓ Done";
    doneBtn.className = "done";
    doneBtn.onclick = () => {
      span.style.textDecoration = "line-through";
      item.style.boxShadow = "0 0 12px #00ff88";
      doneBtn.disabled = true;
      cancelBtn.disabled = true;
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "✕ Cancel";
    cancelBtn.className = "cancel";
    cancelBtn.onclick = () => {
      item.remove();
    };

    item.appendChild(span);
    item.appendChild(doneBtn);
    item.appendChild(cancelBtn);
    timeline.appendChild(item);

    input.value = "";
    input.style.boxShadow = "0 0 10px #00ffff";
  } else {
    input.style.boxShadow = "0 0 10px red";
  }
}
