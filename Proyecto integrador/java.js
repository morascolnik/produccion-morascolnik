function mostrarNotificacionNuevosProductos() {
    var notificacion = document.getElementById('notificacion');
    notificacion.style.display = 'block';
}
setTimeout(mostrarNotificacionNuevosProductos, 1000);
document.addEventListener('DOMContentLoaded', function () {
    var elementosTextoMaquina = document.querySelectorAll('.textoMaquinaEscribir');
    function maquinaEscribir(texto, elemento, velocidad, callback) {
      var i = 0;
      var interval = setInterval(function () {
        elemento.style.visibility = 'visible'; 
        elemento.innerHTML += texto[i];
        i++;
        if (i >= texto.length) {
          clearInterval(interval);
          if (callback) {
            callback(); 
          }
        }
      }, velocidad);
    }
  
    function animarElementos(index) {
      if (index < elementosTextoMaquina.length) {
        var elementoActual = elementosTextoMaquina[index];
        var textoOriginal = elementoActual.innerHTML;
        elementoActual.innerHTML = ''; 
        elementoActual.style.visibility = 'hidden'; 
        maquinaEscribir(textoOriginal, elementoActual, 50, function () {
          animarElementos(index + 1); 
        });
      }
    }
    animarElementos(0);
  });
  
  function validarFormulario() {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var consulta = document.getElementById('consulta').value;

    if (nombre.trim() === '' || email.trim() === '' || consulta.trim() === '') {
      alert('Por favor, completa todos los campos del formulario.');
      return false;
    } else {
    return true;
  }
  }

  var favoritesCounter2 = 0;
  function addToFavorites() {
    favoritesCounter2++;
    updateFavoritesCounter2();
    var heartIcon = document.querySelector('.corazon');
    heartIcon.classList.toggle('heart-filled');
  }
  function updateFavoritesCounter2() {
    var counterElement = document.getElementById('favoritesCounter2');
    var favoritesBtn = document.getElementById('favoritesBtn');
  
    if (favoritesCounter2 > 0) {
      counterElement.textContent = favoritesCounter2;
      counterElement.style.display = 'block';
      favoritesBtn.style.color = 'red';
    } else {
      counterElement.style.display = 'none';
      favoritesBtn.style.color = ''; 
    }
  }
  
  var totalPrecio = 0.00;
  function addToCart(productoId) {
    var precioProducto = obtenerPrecioProducto(productoId);
    totalPrecio += precioProducto;
    var cartTotalElement = document.getElementById('cartTotal');
    cartTotalElement.textContent = '$' + totalPrecio.toFixed(2);
  }
  
  function obtenerPrecioProducto(productoId) {
    switch (productoId) {
      case 1:
        return 18000.00;
      case 2:
        return 18000.00;
      case 3:
        return 24500.00;
      case 4: 
        return 43800.00;
      case 5:
        return 28500.00;
      case 6:
        return 69900.00;
      case 7:
        return 96000.00;
      case 8:
        return 45000.00;
    }
  }
