'use strict';
import $ from 'jquery';

module.exports = function(selector, callback, config) {

    let elements = $(selector);

    elements.each(element => {
        let ele = elements[element];
        let pagePostionY = $(elements[element]).position().top;
        
        let scrollHandler = $(window).on("scroll", function(e){
            let h = $(window).height();
            let position = config.position || 'top';

            switch (position) {
                case 'mid':
                    h = h / 2;
                    break;

                case 'top':
                    h = 0;
                    break;
                    
                case 'button':
                default:
                    break;
            }

            var currentPosition = this.scrollY;
    
            if (currentPosition > pagePostionY - h) {
                setTimeout(() => {
                    callback(ele);
                }, config.delay || 0);
                
            }else{
            }
            
        });

    });

}
