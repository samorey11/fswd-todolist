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
});
