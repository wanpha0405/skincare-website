document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
   
    if (password !== confirmPassword) {
      document.getElementById('error-message').textContent = 'Passwords do not match!';
      document.getElementById('error-message').style.display = 'block';
      return;
    }
    
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      document.getElementById('error-message').textContent = 'All fields are required!';
      document.getElementById('error-message').style.display = 'block';
      return;
    }
    
   
    document.getElementById('error-message').style.display = 'none';
    
    
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  
    
    alert('Sign Up Successful!');
  });