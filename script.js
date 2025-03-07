const firebaseConfig = {
  apiKey: "AIzaSyB36eaTUJVzzV137kW31_nQX2Npo6pvBko",
  authDomain: "birthdayform.firebaseapp.com",
  databaseURL: "https://birthdayform-default-rtdb.firebaseio.com",
  projectId: "birthdayform",
  storageBucket: "birthdayform.firebasestorage.app",
  messagingSenderId: "647568467873",
  appId: "1:647568467873:web:5794d60e485388823d0de0",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

// refrence your database
var contactFormDB = firebase.database().ref("birthdayForm");

document.getElementById("birthdayForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailId = getElementVal("emailId");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailId, msgContent);

  // enable alert
  document.querySelector(".alert").style.display = "block";

  // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset the form
  document.getElementById("birthdayForm").reset();
}

const saveMessages = (name, emailId, msgContent) => {
  var newBirthdayForm = contactFormDB.push();

  newBirthdayForm.set({
    name: name,
    emailId: emailId,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
