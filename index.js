$(function() {
  $('#text').text('hola mundo');
  $('#html').html('<i>texto en itálica</i>');
  $('.append').append(' , contenido al final');
  $('.prepend').prepend('contenido al principio, ');
  $("input[type='text']").val('agregando contenido');

  $('#mostrarButton').click(function() {
    $('#mensaje').text('mostrando mensaje');
  });

  $('#ocultarButton').click(function() {
    $('#mensaje').text('');
  });

  $('#myButton').mouseover(function() {
    $(this).val('está arriba');
  });

  $('#myButton').mouseout(function() {
    $(this).val('Pasa el ratón');
  });

  $('#campo1').focus(function() {
    $('#resultado1').html('el campo de texto tiene el foco');
  });

  $('#campo1').blur(function() {
    $('#resultado1').html('el campo de texto perdió el foco');
  });

  $('#campo2').keypress(function(e) {
    if ($(this).val() == 'hola') {
      $('#resultado2').html('escribiste hola');
    } else {
      $('#resultado2').html(String.fromCharCode(e.charCode));
    }
  });

  $('#soltar').keyup(function() {
    alert('soltaste la tecla');
  });

  $(window).resize(function() {
    var ancho = $(this).width();
    var alto = $(this).height();
    $('#dimensiones').html('ancho: ' + ancho + ', alto: ' + alto);
  });

  $('#caja').scroll(function() {
    $('#posicion').html('posición: ' + $(this).scrollTop());
  });

  $('#myButton2').on('click', function() {
    alert('hola mundo');
  });

  $('#myButton3').on('click', function() {
    $('#myButton2').off('click');
  });

  $('#myButton4').one('click', function() {
    alert('hola mundo');
  });

  $('#contenido').css({
    'backgroundColor': 'rgb(55, 53, 152)',
    'fontStyle': 'italic',
    'color': 'rgb(240, 230, 228)',
    'fontSize': '20px',
    'padding': '10px',
    'border': '5px solid rgb(246, 25, 11)',
    'borderRadius': '5px'
  });

  $('#contenido-2').mouseover(function() {
    $(this).removeClass('default');
    $(this).addClass('activo');
  });

  $('#contenido-2').mouseout(function() {
    $(this).removeClass('activo').addClass('default');
  });

  $('#button-1').on('click', function() {
    $('#contenido-3').toggle(2000, function() {
      alert('animación terminada');
    });
  });

  $('#button-2').on('click', function() {
    if ($(this).val() == 'ocultar') {
      $('#contenido-4').hide(1000, function() {
        $('#button-2').val('mostrar');
      });
    } else {
      $('#contenido-4').show(1000, function() {
        $('#button-2').val('ocultar');
      });
    }
  });

  $('#button-3').on('click', function() {
    if ($(this).val() == 'ocultar') {
      $('#contenido-5').fadeOut(2000, function() {
        $('#button-3').val('mostrar');
      });
    } else {
      $('#contenido-5').fadeIn(2000, function() {
        $('#button-3').val('ocultar');
      });
    }
  });

  $('#button-4').on('click', function() {
    if ($(this).val() == 'ocultar') {
      $('#contenido-6').slideUp(3000, function() {
        $('#button-4').val('mostrar');
      });
    } else {
      $('#contenido-6').slideDown(3000, function() {
        $('#button-4').val('ocultar');
      });
    }
  });

  $('#button-5').on('click', function() {
    if ($(this).val() == 'horizontal') {
      $(this).val('animación en progreso');
      $('#contenedor-1').animate({
        left: '+=100'
      }, 1000).animate({
        left: '-=100'
      }, 1000, function() {
        $('#button-5').val('horizontal');
      });
    }
  });
});
