$(document).ready(function(){
    $("#form").submit(function() {
        var form_data = $(this).serialize(); 
        $.ajax({
            type: "POST",
            url: "php/tg.php",
            data: form_data,
            success: swal({
                title: "Заявка отправлена!",
                icon: "success",
                timer: 2000
            })
        });
        event.preventDefault();

        setTimeout(function(){
            window.location.href = 'index.html';
          }, 3 * 1000);
    });
});
