  function fn1() {
  const translate = document.getElementById("inputbox").value;
  
  const lmao = translate.split(/ +/); 
    
    const isBritish = value => {
    if(value.toLowerCase() === 'british') {
     value = "Bri'ish"; 
      alert(value);
      } else { 
       alert('why'); 
        }
    }
    
 lmao.forEach(x => isBritish(x));
  
  }
