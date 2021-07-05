const form = document.querySelector('form');

document.getElementById("poundsButton").addEventListener("click", function changeToPounds() {
    document.getElementById("benchLabel").innerHTML = "Bench in LBS:   ";
    document.getElementById("deadliftLabel").innerHTML = "Deadlift in LBS:   ";
    document.getElementById("squatLabel").innerHTML = "Squat in LBS:   ";
    document.getElementById("bodyWeightLabel").innerHTML = "Bodyweight in LBS:   ";
  }); 
  document.getElementById("kilosButton").addEventListener("click", function changeToKilos() {
    document.getElementById("benchLabel").innerHTML = "Bench in KGS:   ";
    document.getElementById("deadliftLabel").innerHTML = "Deadlift in KGS:   ";
    document.getElementById("squatLabel").innerHTML = "Squat in KGS:   ";
    document.getElementById("bodyWeightLabel").innerHTML = "Bodyweight in KGS:   ";
  }); 
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const bench = parseInt(document.querySelector('#bench').value);
    const deadlift = parseInt(document.querySelector('#deadlift').value);
    const squat = parseInt(document.querySelector('#squat').value);
    const bodyWeight = parseInt(document.querySelector('#bodyWeight').value);
    const results = document.querySelector('#results');
    const error = document.querySelector('#error')
    
    if((bench === '') || (bench < 0) || (isNaN(bench))){
        //NaN !== NaN
        error.innerHTML = "Please provide a valid weight";
        
    } else if (deadlift === '' || deadlift < 0 || isNaN(deadlift)){
        error.innerHTML = "Please provide a valid weight";
    }  else if (squat === '' || squat < 0 || isNaN(squat)){
        error.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    const totalWeight = (bench + deadlift + squat).toFixed(2);
    const timesYourBodyWeight = (totalWeight / bodyWeight).toFixed(2);
    //display the results
    results.innerHTML = `Your total is: ${totalWeight}!<br>${timesYourBodyWeight}x your bodyweight!`
    }
    
    
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

