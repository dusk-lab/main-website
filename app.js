// --- ANIMATIONS ---
AOS.init({
    once: true,
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic',
});

// --- UTILS ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- NAVBAR SCROLL ---
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-dusk-bg/95');
        navbar.classList.remove('bg-dusk-bg/80');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-dusk-bg/95');
        navbar.classList.add('bg-dusk-bg/80');
    }
});

// --- FORM HANDLING ---
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const submitBtn = document.getElementById("submit-btn");
const loadingSpinner = document.getElementById("loading-spinner");
const btnText = submitBtn.querySelector("span");
const errorMsg = document.getElementById("error-msg");

async function handleSubmit(event) {
    event.preventDefault();
    // UI: Show loading
    submitBtn.disabled = true;
    loadingSpinner.classList.remove("hidden");
    btnText.textContent = "Sending...";
    errorMsg.classList.add("hidden");

    const data = new FormData(event.target);

    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.classList.add("hidden");
            successMessage.classList.remove("hidden");
            form.reset();
        } else {
            const jsonData = await response.json();
            console.error("Formspree Error:", jsonData);
            errorMsg.textContent = "Oops! There was a problem submitting your form.";
            errorMsg.classList.remove("hidden");
        }
    } catch (error) {
        console.error("Network Error:", error);
        errorMsg.textContent = "Network error. Please check your connection.";
        errorMsg.classList.remove("hidden");
    } finally {
        submitBtn.disabled = false;
        loadingSpinner.classList.add("hidden");
        btnText.textContent = "Send Message";
    }
}

function resetForm() {
    successMessage.classList.add("hidden");
    form.classList.remove("hidden");
}

form.addEventListener("submit", handleSubmit);

// --- MODAL LOGIC ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = modal.querySelector('div[id$="-backdrop"]');
    const panel = modal.querySelector('div[id$="-panel"]');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        backdrop.classList.remove('opacity-0');
        panel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
        panel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = modal.querySelector('div[id$="-backdrop"]');
    const panel = modal.querySelector('div[id$="-panel"]');

    backdrop.classList.add('opacity-0');
    panel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
    panel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

window.onclick = function (event) {
    if (event.target.id === 'terms-backdrop') closeModal('terms-modal');
    if (event.target.id === 'privacy-backdrop') closeModal('privacy-modal');
}


// --- THEME TOGGLE ---
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('theme-toggle-sun-icon');
const moonIcon = document.getElementById('theme-toggle-moon-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark') {
    moonIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
} else {
    sunIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});
