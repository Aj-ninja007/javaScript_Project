const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault() //it is used for to prevent submit form

    const height=parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#result')

    if(height =='' || height <0 || isNaN(height)){
      results.innerHTML=`please inter valid height ${height}`;
    }

    else if(weight =='' || weight <0 || isNaN(weight)){
      results.innerHTML=`please inter valid height ${weight}`;
    }
    else{
       const bmi= (weight/((height*height)/1000)).toFixed(2);

       results.innerHTML=`<span>${bmi}</span>`
    }
});