$('.btn-counter').click(function(e) {
  e.preventDefault();  
  var inc = parseInt($(this).attr('data-inc'));
  var input = $("#count");
  var currentVal = parseInt(input.text())+inc;
  $('.btn-counter').removeAttr('disabled');
  if(currentVal<=1){
    currentVal = 1;
    $(this).attr('disabled', true);
  }else if(currentVal>=5){
    currentVal = 5;
    $(this).attr('disabled', true);
  }else{
  }
  input.text(currentVal);
  $('#btn-buy').attr('href','buy-'+currentVal+'.html');
});


var text_max = 100;
$('#count_message').html('0 / ' + text_max );

$('#say-something').on("input",function() {
  var text_length = $('#say-something').val().length;
  var text_remaining = text_max - text_length;
  $('#count_message').html(text_length + ' / ' + text_max);
});

var currentRow;
$('#modal-sendcode').on('show.bs.modal', function (e) {
  var row = $(e.relatedTarget).closest('tr');
  currentRow = row;
  var name = $('td',row).first().text();
  //console.log(name);
  var code = $('td',row).eq(1).text();
  $('#giftcode').val(code);
  $('#bookname').text(name);
  $('#modal-sendcode #email').val('');
  $('#say-something').val('');
  $('#check-email').prop('checked', false);
  $('#btn-send').attr('disabled', true);
});

/*
$('#modal-sendcode').on('shown.bs.modal', function (e) {
  var modalDialog = $(this).find('.modal-dialog');
  var pos = Math.max(0, ($(window).height() - modalDialog.height()) / 2);
  console.log(pos);
  console.log(modalDialog.height());
  modalDialog.css("top", pos);
});
*/

function updateValideState(){
  var valid = $('#check-email').prop('checked');
  var email = $('#modal-sendcode #email').val();
  if(email.length<5 || email.indexOf('@')<=0) {
    valid = false;
  }
  $('#btn-send').attr('disabled', !valid);
}

$('#modal-sendcode #email').on("input",function() {
  updateValideState();
});

$('#check-email').change(function() {
  updateValideState();
});

$('#btn-send').on('click',function(e){
  var email = $('#email').val();
  $('.sendto',currentRow).text(email);
  $('#modal-sendcode').modal('hide');
});