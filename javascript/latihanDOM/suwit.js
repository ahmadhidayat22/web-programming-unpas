const btn = document.querySelector('button[name=btn]');
const input = document.querySelector('input');
const cls = document.querySelector('button[name= cls]')
const ul = document.querySelector('.container ul');

btn.addEventListener('click', function(){
    const p = input.value;
    // alert(p)
    const liBaru = document.createElement('li');
    const text = document.createTextNode(p);
    liBaru.appendChild(text);
    ul.appendChild(liBaru)

})
cls.addEventListener('click', function(){
    // ul.removeChild(liBaru)
    // alert('p')
    
    const li = ul.querySelectorAll('li');
    // console.log(li)
    for(i = 0; i < li.length; i++){
        ul.removeChild(li[i])
        // console.log(ul)

    }
})

