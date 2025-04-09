
document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('.register button:first-of-type');
    const cancelButton = document.querySelector('.register button:last-of-type');
  
    // REGISTRO
    if (registerButton) {
      registerButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.register input');
        const username = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
  
        if (!username || !email || !password) {
          alert('Por favor completá todos los campos');
          return;
        }
  
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registro exitoso');
        window.location.href = 'login.html';
      });
    }
  
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        document.querySelectorAll('.register input').forEach(input => input.value = '');
      });
    }
  
    // LOGIN
    const loginButton = document.querySelector('button:nth-of-type(1)');
    const loginCancel = document.querySelector('button:nth-of-type(2)');
  
    if (loginButton && window.location.pathname.includes('login.html')) {
      loginButton.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="email"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;
  
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
          alert('No hay usuarios registrados');
          return;
        }
  
        if (storedUser.email === emailInput && storedUser.password === passwordInput) {
          alert(`Bienvenido, ${storedUser.username}!`);
        } else {
          alert('Email o contraseña incorrectos');
        }
      });
    }
  
    if (loginCancel && window.location.pathname.includes('login.html')) {
      loginCancel.addEventListener('click', () => {
        document.querySelectorAll('input').forEach(input => input.value = '');
      });
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('.register button:first-of-type');
    const cancelButton = document.querySelector('.register button:last-of-type');
  
    // REGISTRO
    if (registerButton) {
      registerButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.register input');
        const username = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
  
        if (!username || !email || !password) {
          alert('Por favor completá todos los campos');
          return;
        }
  
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registro exitoso');
        window.location.href = 'login.html';
      });
    }
  
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        document.querySelectorAll('.register input').forEach(input => input.value = '');
      });
    }
  
    // LOGIN
    const loginButton = document.querySelector('button:nth-of-type(1)');
    const loginCancel = document.querySelector('button:nth-of-type(2)');
  
    if (loginButton && window.location.pathname.includes('login.html')) {
      loginButton.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="email"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;
  
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
          alert('No hay usuarios registrados');
          return;
        }
  
        if (storedUser.email === emailInput && storedUser.password === passwordInput) {
          alert(`Bienvenido, ${storedUser.username}!`);
        } else {
          alert('Email o contraseña incorrectos');
        }
      });
    }
  
    if (loginCancel && window.location.pathname.includes('login.html')) {
      loginCancel.addEventListener('click', () => {
        document.querySelectorAll('input').forEach(input => input.value = '');
      });
    }
  });

  