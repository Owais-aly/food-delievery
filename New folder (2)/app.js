let uemail = document.getElementById("uemail");
let upassword = document.getElementById("upassword");
let iemail = document.getElementById("iemail");
let ipassword = document.getElementById("ipassword");
var auth = firebase.auth();
var db = firebase.firestore();


function signUp(use) {

    auth.createUserWithEmailAndPassword(uemail.value, upassword.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            console.log(uemail.value, upassword.value);
            uemail.value = " ";
            upassword.value = " ";
            if (use == "use") {
                window.location.href = "../home.html";
            }
            else {
                window.location.href = "../add.html";
            }
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage);
            // ..
        });
}

function signIn(use) {
    console.log(iemail.value, ipassword.value)
    auth.signInWithEmailAndPassword(iemail.value, ipassword.value)
    
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(userCredential.user)
            // ...
            if (use == "use") {
                window.location.href = "../home.html";
            }
            else {
                window.location.href = "../add.html";
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
function addData () {
    // console.log(auth.currentUser);
    db.collection("users").add({
        first: "Ada",
        uid: auth.currentUser.uid
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
