

  
$('#Sigin-link').click(function () {

  
$.ajax({
    url: 'public/view/pages/cadUsuario.html',
    success: function (data) {

    
      $('#conteudo').html(data);
    },
    beforeSend: function () {

    },
    complete: function () {
      
    }
  });
       
  });
  
  