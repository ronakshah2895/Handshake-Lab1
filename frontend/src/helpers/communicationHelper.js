/* global $ */

function sendPost(route, form = null) {
  const formData = form ? new FormData(form) : null;
  return $.ajax({
    url: process.env.REACT_APP_SERVER_ROOT + route,
    data: formData,
    type: 'POST',
    processData: false,
    contentType: false,
    xhrFields: {
      withCredentials: true,
    },
  });
}

function get(route) {
  return $.ajax({
    url: process.env.REACT_APP_SERVER_ROOT + route,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
  });
}

module.exports = {
  sendPost, get,
};
