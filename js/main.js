$(document).ready(function(){

let $btns=$('.project-section .button-group button');

$btns.click(function(e){


    $('.project-section .button-group button').removeClass('active');

    e.target.classList.add('active');


    let selector= $(e.target).attr('data-filter');

    $('.project-section .grid').isotope({
        filter:selector
    });
return false;

})

$('.project-section .button-group #btn1').trigger('click');


});