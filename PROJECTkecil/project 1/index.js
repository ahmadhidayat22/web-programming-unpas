const container= document.querySelector('.container');
const preview = document.querySelector('.preview');
let thumbs=document.querySelectorAll('.thumb')

container.addEventListener('click',function(e){
    if( e.target.className == 'thumb'){
        
        preview.src = e.target.src;
        preview.classList.add('fade')
        setTimeout(function(){
            preview.classList.remove('fade')
        }, 100);
        
        thumbs.forEach(function(thumb){
            // if( thumb.classList.contains('active')){
            //     thumb.classList.remove('active')
            // }
            thumb.className ='thumb'
           
        })

        e.target.classList.add('active')
        
    }
});