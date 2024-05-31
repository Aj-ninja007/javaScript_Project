const getRandomNumber=()=>{
    return parseInt(Math.random()*100+1);
};

const feedback=(randomNum,generatedNumber)=>{
    const suggestion=document.getElementById('suggestion');
    const displayText=randomNum>generatedNumber?'Please guess larger Number!!':'Please guess smaller Number!!';
    suggestion.innerHTML=displayText;
};

const handleSumbitBtn=(randomNumber)=>{
    const guessField=document.getElementById('guessField');
    const prevGuesses=document.querySelector('.guesses');
    const guessFieldData=guessField.value;
    prevGuesses.innerHTML=guessFieldData;
    if(randomNumber==guessFieldData){
        alert(true)
    }
    else{
        feedback(randomNumber,guessFieldData);
    }
};

const init =()=>{
    const submitBtn=document.getElementById('submitBtn');
    const randomNumber=getRandomNumber();
    alert(randomNumber);
    submitBtn.addEventListener('click',function(){
        handleSumbitBtn(randomNumber);
    });
};

init();