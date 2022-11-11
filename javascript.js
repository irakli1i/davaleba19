

document.querySelector('#yourButton').onclick = function(){
    var button = this;
    var buttonText = this.innerText;
    
    
    button.setAttribute("disabled", true);
    
    var secondsUntilNextClick = 11;
    var interval = setInterval(function(){
      secondsUntilNextClick--;
      button.innerText = secondsUntilNextClick;
     
      if (secondsUntilNextClick === 0){
        clearInterval(interval);
        button.innerText = buttonText;
        
      }
      
    }, 1000)
  }