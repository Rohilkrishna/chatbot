// Function to add a bot message to the chat
function addBotMessage(message) {
    const chatContent = document.getElementById("chat-content");
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = message;
    chatContent.appendChild(botMessage);
}

// Function to handle user input
function handleUserInput() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value.trim().toLowerCase();

    if (userMessage !== "") {
        addBotMessage(`You asked: ${userMessage}`);

        // Check for specific articles and provide responses
        if (userMessage === "article 14") {
            addBotMessage("Article 14: Equality before law.");
        } else if (userMessage === "article 15") {
            addBotMessage("Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.");
        } else if (userMessage === "article 21") {
            addBotMessage("Article 21: Protection of life and personal liberty.");
        } else if (userMessage === "article 44") {
            addBotMessage("Article 44: Uniform civil code for the citizens.");
        }
        else if (userMessage === "article 33") {
            addBotMessage("Article 33: Abolision or limit of fundmental rights of members of parliament");
        }
        else {
            addBotMessage("I'm sorry, I don't have information on that article.");
        }

        userInput.value = ""; // Clear the input field
    }
}

// Handle user input when the "Submit" button is clicked
document.getElementById("submit-button").addEventListener("click", handleUserInput);

// Handle user input when Enter key is pressed
document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
