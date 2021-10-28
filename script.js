let btn_switch = document.getElementById("btn-switch");
btn_switch.addEventListener('click', function(){
    let inp_txt = document.querySelectorAll('.inp-txt');
    let temp = inp_txt[0].textContent;
    inp_txt[0].textContent = inp_txt[1].textContent;
    inp_txt[1].textContent = temp;
});

