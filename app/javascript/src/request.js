import $ from 'jquery';

var indexTasks = function () {
  var request = {
    type: 'GET',
    url: 'api/tasks?api_key=1',
    success: function (response) {
      console.log(response);
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }

  $.ajax(request);
};

indexTasks();

var postTasks = function (content) {
  var request = {
    type: 'POST',
    url: 'api/tasks?api_key=1',
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    data: {
      task: {
        content: content
      }
    },
    error: function (request, errorMsg) {
      console.log(request, errorMsg);
    }
  }
    $.ajax(request);
};

postTasks('this is some task...');