document.addEventListener('DOMContentLoaded', function() {
    const addEventButton = document.getElementById('add-event-button');
    const viewCalendarButton = document.getElementById('view-calendar-button');
    const refreshCalendarButton = document.getElementById('refresh-calendar-button');

    // Function to open Google Calendar in a new tab for adding an event
    function openAddEvent() {
        window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank');
    }

    // Function to open the full Google Calendar in a new tab
    function openFullCalendar() {
        window.open('https://calendar.google.com/calendar/u/0/r', '_blank');
    }

    // Function to refresh the calendar iframe
    function refreshCalendar() {
        const calendarFrame = document.getElementById('calendar-frame');
        const src = calendarFrame.src;
        calendarFrame.src = ''; // Temporarily clear src
        calendarFrame.src = src; // Reset src to refresh iframe
    }

    // Add event button functionality
    if (addEventButton) {
        addEventButton.addEventListener('click', openAddEvent);
    }

    // View full calendar button functionality
    if (viewCalendarButton) {
        viewCalendarButton.addEventListener('click', openFullCalendar);
    }

    // Refresh calendar button functionality
    if (refreshCalendarButton) {
        refreshCalendarButton.addEventListener('click', refreshCalendar);
    }
});
