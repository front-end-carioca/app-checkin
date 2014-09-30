function AppCheckin(){

	var Model = {
		formVazio: function(){
			$('.alert').remove();

			elemento = "<div class='alert alert-danger animated shake' role='alert'>Digite um Email !</div>";

			$('#alerts').html(elemento);

			$('.alert').fadeIn();
			setTimeout(function() {
				$('.alert').fadeOut();
			}, 3000);
		},
		formAjax: function(){
			var dados = $('#form-checkin').serializeArray();

			$.ajax({
			    type: 'POST',
			    dataType: 'json',
			    url: 'system/check.php',
			    async: true,
			    data: dados,
			    success: function(response){
			    	var evento = response.evento;

			    	switch(evento){
			    		case '2':
			    			//CHEKIN OK
				    		$('#form-checkin').remove();
				    		$('#checkin').remove();
				    		
				    		var elemento = '<h2>Olá ' + response.nome + ', Seja Vindo(a) ao <br><span>Front End Carioca</span></h2><h2 class="edicao">Desejamos um ótimo evento!</h2><br><br><h2><span>UHULL.. CHECKIN REALIZADO COM SUCESSO :)</span></h2>';

				    		$('#mensagem').html(elemento);

				    		setTimeout(function() {
				    			window.location.reload(true);
				    		}, 5000);

			    		break;
			    		case '1':
			    			//CHEKIN JA REALIZADO
			    			$('#form-checkin').remove();
				    		$('#checkin').remove();
				    		
				    		var elemento = '<h2>Olá <span>' + response.nome + '</span>, em nosso sistema <br>consta que já houve checkin com este Email.</h2><h2><span>Fale com um dos nossos organizadores.</span></h2>';

				    		$('#mensagem').html(elemento);

				    		setTimeout(function() {
				    			window.location.reload(true);
				    		}, 7000);
			    		break;
			    		case '0':
			    			// EMAIL NÃO ESTÁ CADASTRADO
				   			$('.alert').remove();

							elemento = "<div class='alert alert-danger animated shake' role='alert'>" + response.situacao + "!</div>";

							$('#alerts').html(elemento);

							$('.alert').fadeIn();
							setTimeout(function() {
								$('.alert').fadeOut();
							}, 3000);
			    		break;
			    	}
			    		
			    	
			    }

			});
		}
	}

	$(document).ready(function($) {

		// EVENTO COM TECLA ENTER NO FORM BLOQUEADA
		$('#email').keypress(function(e) {
		    if(e.which == 13) {
		        e.preventDefault();
		    }
		});

		//EVENDO AO CLICAR NO BOTAO DE CHEKIN
		$("#checkin").click(function(e) {
			e.preventDefault();

			if ($("#email").val() === "") {
				Model.formVazio();
			}else {
				Model.formAjax();
			}

		});

	});

	// EVENTO COM TECLA ENTER
	$(document).keypress(function(e) {
	    if(e.which == 13) {
	        if ($("#email").val() === "") {
				Model.formVazio();
			}else {
				Model.formAjax();
			}
	    }
	});
	
}

AppCheckin();