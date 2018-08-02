/*one*/
var valOne = '';
var valTwo = '';
var valThree = ''; 
var valFour = '';
/*two*/
var valFive = '';
var valSix = '';
var valSeven = '';
var valEight = '';
/*three*/
var valItem = '';
var valDis = '';
var valPrice = '';

/* one */
function one(){
    document.getElementById('display1').innerHTML = valOne ;
}

function two(){
    document.getElementById('display2').innerHTML = valTwo ;
}


function three(){
    document.getElementById('display3').innerHTML = valThree ;
}

function four(){
    document.getElementById('display4').innerHTML = valFour ;
}
    /*two*/
  function five(){
    document.getElementById('display5').innerHTML = valFive ;
}  
 function six(){
    document.getElementById('display6').innerHTML = valSix ;
}     
 function seven(){
    document.getElementById('display7').innerHTML = valSeven ;
} 
 function eight(){
    document.getElementById('display8').innerHTML = valEight ;
} 
 function item(){
    document.getElementById('Items').innerHTML = valItem ;
}
 function discription(){
    document.getElementById('Discription').innerHTML = valDis ;
}
function price(){
    document.getElementById('Price').innerHTML = valPrice ;
}

 window.onload = function createbuttons(){
    /* one */
    document.getElementById('button1').onclick = function(){
    valOne = document.getElementById('name').value;  one(); 
     valTwo = document.getElementById('company').value;  two();
      valThree = document.getElementById('address').value;  three();
       valFour = document.getElementById('City').value;  four();
    };
    /*two*/
     document.getElementById('button2').onclick = function(){
    valFive = document.getElementById('las2').value; five();
     valSix = document.getElementById('company2').value; six();
      valSeven = document.getElementById('address2').value; seven();
       valEight = document.getElementById('city2').value; eight();
    };
    /*three*/
     document.getElementById('button3').onclick = function(){
    valItem = document.getElementById('Item').value; item();
     valDis = document.getElementById('discription').value; discription();
      valPrice = document.getElementById('price').value; price();
    };
};


function showHideBoxes(){
  if(document.getElementById('hideShow').onclick){
    document.getElementById('hide').style.display='none';
   }else{document.getElementById('hide').style.display='block';}

  if(document.getElementById('hideShow').onclick){
    document.getElementById('hide2').style.display='none';
   }else{document.getElementById('hide2').style.display='block';}
 
  if(document.getElementById('hideShow').onclick){
    document.getElementById('hide3').style.display='none';
   }else{document.getElementById('hide3').style.display='block';}
}
    
