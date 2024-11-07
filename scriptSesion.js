
// Inicio de sesion

// Usuarios y contraseñas predefinidos en formato JSON
const users = [
    { username: "gaston1", password: "Gaston123" },
    { username: "andrea2", password: "Andrea123" },
  ];
  
  // Selección de elementos del formulario
  const loginForm = document.getElementById("loginForm");
  const errorDisplay = document.getElementById("error");
  
  // Función de validación de credenciales
  function validateCredentials(username, password) {
    return users.some(user => user.username === username && user.password === password);
  }
  
  // Manejar el evento de envío del formulario
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Validación: Campos vacíos
    if (username === "" || password === "") {
      errorDisplay.textContent = "Por favor, completa todos los campos.";
      return;
    }
    
    // Verificar credenciales
    if (validateCredentials(username, password)) {
      // Redirigir a home.html si las credenciales son correctas
      window.location.href = "home.html";
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      errorDisplay.textContent = "Usuario o contraseña incorrectos.";
    }
  });