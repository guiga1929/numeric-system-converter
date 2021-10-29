let btn_switch = document.getElementById("btn-switch");
let btn_convert = document.getElementById("btn-convert");
let inp_txt = document.querySelectorAll('.inp-txt');
let inp_field = document.querySelectorAll('input[type=number]');
let convert_radix = 10;
let errorAlert = document.querySelector(".error");

btn_switch.addEventListener('click', function(){
    let temp = inp_txt[0].textContent;
    inp_txt[0].textContent = inp_txt[1].textContent;
    inp_txt[1].textContent = temp;
    convert_radix == 10 ? convert_radix = 2: convert_radix = 10;
    //console.log(convert_radix);
    inp_field[0].value = "";
    inp_field[1].value = "";
});

btn_convert.addEventListener('click', function(){
    
    let temp;
    let result;
    temp = parseInt(inp_field[0].value);

    if(convert_radix == 2 && !binaryCheck(temp)){
        ErrorMsg(errorAlert);
        inp_field[0].value = "";
        inp_field[1].value = "";
        return;
    }
    
    errorAlert.style.display = "none";
            
    result = convert(temp, convert_radix);
       
    inp_field[1].value = parseInt(result);
    
});


let convert = (value, radix) => {
    if(radix == 10){
        return value.toString(2);
    }else{
        return parseInt(value, 2);
    }
}

let binaryCheck = (value) => {
    let temp = String(value);
    for(let i = 0; i < temp.length; i++){
        if(temp[i] != '0' && temp[i] != '1') return false
    }
    return true;
}

let ErrorMsg = (errorAlert) => {
    errorAlert.style.display = "inherit"; 
}
