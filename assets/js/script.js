$(document).ready(function(){
    var regexMail = new RegExp(/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/);
    var regexPhone = new RegExp (/(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/);
    var regexName = new RegExp (/^[a-zA-Z]+(([\'\,\.\-][a-zA-ZÀ-ÖØ-öø-ÿ])?[a-zA-ZÀ-ÖØ-öø-ÿ]*)*$/);

    $('#firstname').focusout(function(){
        var firstname = $('#firstname').val();
        if(regexName.test(firstname)){
            $(this).css('border', '1px solid green');
        }else{
            $(this).css('border', '1px solid red');
        }
    });
    $('#lastname').focusout(function(){
        var lastname = $('#lastname').val();
        if(regexName.test(lastname)){
            $(this).css('border', '1px solid green');
        }else{
            $(this).css('border', '1px solid red');
        }
    });
    $('#email').focusout(function(){
        var email = $('#email').val();
        if(regexMail.test(email)){
            $(this).css('border', '1px solid green');
        }else{
            $(this).css('border', '1px solid red');
        }
    });
    $('#phone').focusout(function(){
    var phoneNumber = $('#phone').val();
        if(regexPhone.test(phoneNumber)){
            $(this).css('border', '1px solid green');
        }else{
            $(this).css('border', '1px solid red');
        }
    });
});