function turnOnLights(){
  switchLights()
  let notif = document.getElementById("lightBulb");
  notif.innerHTML = `<h1>Thankyou! Now press the color buttons</h1>`;

  function switchLights(){

    var numberOfSwitches = document.querySelectorAll(".button").length;
    
    for (var i = 0; i < numberOfSwitches; i++) {
    
      document.querySelectorAll(".button")[i].addEventListener("click",function(){  
      
        var switchButtons = this.innerHTML;
    
        switch(switchButtons){
    
          case "Red":
            let redBulb = document.getElementById("lightBulb");
            redBulb.innerHTML = `<img src="RED.png" id="lightBulb">`;
          break;
    
          case "Blue":
            let blueBulb = document.getElementById("lightBulb");
            blueBulb.innerHTML = `<img src="BLUE.png" id="lightBulb">`;
          break;
    
          case "Yellow":
            let yellowBulb = document.getElementById("lightBulb");
              yellowBulb.innerHTML = `<img src="YELLOW.png" id="lightBulb">`;
          break;
    
          case "Green":
            let greenBulb = document.getElementById("lightBulb");
              greenBulb.innerHTML = `<img src="GREEN.png" id="lightBulb">`;
          break;
    
          case "Violet":
            let violetBulb = document.getElementById("lightBulb");
              violetBulb.innerHTML = `<img src="VIOLET.png" id="lightBulb">`;
          break;
    
          case "White":
            let whiteBulb = document.getElementById("lightBulb");
              whiteBulb.innerHTML = `<img src="WHITE.png" id="lightBulb">`;
          break;
    
          case "Orange":
            let orangeBulb = document.getElementById("lightBulb");
              orangeBulb.innerHTML = `<img src="ORANGE.png" id="lightBulb">`;
          break;
    
          case "Pink":
            let pinkBulb = document.getElementById("lightBulb");
              pinkBulb.innerHTML = `<img src="PINK.png" id="lightBulb">`;
          break;
    
          case "Teal":
            let tealBulb = document.getElementById("lightBulb");
              tealBulb.innerHTML = `<img src="TEAL.png" id="lightBulb">`;
          break;
    
          case "Magenta":
            let magentaBulb = document.getElementById("lightBulb");
              magentaBulb.innerHTML = `<img src="MAGENTA.png" id="lightBulb">`;
          break;
    
          default:
            break;
    
        }
       });
     }
    
    }
    
}
function turnOffLights(){
  location.reload()
}