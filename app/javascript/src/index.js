import $ from 'jquery';

import {
  indexTasks,
  postTask,
  deleteTask,
} from "./requests.js";

$(document).ready(function () {

  $('#add-button').click(function (e) {
    e.preventDefault();

    var content = $('#todo-input').val();

    console.log(content);

    postTask(content);
  });

  $(document).on('click', '#delete-button', function () {
  
    var id = $(this).data('id');

    console.log(id);
  
    deleteTask(id);
    $('#tasks').empty();
  });

  indexTasks(function (response) {
    
    
    var htmlString = response.tasks.map(function(task) {
      return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \ " + task.content + " \ <button id='delete-button' data-id='" + task.id + "'>Delete</button><input type='checkbox' class='mark-complete' data-id='" + task.id + "'" + (task.completed ? 'checked' : '') + '>';
    });

    $("#tasks").html(htmlString);
  });
});  
  

  //indexTasks(function (response) {
    
    
    //var htmlString = response.tasks.map(function(task) {
      //return "<div class='col-12 mb-3 p-2 border rounded task' data-id='" + task.id + "'> \ " + task.content + " \ <button id='delete-button' data-id='" + task.id + "'>Delete</button><input type='checkbox' class='mark-complete' data-id='" + task.id + "'" + (task.completed ? 'checked' : '') + '>';
    //});

    //$("#tasks").html(htmlString);
  //});

