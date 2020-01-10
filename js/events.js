//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('.tasty').on('load', function() {
    
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert('G was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    
  });
}

$(document).ready(function(){

// call functions here

});
