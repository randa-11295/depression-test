// navpare
let mark = false;
document.querySelectorAll('section nav aside')[0].onclick = function(){
    updown ();
}
function updown(){
    if(innerWidth < 576){
        if( mark == false){
            document.querySelectorAll('section nav div')[0].style.animationName = "down";
            document.querySelectorAll('section nav div')[0].style.height  = '100vh';
        }
        else if ( mark == true ){
            document.querySelectorAll('section nav div')[0].style.animationName = "up";
            document.querySelectorAll('section nav div')[0].style.height  = '0'
        }
        
        mark=!mark
    }
    else {
        document.querySelectorAll('section nav div')[0].style.height  = '100vh'

     }
    
}

function recover(){
    if(innerWidth > 576){
      
        document.querySelectorAll('section nav div')[0].style.height  = '100vh'
       
    }
    else { document.querySelectorAll('section nav div')[0].style.height  = '0'  }
   
    }



// form

// vaildation form

const person = document.querySelectorAll('form .signin input');
const place = document.querySelectorAll("form figure");

let fName = false;
let age = false;
// let open = false

//name chacking
person[0].addEventListener('blur',function(){
    console.log(isNaN(person[0]))
        if( !isNaN(person[0].value) || person[0].value.length<3 ){
            place[0].style.color ="#ff8b7e";
            place[0].textContent =" يجب ان تكتب اسمك بشكل صحيح ";
            fName = false;

        }//if
        else {
            fName = true;
            place[0].innerHTML = "";
          } //else  
} )//event


//password checking
person[1].addEventListener('blur',function(){
     if(person[1].value.length > 2 ){
        place[0].textContent = "برجاء كتابة العمر بشكل صحيح"
     }

     else if (person[1].value < 15 ){
    place[0].textContent = "لا يمكنك اجراء الاختبار لانك اصغر من 15 عام";
    pass = false;
    }//if
    else if(person[1].value > 75 ){
        place[0].textContent = "لا يمكنك اجراء الاختبار لانك اكبر من 75 عام";
    }
    else {
        age = true;
        place[0].innerHTML = "";
      } //else  
} )//event



 document.querySelectorAll('.start')[0].addEventListener('click',function(){ 
     if (age && fName ){
         localStorage.clear();
         localStorage.setItem('name',person[0].value  );
         indx=[];
         count =-1;
         sorting();
         next();
         timer();
         go()
         open = true;

        }
        else {
            place[0].textContent = "تأكد أن كل معلوماتك صحيحة ";
        }//else
    }//fun
 )//event


//start the exam 

let indx = []
function sorting(){
    
    while(indx.length < arr.length  ){
        let   rndm = Math.floor((Math.random()* arr.length ) );   
        if(!indx.includes(rndm)){
            indx.push(rndm)
        }//if   
    }//while
    
}


//next and prives
 let count = -1 ; 
 document.querySelectorAll('.next')[0].onclick =next;
 function next(){      
     calc();
     if(count < indx.length -1  ){
         count++   ;
         change();

        }
    
     else{
          if( result.includes('empty')) {
                if(innerWidth < 576 ){
                    document.querySelectorAll('.item p')[1].innerHTML =` يجب عليك اجابة كل الاسئلة اولا سوف تجد الاسئلة الغير مجاب عنها علي الشريط العلوي `  ;
                }
                else {document.querySelectorAll('.item p')[1].innerHTML =` يجب عليك اجابة كل الاسئلة اولا سوف تجد الاسئلة الغير مجاب عنها علي الشريط الجانبي `  ;
            }
             }  

           else{
            document.querySelectorAll('.item p')[1].innerHTML =`لعرض النتيجة اضغط علي زر عرض النتيجة` 
           }
        }   
}
    
document.querySelectorAll('.prives')[0].onclick =function (){
        calc();
        if(count > 0 ){
            count--;
            change();}

        else{
             document.querySelectorAll('.item p')[1].innerHTML =` لا يوجد اسئلة سابقة `  ;
           } 
    }


function display(){
       calc()
       count =  this.textContent - 1;
       updown();
       change();
}



//change quetion
function change(){
    elRespond[0].style.background ='#459CD1';
    elRespond[1].style.background ='#459CD1';
    document.querySelectorAll('.item p')[1].innerHTML =`` 
    document.querySelectorAll('.data  p')[0].textContent =  arr[indx[count]].question ;
    document.querySelectorAll('.data  aside')[0].textContent  = count + 1;

    if (spacial.includes(count)){
        document.querySelectorAll(".mark")[0].style.background ='#ff8b7e';
    }
    else { document.querySelectorAll(".mark")[0].style.background ='#459CD1';  }

    correct.checked = false;
    notcorrect.checked = false;

    if( result[count]=='yes'){
        correct.checked = true;
        elRespond[0].style.background ='#ff8b7e'
    }
    else if( result[count]=='no'){
        notcorrect.checked = true;  
        elRespond[1].style.background ='#ff8b7e'
    }
    if(count==1){
        if(innerWidth > 576 ){
            document.querySelectorAll('.item p')[1].innerHTML =` يمكنك الضغط علي زر (Enter) وذلك لعرض السؤال التالي  `  ;
        } 
    }
    
}

    

//calculey result
let result = [];
let correct = document.querySelectorAll('.answer input' )[0];
let notcorrect = document.querySelectorAll('.answer input' )[1];

function calc(){
    if(count>=0 ){
    
        if( correct.checked == true ){
            result[count] = 'yes'
        }
        else if ( notcorrect.checked  == true){
            result[count]='no';
        }
        else{  result[count]='empty'; 
            if( !spacial.includes(count)  ){
                creat() }

            }    
        }

     if (result.length == arr.length && !result.includes('empty') ){
            document.querySelectorAll('.back')[0].style.display ='inline';
            document.querySelectorAll('.back')[0].style.animationName ='apper';        
      }
    }


// checked
let elRespond = document.querySelectorAll(".answer button" )
for ( let i = 0 ; i < elRespond.length ; i++ ){
elRespond[i].addEventListener('click',  function(){

    document.querySelectorAll('.answer input' )[i].checked = true;
    elRespond[0].style.background ='#459CD1';
    elRespond[1].style.background ='#459CD1';
    elRespond[i].style.background ='#ff8b7e';
}
)
}

//mark 
let spacial = [];
document.querySelectorAll('.mark')[0].addEventListener('click', notes)
function notes(){

    
    if (!spacial.includes(count) ){

        this.style.background ='#ff8b7e';
        creat();   

    }
    
    else if (spacial.includes(count)) {
        
        this.style.background ='#459CD1'; 
        let index =  spacial.findIndex((el)=> el == count  )
        var delet = document.querySelectorAll('section nav div p')[index];

       
        delet.style.animationName='disapper';
                delet.remove();
                spacial.splice(index, 1);  

       document.querySelectorAll('section nav aside  figure')[0].style.animationName ='bigger';
       setTimeout(() => {
         document.querySelectorAll('section nav aside  figure')[0].style.animationName ='';
      
       }, 1000);

    }
}

function creat(){
    
    document.querySelectorAll('section nav aside  figure')[0].style.animationName ='bigger';
        setTimeout(() => {
            document.querySelectorAll('section nav aside  figure')[0].style.animationName ='';
        }, 1000);
    let acsess = document.createElement('p');
    acsess.onclick = display ; 
    acsess.innerHTML = count + 1 ;
    spacial.push(count); 
    document.querySelectorAll('section nav div')[0].appendChild(acsess);
    acsess.style.animationName ='apper'
}


let score = 0;
document.querySelectorAll('.back')[0].addEventListener('click',function(){
    for(let i = 0 ; i < arr.length ; i++){
      
        if(result[i]==arr[indx[i]].answer ){  
            score++
           
        }

  }  
  
        total();
        document.querySelectorAll('body > section')[0].style.display ="none";
        document.querySelectorAll('body > footer')[0].style.display ="flex";

    


})
function total (){
 
    document.querySelectorAll(".result span")[0].innerHTML = localStorage.name ;
    
     if (score==  0) {
        document.querySelectorAll('.result h3')[0].textContent=" غير محدد";
        document.querySelectorAll('.result p')[1].innerHTML =`
        لم يتم تحديد النتيجة بسبب قضاء وقت اكثر من المحدد للإجابة عن الاسئلة
        `           
              
    }
    else  if (score > 0 && score < 7 ){
        
    
        document.querySelectorAll('.result h3')[0].textContent=" منخفض ";
      
        document.querySelectorAll('.result p')[1].textContent   =` 
        انت شخص عاجز عن تحمل القلق نشاطك زائد و إندفاعي  تنافسي وكثير الكلام , انبساطي وسطحي في علاقتك الاجتماعية  تواجه مشكلات في عدم السيطرة علي مشاعرك 
        `
    }

    
    
    else if (score >= 7 && score < 16 ){
     
        document.querySelectorAll('.result h3')[0].textContent="اقل من المتوسط";
        document.querySelectorAll('.result p')[1].innerHTML =" انت شخص يقذ إجتماعيا ونشيط لديك فاعلية في عمل المهام المختلفة تذكر دائما ان تفرغ طاقتك في اشياء مفيدة وتستغلها بشكل ايجابي"

    }

    else if (score >= 16 && score < 24 ){
      
        document.querySelectorAll('.result h3')[0].textContent="معتدل ومتوسط";
        document.querySelectorAll('.result p')[1].innerHTML =`
           لديك اتجاهات معتدلة وسلوك يعكس اعراضا اكتئابية طبيعية قد تأتي لديك اوقات من الحزن والشعور بالضغط النفسي
           وكثرة القلق وذلك بسبب الاضرابات والضغوط الحياتية لديك لكن مشاعر القلق سوف تقل عند زوال مسبابتها
        `
    }
    else if (score >= 24 && score < 35 ){
       
        document.querySelectorAll('.result h3')[0].textContent="فوق المتوسط";
        document.querySelectorAll('.result p')[1].innerHTML =`انت شخص توصف انك خجول
        لديك مشاعر عدم رضا عن الذات او عن شئ ما اخر قد لا تبالي بما يحدث لك او تعلمت التكيف والتوافق مع مشاعرك الاكتئابية
        لكن لا تدرك حالتك علي انها اكتئاب   
        `
    }
    else if ( score > 35 ){
      
        document.querySelectorAll('.result h3')[0].textContent="ملحوظ ومرتفع";
        document.querySelectorAll('.result p')[1].innerHTML =`
        توصف عامة بالاكتئاب والقلق وتقلب المزاج وفرط الحساسية كما انك شخص منعزل ومنطوي ولديك شعور بعدم الرضا عن الذات لكن ذلك يشكل لديك ضغطا داخليا نحو التغير ولذلك فهي علامة تنبؤية جيدة قد يوجد لديك شكوي بدنية وصعوبات في النوم وفقدان لشهية الطعام           
              `
    }
    }


//set time

minute =39;
secound = 59;
function timer(){
let interv =  setInterval(() => {
    secound--;

    if (secound < 0  ){
        secound = 59;
        minute--

        if (minute < 0){
            total();
            clearInterval(interv);
        }

       else if( minute ==10 ){
            document.querySelectorAll('.item p')[1].innerHTML =`
              يجب عليك الاسراع بحل الاسئلة `  ;
        
        }

     else   if( minute ==5 ){
            document.querySelectorAll('.item p')[1].innerHTML =`
               لن يتم عرض النتيجة إذا انقضي الوقت `  ;
        
        }

      else  if( minute ==2 ){
            document.querySelectorAll('.item p')[1].innerHTML =`
              سوف يتوقف الاختبار بعد دقيقتين `  ;
        }
    }
    document.querySelectorAll(".time span")[0].innerHTML = (`${secound} : ${minute}`)
    
}, 1000);
}

function active(e){
    if (open){
        if(e.code == 'Enter' || e.code == 'Space'){
            next();
        }
        
    }
}


//transform
//  part one
document.querySelectorAll('main button')[0].addEventListener('click' , function(){
    document.querySelectorAll('body > main')[0].style.display ="none";
    document.querySelectorAll('body > figcaption')[0].style.display ="flex";
    
})
//part tow
function go(){
    document.querySelectorAll('body > figcaption')[0].style.display ="none";
    document.querySelectorAll('body > section')[0].style.display ="flex";
}
















