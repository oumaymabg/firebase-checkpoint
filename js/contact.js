var firebaseConfig = {
    apiKey: "AIzaSyBoLvtpUVUJp79dxnpQJOGxz4r3La5UtWs",
    authDomain: "gomycode-d13fd.firebaseapp.com",
    databaseURL: "https://gomycode-d13fd.firebaseio.com",
    projectId: "gomycode-d13fd",
    storageBucket: "gomycode-d13fd.appspot.com",
    messagingSenderId: "22781286672",
    appId: "1:22781286672:web:50a420e5268c245ffdad95",
    measurementId: "G-13PP1LPXVL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref('gomycode-d13fd');

function save_message(track, email, phone, name) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        track: track,
        email: email,
        phone: phone,
        name: name
    })
}

function submitForm(e) {
    e.preventDefault();
    var track = document.getElementById('track').value;
    var Email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    save_message(track, Email, phone, name);
};
document.getElementById('contactForm').addEventListener('submit', submitForm);