const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

PopulateUI(); //function

let ticketprice = +movieselect.value;

//save selected movie index and price
function seatmoviedata(movieIndex, movieprice) {

localStorage.setItem('selectedMovieIndex', movieIndex);
localStorage.setItem('selectedMovieprice', movieprice);
}


//update total and count
function updateSelectedCount() {
const selectedseats = document.querySelectorAll('.row .seat.selected');

const seatsIndex = [...selectedseats].map(seat => [...seats].indexOf(seats));

localStorage.setItem('seletedseats', JSON.stringify(seatsIndex));

const selectedseatscount = selectedseats.length;

count.innerText = selectedseatscount;
total.innerText = selectedseatscount * ticketprice;

seatmoviedata(movieselect.selectedIndex, movieselect.value);
}

//get data from localstorage and populate UI

function PopulateUI() {
    const selectedseats = JSON.parse(localStorage.getItem('selectedseats'));
    if (selectedseats !== null && selectedseats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedseats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieselect.selectedIndex = selectedMovieIndex;
    }
}

//movie select event
movieselect.addEventListener('change' , e => {
ticketprice = +e.target.value;
seatmoviedata(e.target.selectedIndex, e.target.value);
updateSelectedCount();
});

//seat click event
container.addEventListener('click', e => {
if 
    (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) 
    {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});


