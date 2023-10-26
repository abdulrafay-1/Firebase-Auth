import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw2XhGX1t7uxQUQXzY6CRo5rdXctpSn-g",
    authDomain: "smit-project-48030.firebaseapp.com",
    projectId: "smit-project-48030",
    storageBucket: "smit-project-48030.appspot.com",
    messagingSenderId: "911848961579",
    appId: "1:911848961579:web:89b9175f080f369a615c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


function login() {
    const password = document.getElementById("exampleInputPassword")
    const email = document.getElementById("exampleInputEmail")

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            Swal.fire({
                icon: 'success',
                title: 'Congrats',
                text: 'Login Successfull !',
            })
            email.value = ""
            password.value = ""
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
}


function signInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            Swal.fire({
                icon: 'success',
                title: 'Congrats',
                text: 'Login Successfull !',
            })
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
}
const googleBtn = document.getElementById("signinwithgoogle")

loginBtn.addEventListener("click", login)
googleBtn.addEventListener("click", signInWithGoogle)
