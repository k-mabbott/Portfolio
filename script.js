
// ------------------------------------header-------------------------

const f = document.getElementById("runner");
let timeout;

function goRun(){
    home.addEventListener(
        "click",
        (ev) => {
            f.style.animation = 'paused'
            f.style.transform = `translateY(${ev.clientY - 35}px)`;
            f.style.transform = `translateX(${ev.clientX - 190}px)`;
        },
        false
        );
        setTimeout(keepRunning, 4000)
        setTimeout(keepRunning, 4000);
}
function keepRunning(){
    f.style.animation = ''
    f.style.transform = `translateY(0px)`;
    f.style.transform = `translateX(- 190px)`
}



// --------------------------------------------------------Bacon functions---------------------------

let meatAndFiller = "all-meat" // "meat-and-filler" || "all-meat" 
let format = "sentences" // "paras" || "sentences"
let amount = 1 // 
let lorem = "" // "" || "&start-with-lorem=1"
document.getElementById("format-span").innerHTML = format;


function getMeatAndFiller(elem) {
    // console.log(elem.value + 'meatandfiller')
    meatAndFiller = elem.value
}

function getFormat(elem) {
    // console.log(elem.value + 'format')
    format = elem.value
    if (elem.value == "paras"){
    document.getElementById("format-span").innerHTML = "paragraphs";
    } else {
        document.getElementById("format-span").innerHTML = "sentences"
    }
}

function getAmount(elem) {
    // console.log(elem.value)
    amount = elem.value
}

function getLorem(elem) {
    // console.log(elem.value)
    if (elem.value == "yes" ){
        lorem = "&start-with-lorem=1"
    } else {
        lorem = ''
    }
}

function copyText() {
    var copiedText = document.getElementById("bacon");
    navigator.clipboard.writeText(copiedText.innerText);
    alert("Copied the meats");
} 

async function getBacon() { //https://baconipsum.com/api/?type=all-meat&sentences=301&start-with-lorem=1
    const url = `https://baconipsum.com/api/?type=${meatAndFiller}&${format}=${amount}${lorem}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(url)
    const paras = []
    for (var i = 0; i < data.length ; i++){
        paras.push(data[i])
        paras.push('<br><br>')
    }
    console.log(data)
    document.getElementById('bacon').innerHTML = paras
}  


// -------------------------------------------------- Get Pictures functions ----------------------------



let whatPicture = {
    'keanu': `https://placekeanu.com`,  //`https://placekeanu.com/${x}/${y}`
    'cat': `https://placekitten.com`,  // `https://placekitten.com/${x}/${y}`
    'dog': `https://placedog.net`,  //  `https://placedog.net/${x}/${y}`
    'random': `https://picsum.photos`,  //`https://picsum.photos/${x}/${y}`
    'x': document.getElementById('img-x').value,  
    'y': document.getElementById('img-y').value,
    'choice': document.getElementById('picture-type').value
}
function getImage(){
    document.getElementById("random-image").src ="./images/loading.gif";
    whatPicture.x = document.getElementById('img-x').value
    whatPicture.y = document.getElementById('img-y').value
    whatPicture.choice = document.getElementById('picture-type').value
    if (whatPicture.choice == 'keanu'){
        document.getElementById("random-image").src = `${whatPicture.keanu}/${whatPicture.x}/${whatPicture.y}`
    }
    if (whatPicture.choice == 'cat'){
        document.getElementById("random-image").src = `${whatPicture.cat}/${whatPicture.x}/${whatPicture.y}`
    }
    if (whatPicture.choice == 'dog'){
        document.getElementById("random-image").src = `${whatPicture.dog}/${whatPicture.x}/${whatPicture.y}`
    }
    if (whatPicture.choice == 'random'){
        document.getElementById("random-image").src = `${whatPicture.random}/${whatPicture.x}/${whatPicture.y}`
    }
    document.getElementById('image-div').style.display = 'block'
}
function hide(elem){
    elem.parentNode.parentNode.style.display = 'none'
}

// --------------------------------------------------Projects-----------------------
function showProject(elem) {
    elem.nextElementSibling.nextElementSibling.style.display = 'block'
}
function hoverProject(elem){
    elem.nextElementSibling.style.height = "6rem";
    elem.nextElementSibling.style.opacity = "1";
}
function hoverProjectOut(elem){
    elem.nextElementSibling.style.height = "0";
    elem.nextElementSibling.style.opacity = "0";
}

const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});


// ------------------------------ --Footer-- --------------------






