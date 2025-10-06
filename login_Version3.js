document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const errorDiv = document.getElementById('login-error');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form['email'].value.trim();
        const password = form['password'].value;
        const user = JSON.parse(localStorage.getItem('liningclub_user'));

        if (!user || (email !== user.email && email !== user.phone) || password !== user.password) {
            errorDiv.style.display = 'block';
            setTimeout(() => { errorDiv.style.display = 'none'; }, 2000);
        } else {
            localStorage.setItem('liningclub_loggedin', 'true');
            window.location.href = "index.html";
        }
    });
});