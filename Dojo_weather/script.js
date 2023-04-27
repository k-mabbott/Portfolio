

function loading(){
    alert('Loading weather report...');
}
function acceptCookies(){
    document.getElementById('cookie-bar').remove()
}
// function changeTemp(value){
//     if (value == 'farenheit'){
//         for (var i = 1; i < 5; i++){
//             tempHigh = document.querySelector('#high' + i).innerText
//             tempHigh = ((tempHigh * 9/5 + 32)); 
//             document.querySelector('#high' + i).innerText = tempHigh.toPrecision(2);
//             tempLow = document.querySelector('#low' + i).innerText
//             tempLow = ((tempLow * 9/5 + 32));
//             document.querySelector('#low' + i).innerText = tempLow.toPrecision(2);
//             }
//     } else{
//         for (var i = 1; i < 5; i++){
//             tempHigh = document.querySelector('#high' + i).innerText
//             tempHigh = ((tempHigh - 32) * (5/9));
//             document.querySelector('#high' + i).innerText = tempHigh.toPrecision(2);
//             tempLow = document.querySelector('#low' + i).innerText
//             tempLow = ((tempLow - 32) * (5/9));
//             document.querySelector('#low' + i).innerText = tempLow.toPrecision(2);
//         }
//     }
// }

const tempConverters = {
    farenheit: toFarenheit,
    celcius: toCelcius
}

function changeTemp(tempUnit){
    const temps = document.querySelectorAll(".high, .low");
    const converter = tempConverters[tempUnit]
    for (const temp of temps){
        temp.innerText = converter(temp.innerText)
    }
}

function toFarenheit(temperature){
    return (temperature * 9/5 + 32).toPrecision(2);
}

function toCelcius(temperature){
    return ((temperature - 32) * (5/9)).toPrecision(3);
}


// const tempConverters = {
//     farenheit: value => (value * 9/5 + 32).toPrecision(2),
//     celcius: value => ((value - 32) * (5/9)).toPrecision(3)
// }


// tempConverters.farenheit()