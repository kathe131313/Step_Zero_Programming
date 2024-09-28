// Manejo de la secuencia de modales

document.addEventListener("DOMContentLoaded", function() {
    // Al hacer clic en el botón "Siguiente" en el Modal 1
    document.getElementById("nextModal1").addEventListener("click", function() {
      var modal1 = new bootstrap.Modal(document.getElementById("modal1"));
      modal1.hide();
      
      var modal2 = new bootstrap.Modal(document.getElementById("modal2"));
      modal2.show();
    });
  
    // Al hacer clic en el botón "Siguiente" en el Modal 2 (puedes agregar más modales en secuencia)
    document.getElementById("nextModal2").addEventListener("click", function() {
      var modal2 = new bootstrap.Modal(document.getElementById("modal2"));
      modal2.hide();
      
      // Aquí puedes agregar más modales si los necesitas
      // var modal3 = new bootstrap.Modal(document.getElementById("modal3"));
      // modal3.show();
    });
  });
document.getElementById('siguienteModal1').addEventListener('click', function() {
    // Cerrar Modal 1
    var modal1 = new bootstrap.Modal(document.getElementById('modal1'));
    modal1.hide();
  
    // Abrir Modal 2
    var modal2 = new bootstrap.Modal(document.getElementById('modal2'));
    modal2.show();
  });
  