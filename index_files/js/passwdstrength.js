  // timeout before a callback is called

    let timeout;

    // traversing the DOM and getting the input and span using their IDs


    // The strong and weak password Regex pattern checker
    // between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    let lowsecPassword = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$","g");
    // 10+ :alnum:
    var basicsPassword  = /^(?=.*\d)(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    //8 to n characters which contain at least one numeric digit and a special character
    var minsecPassword  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    //10 to n characters which contain at least one numeric digit and a special character
    var strongPassword  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
    //15 to n characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    var bulletPassword =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{15,}$/;

    function StrengthChecker(PasswordParameter){
      var validate=[];
      let password = document.getElementById('passphrase')
      let strengthBadge = document.getElementById('StrengthDisp')
      strengthBadge.style.display= 'block'

        // We then change the badge's color and text based on the password strength
        if(       bulletPassword.test(PasswordParameter)) {
            validate.push("Your password is very OK");
            strengthBadge.style.backgroundColor = "purple"
            strengthBadge.textContent = 'Bullet Proof'
        } else if(strongPassword.test(PasswordParameter)) {
          validate.push("Your password is OK");
            strengthBadge.style.backgroundColor = "green"
            strengthBadge.textContent = 'Strong '
        } else if(minsecPassword.test(PasswordParameter)) {
          validate.push("Your password is somehow OK");
            strengthBadge.style.backgroundColor = "lightgreen"
            strengthBadge.textContent = 'Acceptable '
        } else if(basicsPassword.test(PasswordParameter)){
          validate.push("Your password not too trustworthy");
            strengthBadge.style.backgroundColor = 'lightblue'
            strengthBadge.textContent = 'Weak ( Accepted )'
        } else if(lowsecPassword.test(PasswordParameter)){
          validate.push("Your password too simple");
                    strengthBadge.style.backgroundColor = 'lightblue'
                    strengthBadge.textContent = 'Very Weak ( Not Accepted )'
        } else{
          validate.push("Your password very too simple or empty");
            strengthBadge.style.backgroundColor = 'red'
            strengthBadge.textContent = 'Ultra Weak ( Not Accepted ) '
        }
        console.log(validate.join("\n"))
    }




//    strengthBadge.style.display= 'block'

    // Adding an input event listener when a user types to the  password input


////////////////////////////        password.addEventListener("input", () => {
////////////////////////////        //The badge is hidden by default, so we show it
////////////////////////////        //strengthBadge.style.display= 'block'
////////////////////////////
////////////////////////////
////////////////////////////        clearTimeout(timeout);
////////////////////////////        //We then call the StrengChecker function as a callback then pass the typed password to it
////////////////////////////
////////////////////////////        timeout = setTimeout(() => StrengthChecker(password.value), 50);
////////////////////////////
////////////////////////////        //Incase a user clears the text, the badge is hidden again
////////////////////////////
//////////////////////////////        if(password.value.length !== 0){
//////////////////////////////            strengthBadge.style.display != 'block'
//////////////////////////////        } else{
//////////////////////////////            strengthBadge.style.display = 'none'
//////////////////////////////        }
////////////////////////////    });
////////////////////////////
