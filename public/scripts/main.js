$(document).ready(function($) {

	$("#checkin").click(function(e) {
		e.preventDefault();

		if ($("#email").val() === "") {

			$('.alert').remove();

			elemento = "<div class='alert alert-danger animated shake' role='alert'>Digite um Email !</div>";

			$('#alerts').html(elemento);

			$('.alert').fadeIn();
			setTimeout(function() {
				$('.alert').fadeOut();
			}, 3000);

		} else {
			
			var dados = $('#form-checkin').serializeArray();

			$.ajax({
			    type: 'POST',
			    dataType: 'json',
			    url: 'system/check.php',
			    async: true,
			    data: dados,
			    success: function(response){
			    	alert(response.email);
			    },
			    error: function(response){

     				$('.alert').remove();

					elemento = "<div class='alert alert-danger animated shake' role='alert'>Email nao foi cadastrado!</div>";

					$('#alerts').html(elemento);

					$('.alert').fadeIn();
					setTimeout(function() {
						$('.alert').fadeOut();
					}, 4000);
     			} 

			});
		}

	});

});