function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn')
    let minutesButton = document.getElementById('minutesBtn')
    let secondsButton = document.getElementById('secondsBtn')

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    daysButton.addEventListener('click', (e) => {
        if (e.target) {
            hoursInput.value = Number(daysInput.value) * 24;
            minutesInput.value = Number(hoursInput.value) * 60;
            secondsInput.value = Number(minutesInput.value) * 60;
        }
    })

    hoursButton.addEventListener('click', (e) => {
        if (e.target) {
            minutesInput.value = Number(hoursInput.value) * 60;
            secondsInput.value = Number(minutesInput.value) * 60;
            daysInput.value = Number(hoursInput.value) / 24;
        }
    })

    minutesButton.addEventListener('click', (e) => {
        if (e.target) {
            secondsInput.value = Number(minutesInput.value) * 60;
            hoursInput.value = Number(minutesInput.value) / 60;
            daysInput.value = Number(hoursInput.value) / 24;
        }
    })

    secondsButton.addEventListener('click', (e) => {
        if (e.target) {
            minutesInput.value = Number(secondsInput.value) / 60;
            hoursInput.value = Number(minutesInput.value) / 60;
            daysInput.value = Number(hoursInput.value) / 24;
        }
    })


}