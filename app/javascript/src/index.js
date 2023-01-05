import $ from "jquery";

import { indexTasks, postTask, deleteTask, markComplete } from "./requests.js";

function refreshList() {
  indexTasks(function (response) {
    var htmlString = response.tasks.map(function (task) {
      return (
        "<div class='col-12 mb-3 p-2 border rounded task' data-id='" +
        task.id +
        "'>  " +
        task.content +
        "  <button id='delete-button' data-id='" +
        task.id +
        "'>Delete</button><input type='checkbox' id='mark-complete' data-id='" +
        task.id +
        "'" +
        (task.completed ? "checked" : "") +
        ">"
      );
    });

    $("#tasks").html(htmlString);
  });
}

$(document).ready(function () {
  refreshList();

  $("#add-button").click(function (e) {
    e.preventDefault();

    var content = $("#todo-input").val();

    console.log(content);

    postTask(content, refreshList);
  });

  $(document).on("click", "#delete-button", function () {
    var id = $(this).data("id");

    console.log(id);

    deleteTask(id, refreshList);
  });

  $(document).on("click", "#mark-complete", function () {
    var id = $(this).data("id");

    console.log(id);

    markComplete(id, refreshList);
  })
});
