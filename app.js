import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc,getDoc,  setDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
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
const db = getFirestore(app);

const RegisterBtn = document.getElementById("RegisterBtn")


function signup() {
    const password = document.getElementById("exampleInputPassword1").value
    const email = document.getElementById("exampleInputEmail1").value
    const username = document.getElementById("username").value
    const gender = document.getElementById("gender").value

    if (!(password && email && username && gender)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter input fields',
            confirmButtonColor: '#df2525',
        })
    } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)

                return setDoc(doc(db, "users", `${user.uid}`), {
                    email: email,
                    username: username,
                    password: password,
                    gender: gender,
                    
                  })
                
            }).then(()=> {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successfull',
                }).then(() => location.href = "./dashboard/dashboard.html")
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            });
    }
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
            }).then(() => { location.replace("./dashboard/dashboard.html") })

            // IdP data available using getAdditionalUserInfo(result)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        });
}
const googleBtn = document.getElementById("signinwithgoogle")

RegisterBtn.addEventListener("click", signup)
googleBtn.addEventListener("click", signInWithGoogle)

