let diaActual = new Date().getDay();

function changeColor(day){
    const $div = document.getElementById(day);
    $div.classList.toggle('bar-active'); 
}

async function getDays() {
    const response = await fetch("data.json");
    const days = await response.json();
    return days;
}

async function loadData(){
    const days = await getDays();

    const $divs = document.querySelectorAll('.bar');
    const $divsHover = document.querySelectorAll('.bar-hover');

    $divs.forEach( ( div , index ) => {
        div.style.height = `${days[index].amount * 3}px`;
        div.addEventListener('click', () => {
            $divsHover[index].style.backgroundColor = 'black';
            $divsHover[index].innerHTML = `${days[index].amount}`;
            setTimeout(() => {
            $divsHover[index].style.backgroundColor = 'hsl(33, 100%, 98%)';
            $divsHover[index].innerHTML = '';
            },2000);
        })
    })

    diaActual === 0 ? diaActual = 6 : diaActual-- ;
    changeColor(days[diaActual].day);
} 

loadData();
