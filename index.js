let array = [17,31,77,20,63];

let arrayContainerEl = document.getElementById("arrayContainer");
let itemEl =  document.getElementById("item");

function findButton(){
    let itemvalue = parseInt(itemEl.value);

    let index = array.findIndex((each)=> {
        if(each === itemvalue){
            return true
        }else{
            return false
        }
    })
    arrayContainerEl.textContent = index;
    
}
