let element = document.getElementById('avis1');
let findClass = document.querySelectorAll('.cardRepear');
let findClass2 = document.querySelectorAll('.cardRepear2');
let buttonClickAvis = document.getElementById('clickVoirPlus');
let buttonClickComment = document.getElementById('clickVoirPlusComment');



/* FUNCTION POUR VOIR AUTRES PUBLICATION ET AVIS */
function voirPlusAvis(){
        //console.log(buttonClickAvis.textContent)

        if(buttonClickAvis.textContent == ' Voir plus'){
            buttonClickAvis.innerHTML = ' Voir moins'
        }else{
            buttonClickAvis.innerHTML = ' Voir plus'
        }

        findClass.forEach(function(element){
            element.classList.toggle('hide')
        })
    }

/* FUNCTION POUR VOIR AUTRES PUBLICATION ET AVIS */
function voirPlusPost(){
    //console.log(buttonClickAvis.textContent)
    
        if(buttonClickComment.textContent == ' Voir plus'){
            buttonClickComment.innerHTML = ' Voir moins'
        }else{
            buttonClickComment.innerHTML = ' Voir plus'
        }
    
        findClass2.forEach(function(element){
            element.classList.toggle('hide')
        })
    }

buttonClickAvis.addEventListener('click', voirPlusAvis);
buttonClickComment.addEventListener('click', voirPlusPost);