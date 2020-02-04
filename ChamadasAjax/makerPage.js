$.ajax({
    url: '../template/navMakerPage.html',
    success: function (data) {
  
    
      $('#nav').html(data);
    },
    beforeSend: function () {
  
    },
    complete: function () {
    
      
    }
  });
  
  

$(function () {
    $('#row1bateria').change(function () {
      $('.nomeArquivoRow1').html('<b>Arquivo Selecionado:</b>' + $(this).val());
    });
  });
  
  
  /*
  
          
  
          $("#MudarTeclado").click(function( e ){
              e.preventDefault();
              var href = $( this ).attr('href');
              $("#demo").load( href +"../paginas/fmSynth.html");
          });
      */
  
  
  $('#MudarTeclado').click(function () {
  
    let paginas=['fmSynth.html', 'public/view/pages/polySynth.html'];
    let scripts = ['../..//javascript/FmSynth.js','public/javascript/polySynth.js'];
    
    
    $.ajax({
      url: 'fmSynth.html',
      success: function (data) {
  
      
        $('#demo').html(data);
      },
      beforeSend: function () {
  
      },
      complete: function () {
        $.getScript( ''+scripts[0]+'');
        
      }
    });
       
  });
  
  