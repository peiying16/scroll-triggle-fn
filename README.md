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

    const callback1 = function() {
        $('#asd').css('color','#fff');
    }

    const config = {
        delay: 0,   
        position: 'mid' //'button', 'mid'
    }

    const selector = '#image';

    scrollTriggleFn(selector, callback1, config);


});
```