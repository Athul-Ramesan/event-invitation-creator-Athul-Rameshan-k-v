
function app() {
    const eventForm = document.getElementById
    const today = new Date().toISOString().split('T')[0]
    const eventDateInput = document.getElementById('event-date');
    eventDateInput.setAttribute('min', today);
    ("event-form")

    console.log("🚀 ~ app ~ eventForm:", eventForm)

    
}
document.addEventListener("DOMContentLoaded", app)