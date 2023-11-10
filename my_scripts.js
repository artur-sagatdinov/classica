$(document).ready(function(){
    $("#form").submit(function() {
        var form_data = $(this).serialize(); 
        $.ajax({
            type: "POST",
            url: "telegram.php",
            data: form_data,
            success: swal({
                title: "Заявка успешно отправлена!",
                icon: "success",
                timer: 2000
            })
        });
   
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#sms').val('');
    });
});
