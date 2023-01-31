let wrapper= document.querySelector(".wrapper");
let inputan = document.querySelector('.header input');
inputan.addEventListener('keypress' , function(e){
    
    let p = inputan.value;
    if (p != ''){
        if(e.key === 'Enter'){
            let divNew= document.createElement('div');
            divNew.classList.add('todo');
            wrapper.appendChild(divNew);
            
            let text = document.createElement('p');
            let isi = document.createTextNode(p)
            
            text.appendChild(isi);
            divNew.appendChild(text);
            
            let divNewVal = document.createElement('div');
            divNewVal.classList.add('v');
            divNew.appendChild(divNewVal);
            
            
            let img1 = document.createElement('img');
            img1.setAttribute('src', 'check.png');
            img1.setAttribute('width', '20px')
            
            divNewVal.appendChild(img1)


            let img2 = document.createElement('img');
            img2.setAttribute('src', 'cross-button.png');
            img2.setAttribute('width', '24px')
         
            divNewVal.appendChild(img2)

            img2.addEventListener('click',function(){
                wrapper.removeChild(divNew)
            })    
            inputan.value = ''
            
            
            let clear = document.querySelector('#btn');
           clear.addEventListener('click' ,function(){
                wrapper.removeChild(divNew)
           })



           img1.addEventListener('click', function(){
            text.style.textDecoration = 'line-through'
            text.style.color = 'rgb(130, 130, 130)'
            divNew.style.backgroundColor = 'rgb(215,215,215)'
           })
        }
    }
})
