document.addEventListener("DOMContentLoaded", function () {
    const userMessageInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const chatBox = document.querySelector(".chat-box");

    sendButton.addEventListener("click", function () {
        const userMessage = userMessageInput.value.trim();

        if (userMessage !== "") {
            // Display user message
            appendMessage("user", userMessage);

            // Simulate a bot response (you can replace this with actual logic)
            setTimeout(function () {
                const botMessage = "Hey , my name is aadi ,How can i help you";
                appendMessage("bot", botMessage);
            }, 1000);

            // Clear the user input field
            userMessageInput.value = "";
        }
    });

    function appendMessage(sender, message) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("chat-message", `${sender}-message`);
        messageContainer.textContent = message;
        chatBox.appendChild(messageContainer);

        // Scroll to the bottom of the chatbox to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
