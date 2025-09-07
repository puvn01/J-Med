// Contact form logic
window.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contact');
    const formEl = document.querySelector('form');

    function updateRequired() {
        if (emailInput.value.trim() || contactInput.value.trim()) {
            emailInput.required = false;
            contactInput.required = false;
        } else {
            emailInput.required = true;
            contactInput.required = true;
        }
    }

    emailInput.addEventListener('input', updateRequired);
    contactInput.addEventListener('input', updateRequired);

    formEl.addEventListener('submit', function (e) {
        if (!emailInput.value.trim() && !contactInput.value.trim()) {
            e.preventDefault();
            alert('Please provide either your email or contact number.');
        }
    });

    formEl.addEventListener('submit', async function (e) {
        e.preventDefault();
        // Remove any existing alert messages
        document.querySelectorAll('.alert').forEach(el => el.remove());

        const data = new FormData(formEl);
        const response = await fetch(formEl.action, {
            method: formEl.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            formEl.reset();
            formEl.insertAdjacentHTML('afterend', '<div class="alert alert-success mt-3">Thank you for contacting us! We will respond soon.</div>');
        } else {
            formEl.insertAdjacentHTML('afterend', '<div class="alert alert-danger mt-3">There was an error sending your message. Please try again later.</div>');
        }
    });
});