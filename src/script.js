
function app() {
    const eventForm = document.getElementById('event-form')
    const today = new Date().toISOString().split('T')[0]
    const eventDateInput = document.getElementById('event-date');
    eventDateInput.setAttribute('min', today);
    eventForm.addEventListener("submit", handleSubmit)
}
document.addEventListener("DOMContentLoaded", app)