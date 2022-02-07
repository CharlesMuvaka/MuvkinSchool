function myFunction(){
    var mName = document.forms["signIn"]["mName"].value;
    var pass = document.forms["signIn"]["pass"].value;

    if(mName=="student" && pass=="access" ){

        window.open("quiz.html");
    }
    else{
        alert("Invalid userName and Password");
    }
}