document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const successMsg = document.getElementById('register-success');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate
        const name = form['name'].value.trim();
        const email = form['email'].value.trim();
        const phone = form['phone'].value.trim();
        const address = form['address'].value.trim();
        const password = form['password'].value;
        const password2 = form['password2'].value;

        // Basic validation
        if (!name || !email || !phone || !address || !password || !password2) {
            alert("Бүх талбарыг бөглөнө үү.");
            return;
        }
        if (password !== password2) {
            alert("Нууц үг хоорондоо таарахгүй байна.");
            return;
        }
        if (password.length < 6) {
            alert("Нууц үг хамгийн багадаа 6 тэмдэгт байна.");
            return;
        }
        // Store to localStorage (for demo)
        const user = { name, email, phone, address, password };
        localStorage.setItem('liningclub_user', JSON.stringify(user));
        successMsg.style.display = "block";
        setTimeout(() => { window.location.href = "login.html"; }, 1500);
    });
});