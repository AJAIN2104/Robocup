/* ========================================
   RoboCup India 2026 - Main JavaScript
   ======================================== */

// TODO: Customize functionality and add your own features as needed

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips and popovers if using Bootstrap
    initializeBootstrapComponents();
    
    // Add scroll animation
    addScrollAnimations();
    
    // Smooth scroll for anchor links
    setupSmoothScroll();
    
    // Handle form submissions
    setupFormHandlers();
});

/**
 * Initialize Bootstrap components
 * Tooltips and Popovers
 */
function initializeBootstrapComponents() {
    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

/**
 * Add scroll animations to elements
 */
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, section').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Setup smooth scroll for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just '#'
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Setup form handlers
 */
function setupFormHandlers() {
    // Handle contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

/**
 * Handle contact form submission
 */
function handleContactFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const form = e.target;
    const formData = new FormData(form);

    // Validate form
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // TODO: Send form data to backend/email service
    // For demonstration, we'll just show success message
    
    // In production, you would do something like:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(data => {
        showMessage('success', 'Thank you! Your message has been sent.');
        form.reset();
    })
    .catch(error => {
        showMessage('error', 'There was an error sending your message. Please try again.');
    });
    */

    // For now, show success message
    showMessage('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
    form.reset();
    form.classList.remove('was-validated');
}

/**
 * Show message notification
 */
function showMessage(type, message) {
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');

    if (type === 'success') {
        if (successMsg) {
            successMsg.querySelector('strong').textContent = 'Success!';
            successMsg.textContent = message;
            successMsg.classList.remove('d-none');
        }
        if (errorMsg) {
            errorMsg.classList.add('d-none');
        }

        // Auto-hide message after 5 seconds
        setTimeout(() => {
            if (successMsg) {
                successMsg.classList.add('d-none');
            }
        }, 5000);
    } else {
        if (errorMsg) {
            errorMsg.querySelector('strong').textContent = 'Error!';
            errorMsg.textContent = message;
            errorMsg.classList.remove('d-none');
        }
        if (successMsg) {
            successMsg.classList.add('d-none');
        }
    }
}

/**
 * Utility: Format phone number
 */
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{10})$/);
    if (match) {
        return `${match[1].slice(0, 5)}-${match[1].slice(5)}`;
    }
    return phoneNumber;
}

/**
 * Utility: Validate email
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Count down to deadline
 */
function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if (distance < 0) {
            countdownElement.innerHTML = 'Registration has closed!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <span class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Days</span>
            </span>
            <span class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Hours</span>
            </span>
            <span class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Minutes</span>
            </span>
            <span class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Seconds</span>
            </span>
        `;
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Initialize countdown for registration deadline
 * TODO: Update the target date to your registration deadline
 */
function initializeCountdown() {
    const registrationDeadline = 'September 28, 2026';
    // Uncomment to use countdown feature
    // startCountdown(registrationDeadline);
}

/**
 * Load events dynamically (if needed)
 */
function loadEvents() {
    // TODO: Fetch events from backend/API
    // This is a placeholder for dynamic event loading
}

/**
 * Social media share functions
 */
function shareOnFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareOnTwitter(text = '') {
    const url = window.location.href;
    const defaultText = 'Check out RoboCup India 2026! Join us in the most exciting robotics competition.';
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text || defaultText)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showMessage('success', 'Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.click();
    }
}

/**
 * Close mobile menu when link is clicked
 */
function setupMobileMenuClose() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
}

// Initialize mobile menu close
setupMobileMenuClose();

// Initialize countdown on page load
initializeCountdown();

/**
 * Add active class to navigation link based on current page
 */
function updateActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Update active nav link on page load
updateActiveNavLink();

/**
 * Log utility for debugging
 * Can be disabled by setting APP_DEBUG = false
 */
const APP_DEBUG = false;

function debugLog(message, data = null) {
    if (APP_DEBUG) {
        console.log(`[RoboCup Debug] ${message}`, data || '');
    }
}

debugLog('RoboCup India 2026 - Website loaded successfully');

/* ========================================
   End of Main JavaScript
   ======================================== */
