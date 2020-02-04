
$.ajax({
    url: 'public/view/template/theme.html',
    success: function (data) {

    
      $('div').html(data);
    },
    beforeSend: function () {

    },
    complete: function () {
      
    }
  });