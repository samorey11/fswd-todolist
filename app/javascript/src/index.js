import $ from 'jquery';

import {
  indexTasks,
  postTask,
} from "./requests.js";

$(document).ready(function () {

  $('#add-button').click(function (e) {
    e.preventDefault();

    var content = $('#todo-input').val();

    console.log(content);

    postTask(content);
  });

  indexTasks(function (response) {
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \ " + task.content + "\
      </div>";
    });

    $("#tasks").html(htmlString);
  });

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
  var todoInput = document.getElementById('todo-input')

  console.log(todoInput.value)

=======
>>>>>>> c6888ae66d53520d40f59e9b82f6c543c006880f
});
