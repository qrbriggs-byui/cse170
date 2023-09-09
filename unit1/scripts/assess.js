
function radioValue(name) {
    var ele = document.getElementsByName(name);
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            return parseInt(ele[i].value)
        }
    }
    return -1;
}

function calculate(){        
for (let i=1; i<7; i++){
    result = 0
    for (let q=1; q<8; q++){
        value = radioValue(`${i}-${q}`)
        if (value==-1){
            document.getElementById("results").style.display='none'
            document.getElementById("no-results").style.display='block'
            return;
        }
        result+=value
    }
    let resultelt = document.getElementById("result"+i);
    resultelt.innerText = result;
    resultelt.style.backgroundColor = `rgb(${((28-result)/28)*255}, ${(result/28)*255}, 0)`
    console.log(`rgb(${((28-result)/28)*255}, ${(result/28)*255}, 0)`)
}

document.getElementById("results").style.display='block'
document.getElementById("no-results").style.display='none'
}

tags = document.getElementsByTagName("input");
for (let i=0; i<tags.length; i++){
    let elt = tags.item(i)
    elt.addEventListener('click', calculate)
}