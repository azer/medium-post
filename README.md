## medium-post

Get a Medium post. See also [medium-author](http://github.com/azer/medium-author)

## Install

```bash
$ npm install medium-post
```

## Usage

```js
var post = require('medium-post')

post('cfe178f29c4d', function (error, post) {
  if (error) throw error;

  post.title
  // => Sebze Pazari

  post.paragraphs.length
  // => 7

  post.imageId
  // =>

});
```

See `test.js` for more info.
