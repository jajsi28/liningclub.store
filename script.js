// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart functionality
document.querySelectorAll('.btn-product').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        const productPrice = this.closest('.product-card').querySelector('.product-price').textContent;
        
        // Add visual feedback
        this.style.backgroundColor = '#28a745';
        this.textContent = 'Added!';
        
        // Show notification (simple alert for demo)
        setTimeout(() => {
            alert(`${productName} (${productPrice}) added to cart!`);
            this.style.backgroundColor = '#000';
            this.textContent = 'Add to Cart';
        }, 1000);
    });
});

// Newsletter subscription
document.querySelector('.btn-newsletter').addEventListener('click', function() {
    const email = document.querySelector('.email-input').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
        this.style.backgroundColor = '#28a745';
        this.textContent = 'Subscribed!';
        document.querySelector('.email-input').value = '';
        
        setTimeout(() => {
            this.style.backgroundColor = '#fff';
            this.textContent = 'Subscribe';
        }, 2000);
    } else {
        alert('Please enter a valid email address');
    }
});

// Category buttons
document.querySelectorAll('.btn-category').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.closest('.category-card').querySelector('h3').textContent;
        alert(`Redirecting to ${category} section...`);
    });
});

// Hero buttons
document.querySelectorAll('.hero-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.textContent.includes('Men') ? 'Men' : 'Women';
        alert(`Redirecting to ${section} section...`);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Search functionality (navbar)
function searchProducts(query) {
    if (typeof window.searchProducts === "function") {
        window.searchProducts(query);
    } else {
        alert('Хайлтын систем зөвхөн бүтээгдэхүүний хуудсанд ажиллана!');
    }
}
document.querySelector('.search-icon').addEventListener('click', function() {
    const input = document.querySelector('.nav-search-input');
    if (input && input.value.trim()) {
        searchProducts(input.value.trim());
    } else {
        const searchTerm = prompt('What are you looking for?');
        if (searchTerm) {
            searchProducts(searchTerm);
        }
    }
});

// Cart functionality (basic)
document.querySelector('.cart-icon').addEventListener('click', function() {
    if (typeof openCart === 'function') {
        openCart();
    } else {
        alert('Cart is empty. Add some products to see them here!');
    }
});

// Profile functionality (basic)
document.querySelector('.profile-icon').addEventListener('click', function() {
    window.location.href = "login.html";
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Hamburger menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('btn-product') || 
            e.target.classList.contains('btn-category') ||
            e.target.classList.contains('btn-primary') ||
            e.target.classList.contains('btn-secondary')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 600ms linear;
        pointer-events: none;
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart functionality
document.querySelectorAll('.btn-product').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        const productPrice = this.closest('.product-card').querySelector('.product-price').textContent;
        
        // Add visual feedback
        this.style.backgroundColor = '#28a745';
        this.textContent = 'Added!';
        
        // Show notification (simple alert for demo)
        setTimeout(() => {
            alert(`${productName} (${productPrice}) added to cart!`);
            this.style.backgroundColor = '#000';
            this.textContent = 'Add to Cart';
        }, 1000);
    });
});

// Newsletter subscription
document.querySelector('.btn-newsletter').addEventListener('click', function() {
    const email = document.querySelector('.email-input').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
        this.style.backgroundColor = '#28a745';
        this.textContent = 'Subscribed!';
        document.querySelector('.email-input').value = '';
        
        setTimeout(() => {
            this.style.backgroundColor = '#fff';
            this.textContent = 'Subscribe';
        }, 2000);
    } else {
        alert('Please enter a valid email address');
    }
});

// Category buttons
document.querySelectorAll('.btn-category').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.closest('.category-card').querySelector('h3').textContent;
        alert(`Redirecting to ${category} section...`);
    });
});

// Hero buttons
document.querySelectorAll('.hero-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.textContent.includes('Men') ? 'Men' : 'Women';
        alert(`Redirecting to ${section} section...`);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Search functionality (basic)
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchTerm = prompt('What are you looking for?');
    if (searchTerm) {
        alert(`Searching for: "${searchTerm}"`);
    }
});

// Cart icon opens cart if available
document.querySelector('.cart-icon').addEventListener('click', function() {
    if (typeof openCart === 'function') {
        openCart();
    } else {
        alert('Cart is empty. Add some products to see them here!');
    }
});

// Profile functionality (basic)
document.querySelector('.profile-icon').addEventListener('click', function() {
    window.location.href = 'signin.html';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('btn-product') || 
            e.target.classList.contains('btn-category') ||
            e.target.classList.contains('btn-primary') ||
            e.target.classList.contains('btn-secondary')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 600ms linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Add to cart functionality
document.querySelectorAll('.btn-product').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        const productPrice = this.closest('.product-card').querySelector('.product-price').textContent;
        
        // Add visual feedback
        this.style.backgroundColor = '#28a745';
        this.textContent = 'Added!';
        
        // Show notification (simple alert for demo)
        setTimeout(() => {
            alert(`${productName} (${productPrice}) added to cart!`);
            this.style.backgroundColor = '#000';
            this.textContent = 'Add to Cart';
        }, 1000);
    });
});

// Newsletter subscription
document.querySelector('.btn-newsletter').addEventListener('click', function() {
    const email = document.querySelector('.email-input').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
        this.style.backgroundColor = '#28a745';
        this.textContent = 'Subscribed!';
        document.querySelector('.email-input').value = '';
        
        setTimeout(() => {
            this.style.backgroundColor = '#fff';
            this.textContent = 'Subscribe';
        }, 2000);
    } else {
        alert('Please enter a valid email address');
    }
});

// Category buttons
document.querySelectorAll('.btn-category').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.closest('.category-card').querySelector('h3').textContent;
        alert(`Redirecting to ${category} section...`);
    });
});

// Hero buttons
document.querySelectorAll('.hero-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.textContent.includes('Men') ? 'Men' : 'Women';
        alert(`Redirecting to ${section} section...`);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Search functionality (basic)
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchTerm = prompt('What are you looking for?');
    if (searchTerm) {
        alert(`Searching for: "${searchTerm}"`);
    }
});

// Cart functionality
document.querySelector('.cart-icon').addEventListener('click', function() {
    if (typeof openCart === 'function') {
        openCart();
    } else {
        alert('Cart is empty. Add some products to see them here!');
    }
});

// Profile functionality (basic)
document.querySelector('.profile-icon').addEventListener('click', function() {
    alert('Please log in to access your profile');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('btn-product') || 
            e.target.classList.contains('btn-category') ||
            e.target.classList.contains('btn-primary') ||
            e.target.classList.contains('btn-secondary')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 600ms linear;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
