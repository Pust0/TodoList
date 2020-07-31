let ulTasks = $("#ulTasks");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let btnCleanup = $("#btnCleanup");
let btnSort = $("#btnSort");
let inpNewTask = $("#inpNewTask");

function addItem() {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });
  listItem.click(() => {
    listItem.toggleClass("done");
  });
  ulTasks.append(listItem);
  inpNewTask.val("");
  toggleInputBtns();
}

function clearDone() {
  $("#ulTasks .done").remove();
  toggleInputBtns();
}

function sortTasks() {
  $("#ulTasks .done").appendTo(ulTasks);
}

function toggleInputBtns() {
  btnReset.prop("disabled", inpNewTask.val() == "");
  btnAdd.prop("disabled", inpNewTask.val() == "");
  btnSort.prop("disabled", ulTasks.children().length < 1);
  btnCleanup.prop("disabled", ulTasks.children().length < 1);
}

inpNewTask.keypress(function (e) {
  if (e.which == 13) {
    addItem();
  }
});

btnAdd.click(addItem);

inpNewTask.on("input", toggleInputBtns);

btnReset.click(() => {
  inpNewTask.val("");
  toggleInputBtns();
});
btnCleanup.click(clearDone);
btnSort.click(sortTasks);
