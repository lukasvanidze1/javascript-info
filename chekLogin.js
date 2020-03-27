let userName = prompt("What is you name?", "");

if (userName == "Luca") {
    let vipPass = prompt("Ohh Vip, Please Tell Me The password", "")

    if (vipPass == "MR-Luca") {
        alert("Welcome boss");
    }
    else if (vipPass == "" || vipPass == null) {
        alert("You are not Vip any more");
    }
    else ("Sorry mister you are not in Vip list")
}

else if (userName == "Admin") {
    let pass = prompt("tell me password", "");

    if (pass == "TheMaster") {
        alert("Welcome bro");
    }
    else if (pass == "" || pass == null) {
        alert("You Canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (userName == "" || userName == null) {
    alert("You Canceled");
}
else {
    alert("I don't know you");
}