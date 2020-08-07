const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];

//const LCPasswords = passwords.map(password => password.toLowerCase())

const showMessage = (e) => {
    document.querySelector('div').textContent = '';
    const text = e.target.value;
    passwords.forEach((password, index)=>{
        
        if(text.toLowerCase() == password.toLowerCase()){
            e.target.value = "";
            document.querySelector('div').textContent = messages[index];
            
        }

    }
    
    )
    
   

}



input.addEventListener("input", showMessage)