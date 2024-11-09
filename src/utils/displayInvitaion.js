
function displayInvitaion(formData) {
    document.getElementById('form-container').style.display = "none"

    const eventName = formData.get('eventName')
    const eventDate = formData.get('eventDate')
    const startTime = formData.get('startTime')
    const endTime = formData.get('endTime')
    const eventDescription = formData.get('eventDescription')
    const eventLocation = formData.get('eventLocation')

    const formattedDate = formatDateWithYearMonthDay(eventDate)

    document.querySelector('.event-name').textContent = eventName;
    document.querySelector('.event-date').textContent = formattedDate;
    document.querySelector('.event-time').textContent = `${startTime} - ${endTime}`;
    document.querySelector('.event-description').textContent = eventDescription;
    document.querySelector('.event-location').textContent = eventLocation;


    document.getElementById('invitation-display').classList.remove('hidden-modal')
}
function formatDateWithYearMonthDay(date) {
    const newDate = new Date(date);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(newDate);

    return formattedDate
}