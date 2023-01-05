import $ from 'jquery';

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export var indexTasks = function (successCB, errorCB) {
  var request = {
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=52',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var postTask = function (content, successCB, errorCB) {
  var request = {
    type: 'POST',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=52',
    data: {
      task: {
        content: content
      }
    },
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var deleteTask = function (id, successCB, errorCB) {
  var request = {
    type: 'DELETE', 
    url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '?api_key=52',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
};

export var markComplete = function (id, successCB, errorCB) {
  var request = {
    type: 'PUT',
    url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '/mark_complete?api_key=52',
    success: successCB,
    error: errorCB
  }

  $.ajax(request);
}
