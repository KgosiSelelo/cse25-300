// ================================
// APPLY FOR LOAN
// ================================
function submitApplication() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let school = document.getElementById("school").value;

    if (name === "" || email === "" || phone === "" || school === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Generate random Application ID
    let applicationId = "KMS" + Math.floor(Math.random() * 100000);

    // Save data
    localStorage.setItem("applicationId", applicationId);
    localStorage.setItem("loanStatus", "Pending");
    localStorage.setItem("studentName", name);

    alert(
        "Application Submitted Successfully!\n\n" +
        "Application ID: " + applicationId
    );

    // Clear form
    document.getElementById("loanForm").reset();
}

// ================================
// CHECK LOAN STATUS
// ================================
function checkStatus() {

    let enteredId = document.getElementById("studentId").value;

    let storedId = localStorage.getItem("applicationId");
    let status = localStorage.getItem("loanStatus");
    let name = localStorage.getItem("studentName");

    let result = document.getElementById("result");

    if (!storedId) {
        result.innerHTML = "No application found. Please apply first.";
        result.style.color = "orange";
        return;
    }

    if (enteredId === storedId) {

        result.innerHTML =
            "<strong>Name:</strong> " + name + "<br>" +
            "<strong>Application ID:</strong> " + storedId + "<br>" +
            "<strong>Status:</strong> " + status;

        result.style.color = "lightgreen";

    } else {

        result.innerHTML = "Application ID not found!";
        result.style.color = "red";
    }
}

// ================================
// REPAYMENT SYSTEM
// ================================
let balance = 10000;

function makePayment() {

    let amount = parseFloat(document.getElementById("paymentAmount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid payment amount!");
        return;
    }

    balance -= amount;

    if (balance < 0) {
        balance = 0;
    }

    let balanceEl = document.getElementById("balance");
    if (balanceEl) {
        balanceEl.innerHTML = "Outstanding Balance: P" + balance.toFixed(2);
    }

    alert("Payment of P" + amount.toFixed(2) + " Successful!\nOutstanding Balance: P" + balance.toFixed(2));
}

// ================================
// CONTACT FORM
// ================================
function sendMessage() {

    let message = document.getElementById("message").value;

    if (message === "") {
        alert("Please enter your message!");
        return;
    }

    alert("Message Sent Successfully!");

    document.getElementById("contactForm").reset();
}

// ================================
// FEEDBACK FORM
// ================================
function submitFeedback() {

    let feedback = document.getElementById("comments").value;

    if (feedback === "") {
        alert("Please enter your feedback!");
        return;
    }

    alert("Thank you for your feedback!");

    document.getElementById("feedbackForm").reset();
}

// ================================
// STAR RATING SYSTEM
// ================================
function rate(stars) {

    let allStars = document.querySelectorAll(".star-rating span");

    allStars.forEach((star, index) => {

        if (index < stars) {
            star.style.color = "gold";
        } else {
            star.style.color = "gray";
        }
    });

    document.getElementById("rating-value").innerHTML =
        "You rated us " + stars + " stars ⭐";
}

// ================================
// PHONE NUMBER FORMAT
// ================================
document.addEventListener("DOMContentLoaded", function () {

    let phoneInput = document.getElementById("phone");

    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            if (!phoneInput.value.startsWith("+267 ")) {
                phoneInput.value = "+267 ";
            }
        });
    }
});