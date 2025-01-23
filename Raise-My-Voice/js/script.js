 // Generate CAPTCHA code
 function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
  
  // Load CAPTCHA on page load
  const captchaCodeElement = document.getElementById('captchaCode');
  const captchaInputElement = document.getElementById('captchaInput');
  const refreshCaptchaButton = document.getElementById('refreshCaptcha');
  
  function loadCaptcha() {
    const captcha = generateCaptcha();
    captchaCodeElement.textContent = captcha;
    captchaInputElement.value = '';
  }
  
  loadCaptcha();
  
  // Refresh CAPTCHA on icon click
  refreshCaptchaButton.addEventListener('click', loadCaptcha);
  
  // Validate CAPTCHA on form submit
  document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.getElementById('captchaInput').value;
    if (userInput === document.getElementById('captchaCode').textContent) {
      // CAPTCHA Verified, redirect to next form (next HTML page)
      window.location.href = "index.html";  // Change 'next_form.html' to your actual next form's file name
    } else {
      alert('Incorrect CAPTCHA. Please try again.');
      loadCaptcha(); // Reload CAPTCHA if incorrect
    }
  });
  
  