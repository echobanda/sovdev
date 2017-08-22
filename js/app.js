require('../main.scss')

var button = $('.burger').find(".button");
console.log(button);

button.on('click',function(){
  $('.sovdev').slideToggle(function () {
    $('.sovdev').css("visibility", "visible");
  });

});
