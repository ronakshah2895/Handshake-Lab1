/* global $ */

function sendPost(route, form = null) {
  const formData = new FormData(form);
  return $.ajax({
    url: process.env.REACT_APP_SERVER_ROOT + route,
    data: formData,
    type: 'POST',
    processData: false,
    contentType: false,
  });
}

module.exports = {
  sendPost,
};
