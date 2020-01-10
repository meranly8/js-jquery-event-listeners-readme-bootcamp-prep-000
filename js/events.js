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
  $('#typing').on('keydown', function() {
    if (key.which === 71) {
      alert('G was pressed');
    }
  });
}

function submitIt() {
  $('')
}

$(document).ready(function(){

// call functions here

});
