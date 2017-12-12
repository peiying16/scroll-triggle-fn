#### Installation
```
npm i scroll-triggle-fn --save
npm i jquery --save
```
#### Usage

```
var scrollTriggleFn = require("scroll-triggle-fn")
import $ from 'jquery';

$('ducument').ready(function(){

    const callback = function(e) {
        $(e).css('color','#fff');
    }

    const config = {
        delay: 0,   // default: 0
        position: 'top' //'button', 'mid' default: 'top'
    }

    const selector = 'h1';

    scrollTriggleFn(selector, e, config);

});
```