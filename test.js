var test = require("prova");
var post = require("./");

test('getting a post', function (assert) {
  post('1f208c11f912', function (error, record) {
    assert.equal(record.title, '陳于塵');
    assert.equal(record.subtitle, 'Uzakdoğulu Bir Seyyah ve Anadolu');
    assert.equal(record.paragraphs[0].text.slice(0, 35), "Chen Yu Chen ile, Urfa’da tanıştık.");
    assert.equal(record.imageId, '1*nv8-qNthidFY_dcyjkQIYQ.jpeg');
    assert.end();
  });
});
