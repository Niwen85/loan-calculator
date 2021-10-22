var yearSelect = document.getElementById('years')
var loan = document.getElementById('sliderVal');
var time = document.querySelector('#time');
var slide = document.querySelector('#slider');
var kostnad = document.querySelector('.kostnad')
function sliderChange(val) {
    loan.value = val;

    calcYear()
}
function sliderChange2(val2) {
    yearSelect.selectedIndex = val2
    calcYear()
}
// function 1 loan /year(12)    function2 loan /100 *0.25


loan.onchange = function () {
    if (loan.value > 600000) {
        loan.value = 600000

    }
    slide.value = loan.value

    calcYear()

}
const calcYear = function () {

    const ränta = loan.value / 100 * 0.25
    const år = yearSelect.options[yearSelect.options.selectedIndex].value
    const delbetalning = loan.value / (år * 12)
    const result = Math.floor(ränta + delbetalning)
    kostnad.innerHTML = result

}

function timeDropBox(val) {
    time.value = val.index + 1
    calcYear()
}
