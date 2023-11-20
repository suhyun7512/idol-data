const foundingDate = new Date(2021, 12, 17);

const elapsedDaysElement = document.getElementById('elapsed-days');

const currentDate = new Date();

const timeElapsed = currentDate - foundingDate;

const daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

elapsedDaysElement.textContent = `데뷔일로부터: +${daysElapsed}일`;

