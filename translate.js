  function fn1() {
  const translate = document.getElementById("inputbox").value;
  
  const lmao = translate.split(/ +/); 
    
    const isBritish = value => {
    if(value.toLowerCase() === 'british') {
     value = "Bri'ish"; 
      } else { 
       return; 
        }
    }
    
 lmao.forEach(x => isBritish(x));
  
  }
