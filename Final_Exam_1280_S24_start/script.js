// get the date from the input field
// function getDate() {
//     var dateIn = document.getElementById('birthday').value
//     console.log(dateIn) 
// }

function start() {

    const dateIn = document.getElementById('birthday').value;
    const countdownDate = new Date(dateIn).getTime();

    if (countdownDate < Date.now()) {
        alert("Date is Expired");
        return;
    }

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const dseconds = Math.floor((distance % 1000) / 100);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hrs').innerHTML = hours;
        document.getElementById('mins').innerHTML = minutes;
        document.getElementById('scnds').innerHTML = seconds;
        document.getElementById('dscnds').innerHTML = dseconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('demo').innerHTML = "Date is Expired";
        }
    }, 100);
}
