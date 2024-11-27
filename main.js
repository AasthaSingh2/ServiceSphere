// Book Now Alert
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("This feature is currently unavailable in the demo.");
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Track Your Service Form
const trackForm = document.querySelector('#track form');
if (trackForm) {
    trackForm.addEventListener('submit', event => {
        event.preventDefault();
        const bookingID = event.target.querySelector('input').value;
        if (bookingID) {
            alert(`Tracking for Booking ID: ${bookingID}. This is a placeholder feature.`);
        } else {
            alert("Please enter a Booking ID.");
        }
    });
}

// Profile Page Placeholder
const profileImg = document.querySelector('#profile img');
if (profileImg) {
    profileImg.addEventListener('click', () => {
        alert("Profile editing is not available in the demo.");
    });
}

// Worker Dashboard: Accept/Reject Job Requests
document.querySelectorAll('.job-request button').forEach(button => {
    button.addEventListener('click', event => {
        const action = event.target.textContent;
        const customer = event.target.closest('.job-request').querySelector('.customer-name').textContent;
        const service = event.target.closest('.job-request').querySelector('.service-name').textContent;
        const location = event.target.closest('.job-request').querySelector('.location').textContent;

        if (action === "Accept") {
            // Store details in localStorage and redirect
            localStorage.setItem("jobDetails", JSON.stringify({ customer, service, location }));
            window.location.href = "job-details.html";
        } else {
            alert("Job rejected.");
        }
    });
});

// Job Details Page: Load Job Information
document.addEventListener("DOMContentLoaded", () => {
    const jobDetails = JSON.parse(localStorage.getItem("jobDetails"));

    if (jobDetails) {
        document.getElementById("customer-name").textContent = jobDetails.customer;
        document.getElementById("service-name").textContent = jobDetails.service;
        document.getElementById("location").textContent = jobDetails.location;

        // Mock values for distance and time
        document.getElementById("distance").textContent = "5 km";
        document.getElementById("time").textContent = "Today, 3:00 PM";
    } else {
        alert("No job details found!");
    }
});

// Subscription Modal
function openModal(planName, planDescription, planBenefits) {
    const modal = document.getElementById("subscription-modal");
    modal.style.display = "block";

    document.getElementById("modal-plan-name").textContent = planName;
    document.getElementById("modal-plan-description").textContent = planDescription;

    const benefitsList = document.getElementById("modal-plan-benefits");
    benefitsList.innerHTML = ""; // Clear existing benefits
    planBenefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
}

// Subscription Buttons
document.getElementById("basic-plan-btn").addEventListener("click", () => {
    openModal("Basic Plan", "Ideal for single service booking.", ["Access to basic services", "Priority support"]);
});
document.getElementById("standard-plan-btn").addEventListener("click", () => {
    openModal("Standard Plan", "Includes basic services and priority support.", ["Access to basic services", "Priority support", "Faster response time"]);
});
document.getElementById("premium-plan-btn").addEventListener("click", () => {
    openModal("Premium Plan", "Includes all standard services and premium support.", ["Access to premium services", "Priority support", "24/7 availability", "Personalized support"]);
});
document.getElementById("luxury-plan-btn").addEventListener("click", () => {
    openModal("Luxury Plan", "Includes all services and luxury support.", ["All premium services", "Dedicated support", "Exclusive deals", "VIP treatment"]);
});

// Close Subscription Modal
document.getElementById("subscription-close").addEventListener("click", () => {
    document.getElementById("subscription-modal").style.display = "none";
});

window.onclick = function(event) {
    const modal = document.getElementById("subscription-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// In scripts.js

// Example: Subscribe to the selected plan
function handleSubscription(plan) {
    alert(`You have successfully subscribed to the ${plan} Plan!`);
    window.location.href = "subscribe-page.html"; // Redirect to confirmation page
}

// Attach event listeners to buttons on each plan page
document.querySelector('#subscribe-btn-basic').addEventListener('click', function() {
    handleSubscription("Basic");
});
document.querySelector('#subscribe-btn-standard').addEventListener('click', function() {
    handleSubscription("Standard");
});
document.querySelector('#subscribe-btn-premium').addEventListener('click', function() {
    handleSubscription("Premium");
});
document.querySelector('#subscribe-btn-luxury').addEventListener('click', function() {
    handleSubscription("Luxury");
});
