let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let comecar = document.getElementById("comecar");
let display = document.getElementById("display");

for(let i = 0; i <= 60; i++){
    minutos.innerHTML += `<option value="${i}">${i}</option>`;
};
for(let i = 0; i <= 60; i++){
    segundos.innerHTML += `<option value="${i}">${i}</option>`;
};
comecar.onclick = () => {
    let minutoAtual = minutos.value;
    let segundoAtual = segundos.value;

    let interval = setInterval(() => {
        display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}`
        segundoAtual--;

        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }
            else{
                document.getElementById("sound").play();
                alert("Acabou!!!");
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = `${minutoAtual}:${segundoAtual}`
    },1000);
};