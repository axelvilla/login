document.addEventListener('DOMContentLoaded', () =>{
const registerForm = document.getElementById('registerForm');


if (registerForm) {
  registerForm.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = registerForm.nombre.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;
    if (!nombre || !email || !password || !confirmPassword){
      alert ('COMPLETA TODOS LOS CAMPOS!!!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const user = {nombre, email, password};
    localStorage.setItem('user',JSON.stringify(user));
    alert ('Registro exitoso');
    window.location.href = 'login.html';
  });
}

if (window.location.pathname.includes('login.html')) {
  const loginButton = document.querySelector('button:nth-of-type(1)');
  const cancelButton = document.querySelector('button:nth-of-type(2)');

  loginButton.addEventListener('click', () => {
    const email = document.querySelector('input[type = "email"]').value;
    const password = document.querySelector('input[type = "password"]').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      alert('No existen usuarios');
      return;
    }
    if (storedUser.email === email && storedUser.password === password) {
      alert(`Bienvenido, ${storedUser.nombre}`);
    } else{
    alert('Usuario o contraseña incorrectos');
    }
  });
  cancelButton.addEventListener('click', ()=> {
    document.querySelectorAll('input').forEach(input => input.value = '');
  });
}
});
 
const socialButtons = document.querySelectorAll('.btn-secondary');

socialButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Opcion no disponible aun');
  });
});

  