const calendarId = 'c_c0592ec9224e0c282946cb0c6891ef5b0e82ab965152e1a78a4029ffaa7ff945@group.calendar.google.com';
const apiKey = 'AIzaSyA4azAb4CPI2laSiLCLMgXPbeqVaWSeBSo';

const today = new Date();
const isoStart = new Date(today.setHours(0, 0, 0, 0)).toISOString();
const isoEnd = new Date(today.setHours(23, 59, 59, 999)).toISOString();

const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&timeMin=${isoStart}&timeMax=${isoEnd}&singleEvents=true&orderBy=startTime`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('schoolday');
        const container2 = document.getElementById('schooldaymobile');
        container.innerHTML = '';
        container2.innerHTML = '';
        if (!data.items || data.items.length === 0) {
            container.innerHTML = '<p>No information today</p>';
            container2.innerHTML = '<p>No information today</p>';
            return;
        }
        data.items.forEach(event => {
            const div = document.createElement('div');
            div.className = 'event';
            div.textContent = event.summary || 'No Title';
            container.appendChild(div);
            container2.appendChild(div);
        });
    })
    .catch(err => {
        console.error(err);
        document.getElementById('schoolday').innerHTML = 'Error loading events.';
        document.getElementById('schooldaymobile').innerHTML = 'Error loading events.';
    });