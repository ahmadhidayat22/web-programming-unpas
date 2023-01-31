const tombol = document.getElementById('Twarna');
tombol.onclick = function(){
  
    document.body.classList.toggle('tombol-hijau') 
}

const tblacak = document.createElement('button');
const text = document.createTextNode('Acak Warna');

tblacak.appendChild(text);
tblacak.setAttribute('type', 'button')
tombol.after(tblacak)

tblacak.addEventListener('click' , function(){
   
        const r = Math.round(Math.random() *300 +1);
        const g = Math.round(Math.random() *255 +1);
        const b = Math.round(Math.random() *255 +1);
        document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')'
    
})


const sMerah = document.querySelector('input[name = sMerah]');
const sHijau = document.querySelector('input[name = sHijau]');
const sBiru = document.querySelector('input[name = sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value;
   document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')'

})
sHijau.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value;
   document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')'

})
sBiru.addEventListener('input', function(){

    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value;
   document.body.style.backgroundColor= 'rgb('+r+','+g+','+b+')'

})

document.body.addEventListener('mousemove', function (event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // console.log(xPos)
    const yPOs = Math.round((event.clientY / window.innerHeight) * 255)

    document.body.style.backgroundColor= 'rgb('+xPos+','+ yPOs +',100)'
});
