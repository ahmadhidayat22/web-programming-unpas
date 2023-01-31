// // DOM Selection

// // document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.backgroundColor = '#aeaeae';
// judul.style.color = 'green';
// judul.innerHTML = 'Ahmad Nurhidayat'


// //document.getElementByTagName() -> htmlCollection
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length ; i++){
//     p[i].style.backgroundColor = '#aeae'
    
// }
// const h1 = document.getElementsByTagName('h1');
// h1[0].style.fontSize = '50px'


// // document.getElementByClassName() -> HtmlCollection

// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini Diubah lewat Javascript'

// // document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green'

// const li2 = document.querySelector('section#b ul li:nth-child(2)');

// li2.style.backgroundColor= 'orange'


// // document.getquerySelectorAll() -> nodelist
// const a = document.querySelectorAll('p');
// p[2].style.backgroundColor = 'lightblue'


// // node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';



// ======= manipulation DOM ======
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em> Ahmad Nur</em>'

// const sectionA = document.querySelector('section#a a');
// sectionA.innerHTML = 'Follow my Instagram'



// // ======= membuat elemen baru ======

// const newP = document.createElement('p');
// const textP = document.createTextNode('Paragraf Baru nih ');

// newP.appendChild(textP);

// const sectionA = document.getElementById('a')
// sectionA.appendChild(newP)


// const liBaru = document.createElement('li')
// const text = document.createTextNode('insert from javascript');
// const liBaru1 = document.createElement('li')
// const text1 = document.createTextNode('insert from javascript');

// liBaru.appendChild(text)
// liBaru1.appendChild(text1)

// const ul = document.querySelector('section#b ul')
// const ul2 = document.querySelector('section#b ul li:nth-child(2)');

// ul.insertBefore(liBaru, ul2)
// ul.appendChild(liBaru1)


// // menghapus element
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link)

// //====== menambah sebelum ============

// const h1New = document.createElement('h1');
// const texth1 = document.createTextNode('SECTION A')
// const p2 = sectionA.getElementsByTagName('p')[0];

// h1New.appendChild(texth1)
// sectionA.insertBefore(h1New, p2)


// // ==============================


// h1New.style.backgroundColor = 'lightblue'
// newP.style.backgroundColor = 'lightblue'
// liBaru.style.backgroundColor = 'lightblue'
// liBaru1.style.backgroundColor = 'lightblue'

// //================= mengganti elemen ========== 
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2')
// const texth2 = document.createTextNode('JUDUL PARAGRAF')

// h2Baru.appendChild(texth2);
// sectionB.replaceChild(h2Baru, p4)



// =========> Event <=========
// 1. event handler <- bersifat tunggal (aksinya)
const p2 = document.querySelector('section#a .p2')
function ubahWarna(){
    p2.style.backgroundColor = 'lightblue'
}
p2.onclick = ubahWarna;

// 2. addEventListener <- bisa menggunakan aksi yg banyak

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    
    const liBaru = document.createElement('li');
    const textLi = document.createTextNode('ITEM BARUU');
    liBaru.appendChild(textLi);

    ul.appendChild(liBaru)

  
})















