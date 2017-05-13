$( function() {

    $("#dob").datepicker();

  } );

var special_char = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
// check if the passed in string has special chars
var has_special_char = function(mystring){
    for(i=0;i< special_char.length;i++){
        if(mystring.indexOf(special_char[i])> -1){
            return true;
            console.log('has_special_char');
        }
    }
    return false

}
 $("#new_password").keyup(function(){
     //getting the new password value
     var text = $('#new_password').val();
     var width = '0%';
     if(text==''){
         $("#filler").width(width).css('background-color','none');

     }
     if(text.length < 5){
         width = '10%';
         //setting the filler div's width and color
         $("#filler").width(width).css('background-color','red');
         $("#password-strength-status").text("strength:weak");

     }
     //check if the new password is more than 10 char and has uppercase letters
     if(text.length > 14  && text.match('[A-Z]')){
         width = '50%';
         $("#filler").width(width).css('background-color','orange');
         $("#password-strength-status").text("strength:fair");



     }
     if(text.length > 14  && text.match('[0-9]')){
         width = '50%';
         $("#filler").width(width).css('background-color','orange');
         $("#password-strength-status").text("strength:fair");



     }
     //test if the string has uppercase, lowercase and numbers and above 10 char
     if(text.length > 14  && text.match('[A-Z]') && text.match('[a-z]')
                        &&text.match('[0-9]')){
         width = '80%';
         $("#filler").width(width).css('background-color','lightgreen');
         $("#password-strength-status").text("strength:acceptable");




     }
     //test if the string has uppercase, lowercase and numbers and above 10 char
     if(text.length > 14  && text.match('[A-Z]') && text.match('[a-z]')
                        &&text.match('[0-9]')&& has_special_char(text)==true){

         width = '100%';
         $("#filler").width(width).css('background-color','green');
         $("#password-strength-status").text("strength:strong");



     }
 });

 $("#id_image").change(function(){
     if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#image").attr("src", e.target.result);
          $("#modalCrop").modal("show");
        }
        reader.readAsDataURL(this.files[0]);
        }

 });


$("#modalCrop").on('shown.bs.modal',function(){
    var image = document.getElementById('image');
    var cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop: function(e) {
        $("#save-image").click(function(){
            $("#id_x").val(e.detail.x);
            $("#id_y").val(e.detail.y);
            $("#id_width").val(e.detail.width);
            $("#id_height").val(e.detail.height);
            $("#modalCrop").modal("hide");

        });

      }
});


});
