const foundingDate = new Date(2021, 7, 26);

const elapsedDaysElement = document.getElementById('elapsed-days');

const currentDate = new Date();

const timeElapsed = currentDate - foundingDate;

const daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

elapsedDaysElement.textContent = `이세계 아이돌 결성 +${daysElapsed}일`;

