const imageSliders = document.querySelectorAll('.image')[0].children;
const btnSuivants  = document.querySelector('.suivant');
const btnPrecedent = document.querySelector('.precedent');
const ronds        = document.querySelectorAll('.ronds')[0].children;
const nbrImages    = imageSliders.length;
let etape =1;

Array.from(ronds).forEach(rond => {
    rond.addEventListener('click',function(){
        for (let i = 0; i < nbrImages; i++) {
            ronds[i].classList.remove('rond-active');
        }
        console.log(this);
        this.classList.add('rond-active');
        imageSliders[etape].classList.remove('active');
        etape=this.getAttribute('data-index')-1;
        imageSliders[etape].classList.add('active');
        
    });
  });

btnSuivants.addEventListener('click',slideSuivant);
btnPrecedent.addEventListener('click',slidePrecedent);

function slideSuivant(){

    if (etape < nbrImages) {
        for (let i = 0; i < nbrImages; i++) {
            imageSliders[i].classList.remove('active');
            ronds[i].classList.remove('rond-active');
        }
        imageSliders[etape].classList.add('active');
        ronds[etape].classList.add('rond-active');
        
        etape++;
    }
    else if (etape === nbrImages) {
        for (let i = 0; i < nbrImages; i++) {
            imageSliders[i].classList.remove('active');
            ronds[i].classList.remove('rond-active');
        }
        etape=0;
        imageSliders[etape].classList.add('active');
        ronds[etape].classList.add('rond-active');
        etape++;
    }
    
};

function slidePrecedent(){
    
    if(etape-1 > 0){

        for (let i = 0; i < nbrImages; i++) {
            imageSliders[i].classList.remove('active');
            ronds[i].classList.remove('rond-active');
        }
        etape--;
        imageSliders[etape-1].classList.add('active');
        ronds[etape-1].classList.add('rond-active');
        
    }
    else if(etape-1 < nbrImages){
        for (let i = 0; i < nbrImages; i++) {
            imageSliders[i].classList.remove('active');
            ronds[i].classList.remove('rond-active');
        }
        etape=nbrImages;
        imageSliders[etape-1].classList.add('active');
        ronds[etape-1].classList.add('rond-active');
      
    }
};

document.addEventListener('keydown',keyPress);

function keyPress(e){

    if (e.keyCode === 37) {
        slidePrecedent();
    }
    else if (e.keyCode === 39) {
        slideSuivant();
    }

}

setInterval(() => {
    slideSuivant();
}, 3000);