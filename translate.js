  function fn1() {
  const translate = document.getElementById("inputbox").value;
  
  const lmao = Array.from(translate); 
    
    const isBritish = (value) => {
    if(value.toLowerCase() === 'british') {
     value = "Bri'ish"; 
      }
    }
    
 lmao.forEach(x => isBritish(x));
  
  }

