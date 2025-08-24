

const x = document.getElementById('plain');
const y = document.getElementById('key');

function cipherf(text) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower='abcdefghijklmnopqrstuvwxyz';
    let newstr = '';

    let shift = parseInt(y.value); // Convert input value to integer
    if (isNaN(shift)) {
        alert("please enter the key");
        return text;
    }
    
for (let i=0; i<text.length; i++){
    let char=text[i];
    if (upper.includes(char)){
        let index=upper.indexOf(char);
        let newindex=(index + shift)%26;
   newstr += upper[newindex];
    }
    else if(lower.includes(char)){
        let index=lower.indexOf(char);
        let newindex=(index + shift)%26;
        newstr +=lower[newindex];
    }
    else{
        newstr +=char;//الحروف الرموز ذي ماهي
    }
}
return newstr;

}
// Example usage: Call function on button click
document.getElementById("cipherb").addEventListener("click", function (event) {
    event.preventDefault();
const resu= document.getElementById('outputArea');
    let inputText = x.value;
    let result = cipherf(inputText);
    console.log(result);
    // resu.value=result;
    resu.innerText = "Encrypted: " + result;
    localStorage.setItem("lastEncrypted", result);
});

// window.addEventListener("load", function () {
//     const resu = document.getElementById('outputArea');
//     let savedEncrypted = localStorage.getItem("lastEncrypted");
//     if (savedEncrypted) {
//         resu.innerText = "Encrypted: " + savedEncrypted;
//     }
// });

// /////////

function plainf(text) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower='abcdefghijklmnopqrstuvwxyz';
    let newstr = '';
    
    let shift = parseInt(y.value); // Convert input value to integer
    if (isNaN(shift)) {
        alert("Please enter the key");
        return text;
    }
    
    for (let i = 0; i < text.length; i++) {
        let char=text[i];
        if(upper.includes(char)){
            let index=upper.indexOf(char);
            let newindex=(index - shift + 26)%26;
            newstr+=upper[newindex];
        
        }
        else if (lower.includes(char)){
            let index=lower.indexOf(char);
            let newindex=(index - shift +26 )%26;
            newstr += lower[newindex];
        }
        else { // لو كان اي رمز
            newstr += char;
        }
   
}
return newstr;
}
//  Call function on button click


document.getElementById("plainb").addEventListener("click", function (event) {
    event.preventDefault();//امنع السلوك الافتراضي للحدث (event)"
   let resu=document.getElementById('outputArea')
    const plaintext=resu.innerText;
    inputText=plaintext.replace("Encrypted: ", "").trim();
    let resultt = plainf(inputText);
    console.log(resultt);
    resu.innerText="Decrypted: " +resultt;
 
});

// ////////






//     for (let i = 0; i < text.length; i++) {
//         // let index = upper.indexOf(text[i].toUpperCase()); // Ensure case insensitivity
//         if (index=upper.indexOf(text[i]).toUpperCase()){
//         if (index === -1) {
//             newstr += text[i]; // Keep non-alphabet characters unchanged
//         } else {
//             let newindex = (index + shift) % 26;
//             newstr += upper[newindex];
//         }
//     }
    
//     else if ( index=lower.indexOf(text[i])){
//         if (index === -1) {
//             newstr += text[i]; // Keep non-alphabet characters unchanged
//         } else {
//             let newindex = (index + shift) % 26;
//             newstr += upper[newindex];
//         }
//     }

//     return newstr;
// }