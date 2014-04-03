var getJSON = require("get-json");

module.exports = post;

function post (id, callback) {
  var url = 'https://medium.com/p/' + id + '/?format=json';

  getJSON(url, function (error, response) {
    if (error) return callback(error);

    try {
      response = response.slice(16);
      response = JSON.parse(response).payload;
    } catch(err) {
      return callback(err);
    }

    callback(undefined, {
      title: response.value.title,
      subtitle: response.value.content.subtitle,
      createdAt: response.value.createdAt,
      updatedAt: response.value.updatedAt,
      imageId: response.value.content.image.imageId,
      paragraphs: response.value.content.bodyModel.paragraphs
    });

  });
}
