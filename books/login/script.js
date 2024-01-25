document.addEventListener('DOMContentLoaded', () => {
    setLanguageBasedOnBrowser();
});

function setLanguageBasedOnBrowser() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith('zh')) {
        document.getElementById('invalid-account').textContent = '邮箱地址或密码错误，请重新输入。';
        document.getElementById('log-out').textContent = '账户已退出!';
        document.getElementById('login-title').textContent = '使用恩道电子书账户登录';
        document.getElementById('username').placeholder = '邮箱地址';
        document.getElementById('password').placeholder = '密码';
        document.querySelector('#login-form input[type="submit"]').value = '登录';
    } else if (lang.startsWith ('zh-Hant')){
        document.getElementById('invalid-account').textContent = '郵箱地址或密碼錯誤，請重新輸入。';
        document.getElementById('log-out').textContent = '賬戶已登出!';
        document.getElementById('login-title').textContent = '使用恩道電子書賬戶登入';
        document.getElementById('username').placeholder = '郵箱地址';
        document.getElementById('password').placeholder = '密碼';
        document.querySelector('#login-form input[type="submit"]').value = '登入';
    }
    else {
        document.getElementById('invalid-account').textContent = 'Invalid login details. Please try again.';
        document.getElementById('log-out').textContent = 'You have been logged out.';
        document.getElementById('login-title').textContent = 'Log in with your Inspirata eBooks account';
        document.getElementById('username').placeholder = 'Email address';
        document.getElementById('password').placeholder = 'Password';
        document.querySelector('#login-form input[type="submit"]').value = 'LON IN';
    }
}
