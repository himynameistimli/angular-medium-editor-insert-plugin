# Insert Plugin for Angular Medium Editor  
This is an AngularJS directive combines all of the following  
[Medium Editor](https://github.com/yabwe/medium-editor) by Davi Ferreira  
[Medium Editor Insert Plugin](https://github.com/orthes/medium-editor-insert-plugin) by Pavel Linkesch  
[Angular Medium Editor](https://github.com/thijsw/angular-medium-editor) by Thijs Wijnmaalen  


## Install

Install with [Bower](https://bower.io/):
```sh
$ bower install --save angular-medium-editor-insert-plugin
```

Then add the following `<script>`s to your `index.html`:

```html
<script src="../bower_components/angular/angular.js"></script>
<script src="../bower_components/medium-editor/dist/js/medium-editor.js"></script>
<script src="../bower_components/angular-medium-editor/dist/angular-medium-editor.js"></script>

<!-- CSS -->
<link rel="stylesheet" href="../bower_components/medium-editor/dist/css/medium-editor.min.css">
<link rel="stylesheet" href="../bower_components/medium-editor/dist/css/themes/default.css">
<link rel="stylesheet" href="../bower_components/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css">

<!-- JS -->
<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../bower_components/medium-editor/dist/js/medium-editor.js"></script>
<script src="../bower_components/handlebars/handlebars.runtime.min.js"></script>
<script src="../bower_components/jquery-sortable/source/js/jquery-sortable-min.js"></script>
<script src="../bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>
<script src="../bower_components/blueimp-file-upload/js/jquery.iframe-transport.js"></script>
<script src="../bower_components/blueimp-file-upload/js/jquery.fileupload.js"></script>
<script src="../bower_components/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js"></script>
```

*** Don't forget to add all of the dependencies that come with Medium Editor Insert Plugin ***

Then add this directive:

```html
<script src="/bower_components/angular-medium-editor-insert-plugin/dist/angular-medium-editor-insert-plugin.js"></script>
```

Then add `angular-medium-editor-insert-plugin` as a dependency for your app:

```javascript
angular.module('myApp', ['angular-medium-editor-insert-plugin']);
```

## Documentation

`<medium-insert>` must be added as a child of `<medium-editor>` in order for this directive to work properly.

Use as an element:
```html
<medium-editor>
    <medium-insert></medium-insert>
</medium-editor>
```

...or attribute:
```html
<p medium-editor>
    <div medium-insert></div>
</p>
```

Pass options with `insert-addons` attribute:
```html
<div medium-insert insert-addons="addons"></div>
```

See Medium Editor Insert Plugin [custom addons documentation](https://github.com/orthes/medium-editor-insert-plugin/wiki/v2.x-Custom-addons) for details.

## Examples / Demo

If you want to view the included demo, you have to run `bower` first in order to retrieve the dependencies.

## License
The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
