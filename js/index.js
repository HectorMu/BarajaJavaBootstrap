const btnmostrar = document.getElementById('btn_mostrar');
const btnocultar = document.getElementById('btn_ocultar');
//controles carta 1
const btnvoltearC1 = document.getElementById('btn_voltearC1');
const btnocultarC1 = document.getElementById('btn_ocultarC1');
//controles carta 2
const btnvoltearC2 = document.getElementById('btn_voltearC2');
const btnocultarC2 = document.getElementById('btn_ocultarC2');
//controles carta 3
const btnvoltearC3 = document.getElementById('btn_voltearC3');
const btnocultarC3 = document.getElementById('btn_ocultarC3');
//controles carta 4
const btnvoltearC4 = document.getElementById('btn_voltearC4');
const btnocultarC4 = document.getElementById('btn_ocultarC4');
//controles carta 5
const btnvoltearC5 = document.getElementById('btn_voltearC5');
const btnocultarC5 = document.getElementById('btn_ocultarC5');
const carta1 = document.getElementById('carta1');
const carta2 = document.getElementById('carta2');
const carta3 = document.getElementById('carta3');
const carta4 = document.getElementById('carta4');
const carta5 = document.getElementById('carta5');

//boton para mostrar todas las cartas
btnmostrar.addEventListener('click',()=>{
    carta1.src = 'images/AsRombos.png';
    carta2.src = 'images/DosDiamantes.png';
    carta3.src = 'images/OchoDiamantes.png';
    carta4.src = 'images/TresDiamantes.png';
    carta5.src = 'images/TresEspadas.png';
});
//boton para ocultar todas las cartas
btnocultar.addEventListener('click',()=>{
    carta1.src = 'images/SinVoltear.png';
    carta2.src = 'images/SinVoltear.png';
    carta3.src = 'images/SinVoltear.png';
    carta4.src = 'images/SinVoltear.png';
    carta5.src = 'images/SinVoltear.png';
});

//Eventos para mantener una carta activa si se le da click
//Eventos de la carta 1
btnvoltearC1.addEventListener('click',()=>{
    carta1.src = 'images/AsRombos.png';
});
btnocultarC1.addEventListener('click',()=>{
    carta1.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 1
//Eventos de la carta 2
btnvoltearC2.addEventListener('click',()=>{
    carta2.src = 'images/DosDiamantes.png';
});
btnocultarC2.addEventListener('click',()=>{
    carta2.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 2
//Eventos de la carta 3
btnvoltearC3.addEventListener('click',()=>{
    carta3.src = 'images/OchoDiamantes.png';
});
btnocultarC3.addEventListener('click',()=>{
    carta3.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 3
//Eventos de la carta 4
btnvoltearC4.addEventListener('click',()=>{
    carta4.src = 'images/TresDiamantes.png';
});
btnocultarC4.addEventListener('click',()=>{
    carta4.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 4
//Eventos de la carta 5
btnvoltearC5.addEventListener('click',()=>{
    carta5.src = 'images/TresEspadas.png';
});
btnocultarC5.addEventListener('click',()=>{
    carta5.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 5



//Eventos MouseOver para cada carta
//Eventos de la carta 1
carta1.addEventListener('mouseover',()=>{
    carta1.src = 'images/AsRombos.png';
});
carta1.addEventListener('mouseout',()=>{
    carta1.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 1

//Eventos de la carta 2
carta2.addEventListener('mouseover',()=>{
    carta2.src = 'images/DosDiamantes.png';
});
carta2.addEventListener('mouseout',()=>{
    carta2.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 2


//Eventos de la carta 3
carta3.addEventListener('mouseover',()=>{
    carta3.src = 'images/OchoDiamantes.png';
});
carta3.addEventListener('mouseout',()=>{
    carta3.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 3

//Eventos de la carta 4
carta4.addEventListener('mouseover',()=>{
    carta4.src = 'images/TresDiamantes.png';
});
carta4.addEventListener('mouseout',()=>{
    carta4.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 4

//Eventos de la carta 5
carta5.addEventListener('mouseover',()=>{
    carta5.src = 'images/TresEspadas.png';
});
carta5.addEventListener('mouseout',()=>{
    carta5.src = 'images/SinVoltear.png';
});
//--Eventos de la carta 5