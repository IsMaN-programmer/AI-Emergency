document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    window.sendMessage = function () {
        const userText = userInput.value.trim();
        if (!userText) return;

        // Добавляем сообщение пользователя
        const userMessage = `<div class="message user"><strong>You:</strong> ${userText}</div>`;
        chatBox.innerHTML += userMessage;

        // Имитация ответа AI (замени на реальный API)
        fetch(`https://api.example.com/medical-ai?query=${userText}`)
            .then(response => response.json())
            .then(data => {
                const aiMessage = `<div class="message ai"><strong>AI:</strong> ${data.answer}</div>`;
                chatBox.innerHTML += aiMessage;
                chatBox.scrollTop = chatBox.scrollHeight;
            })
            .catch(() => {
                const aiMessage = `<div class="message ai"><strong>AI:</strong> Sorry, I couldn't process your request.</div>`;
                chatBox.innerHTML += aiMessage;
            });

        userInput.value = "";
    };
});
