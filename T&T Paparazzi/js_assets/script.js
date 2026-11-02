/* 
   T&T PAPARAZZI - FUNCTIONALITY & VALIDATION SUITE
*/
// 1. Contact Form Validation
function validateContactForm(event) {
    event.preventDefault();

    let isValid = true;

    // Elements
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');

    nameError.innerText = "";
    phoneError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    formStatus.innerText = "";

    // Name Check
    if (name === "") {
        nameError.innerText = "Please enter your full name.";
        isValid = false;
    }

    // Phone Check (South African Format validation)
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.innerText = "Enter a valid SA phone number (e.g. +27725819382 or 0725819382).";
        isValid = false;
    }

    // Email Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Message Check
    if (message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters long.";
        isValid = false;
    }

    if (isValid) {
        formStatus.innerText = "Thank you! Your message has been validated and sent successfully.";
        document.getElementById('contactForm').reset();
    }

    return false;
}

function filterServices() {
    const query = document.getElementById('serviceSearch').value.toLowerCase();
    const items = document.querySelectorAll('.service-item');

    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// 3. Lightbox Gallery
function openLightbox(src) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    modal.style.display = "block";
    img.src = src;
}

function closeLightbox() {
    document.getElementById('lightboxModal').style.display = "none";
}

function calculateCost(event) {
    event.preventDefault();

    const serviceSelect = document.getElementById('serviceCategory');
    const hoursInput = document.getElementById('estimatedHours');
    const resultBox = document.getElementById('costResult');

    const hourlyRate = parseFloat(serviceSelect.value);
    const hours = parseFloat(hoursInput.value);
    const selectedServiceText = serviceSelect.options[serviceSelect.selectedIndex].text.split('(')[0].trim();

    if (isNaN(hourlyRate) || isNaN(hours) || hours <= 0) {
        resultBox.style.display = 'block';
        resultBox.style.borderColor = 'orange';
        resultBox.innerHTML = '<p style="color: orange;">Please select a service and enter a valid number of hours.</p>';
        return;
    }

    const totalCost = hourlyRate * hours;

    resultBox.style.display = 'block';
    resultBox.style.borderColor = 'red';
    resultBox.innerHTML = `
        <h3>Estimated Quote</h3>
        <p><strong>Service:</strong> ${selectedServiceText}</p>
        <p><strong>Duration:</strong> ${hours} hour(s) @ R${hourlyRate}/hr</p>
        <p><strong>Total Estimate:</strong> <strong>R${totalCost.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}</strong></p>
    `;
}

// 5. Basic Login Validation
function validateLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    if (email) {
        alert(`Welcome back, ${email}! You have successfully logged in.`);
    }
    return false;
}