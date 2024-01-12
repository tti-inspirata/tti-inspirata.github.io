document.addEventListener('DOMContentLoaded', () => {
    setLanguageBasedOnBrowser();
});

function setLanguageBasedOnBrowser() {
    const lang = navigator.language || navigator.userLanguage; 
    if (lang.startsWith('zh')) {
        document.getElementById('invalid-account').textContent = '用户名和密码无效!';
        document.getElementById('log-out').textContent = '账户已退出!';
        document.getElementById('login-title').textContent = '使用恩道电子书账户登录';
        document.getElementById('username').placeholder = '邮箱地址';
        document.getElementById('password').placeholder = '密码';
        document.querySelector('#login-form input[type="submit"]').value = '登录';
    } else {
        document.getElementById('invalid-account').textContent = 'Invalid username and password.';
        document.getElementById('log-out').textContent = 'You have been logged out.';
        document.getElementById('login-title').textContent = 'Log in with your Inspirata eBooks account';
        document.getElementById('username').placeholder = 'Email address';
        document.getElementById('password').placeholder = 'Password';
        document.querySelector('#login-form input[type="submit"]').value = 'LON IN';
    }
}