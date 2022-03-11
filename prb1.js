let i = 0;

function tapRight(){
    i++;
    if (i > 4) {
        i = 0;
    }
    if (i === 0) {
        showBali();
    }
    if(i === 1) {
        showLondon();
    }
    if(i === 2) {
        showParis();
    }
    if(i === 3) {
        showVienna();
    }
    if(i === 4) {
        showSantorini()
    }
}

function tapLeft(){
    i--;
    if (i < 0) {
        i = 4;
    }
    if (i === 0) {
        showBali();
    }
    if(i === 1) {
        showLondon();
    }
    if(i === 2) {
        showParis();
    }
    if(i === 3) {
        showVienna();
    }
    if(i === 4) {
        showSantorini()
    }
}

function showBali(){
    document.getElementsByClassName("image one")[0].style.display = 'block';
    document.getElementsByClassName("image two")[0].style.display = 'none';
    document.getElementsByClassName("image three")[0].style.display = 'none';
    document.getElementsByClassName("image four")[0].style.display = 'none';
    document.getElementsByClassName("image five")[0].style.display = 'none';
    i = 0;
}
function showLondon(){
    document.getElementsByClassName("image one")[0].style.display = 'none';
    document.getElementsByClassName("image two")[0].style.display = 'block';
    document.getElementsByClassName("image three")[0].style.display = 'none';
    document.getElementsByClassName("image four")[0].style.display = 'none';
    document.getElementsByClassName("image five")[0].style.display = 'none';
    i = 1;
}
function showParis(){
    document.getElementsByClassName("image one")[0].style.display = 'none';
    document.getElementsByClassName("image two")[0].style.display = 'none';
    document.getElementsByClassName("image three")[0].style.display = 'block';
    document.getElementsByClassName("image four")[0].style.display = 'none';
    document.getElementsByClassName("image five")[0].style.display = "none";
    i = 2;
}
function showVienna(){
    document.getElementsByClassName("image one")[0].style.display = 'none';
    document.getElementsByClassName("image two")[0].style.display = 'none';
    document.getElementsByClassName("image three")[0].style.display = 'none';
    document.getElementsByClassName("image four")[0].style.display = 'block';
    document.getElementsByClassName("image five")[0].style.display = 'none';
    i = 3;
}
function showSantorini(){
    document.getElementsByClassName("image one")[0].style.display = 'none';
    document.getElementsByClassName("image two")[0].style.display = 'none';
    document.getElementsByClassName("image three")[0].style.display = 'none';
    document.getElementsByClassName("image four")[0].style.display = 'none';
    document.getElementsByClassName("image five")[0].style.display = 'block';
    i = 4;
}