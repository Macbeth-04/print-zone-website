// JavaScript (script.js)

// Simulate a function to handle image uploads
document.getElementById("uploadButton").addEventListener("click", function () {
    // You can add your image upload logic here
    alert("Image uploaded successfully!");
});

// Simulate displaying customer feedback
const feedbackSection = document.getElementById("feedback");

// Sample customer feedback data
const customerFeedback = [
    {
        name: "John Doe",
        feedback: "Great service and fast printing!",
    },
    {
        name: "Jane Smith",
        feedback: "Print Zone is my go-to for all printing needs.",
    },
    // Add more feedback entries as needed
];

// Display customer feedback dynamically
customerFeedback.forEach((feedback) => {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.classList.add("feedback-item");

    const nameElement = document.createElement("h3");
    nameElement.textContent = feedback.name;

    const feedbackTextElement = document.createElement("p");
    feedbackTextElement.textContent = feedback.feedback;

    feedbackDiv.appendChild(nameElement);
    feedbackDiv.appendChild(feedbackTextElement);

    feedbackSection.appendChild(feedbackDiv);
});
