

function friendRequestAccpt(elem){
    elem.parentElement.remove()
    document.getElementById('two').innerText--
    document.getElementById('five-hundred').innerText++

} 

function friendRequestDecl(elem){
    elem.parentElement.remove()
    document.getElementById('two').innerText--
} 


function changeName(id){
    document.querySelector('#' + id).innerText = "John Buck";
    // console.log(name);
    // name = 'John Buck';
    // return name;
}