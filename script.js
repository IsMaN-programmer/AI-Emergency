document.addEventListener("DOMContentLoaded", function () {
  const tutorialBtn = document.getElementById("tutorial-btn");
  const newsBtn = document.getElementById("news-btn");
  const home = document.getElementById("home");
  const tutorial = document.getElementById("tutorial");
  const news = document.getElementById("news");

  newsBtn.addEventListener("click", function () {
    home.style.display = "none";
    tutorial.style.display = "none";
    news.style.display = "block";
  });
    tutorialBtn.addEventListener("click", function () {
    home.style.display = "none";
    tutorial.style.display = "block";
    news.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = "none";

    window.sendMessage = function () {
        event.preventDefault();
        const userText = userInput.value.trim().toLowerCase();
        if (!userText) return;
        chatBox.style.display = "block";

        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user");
        userMessage.innerHTML = `<strong>You:</strong> ${userText}`;
        chatBox.appendChild(userMessage);

        setTimeout(() => {
            userMessage.classList.add("show");
        }, 100);

        // Ответы на болезни
        const responses = {
            живот: "🔹Попробуй теплую воду или слабый чай. Избегай жирного, острого и тяжелой пищи.<br>🔹Ляг, расслабься и попробуй согреть живот теплым полотенцем.",
            голова: "🔹Попробуй попить воды, так как обезвоживание часто вызывает головную боль.<br>🔹Попробуй лечь в темной комнате и расслабиться.",
            температура:
                "🔹Попробуй попить жидкость - вода, чай, бульон помогают предотвратить обезвоживание.<br>🔹Отдохни и дай организму время восстановиться.",
            грипп: "🔹Отдохните и дайте организму возможность восстановиться.<br>🔹Попейте чай с лимоном, с медом, или же травяные настои которые помогут снять воспаление."
        };

        let responseText = "Я пока не понимаю этот запрос 🤖";
        for (const keyword in responses) {
            if (userText.includes(keyword)) {
                responseText = responses[keyword];
                break;
            }
        }

        const aiMessage = document.createElement("div");
        aiMessage.classList.add("message", "ai");
        aiMessage.innerHTML = `<strong>AI:</strong> ${responseText}`;
        chatBox.appendChild(aiMessage);

        setTimeout(() => {
            aiMessage.classList.add("show");
        }, 300);
        userInput.value = "";
        userInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu li a"); // Получаем все ссылки внутри меню

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        
        // Меняем иконку
        menuBtn.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
    });

    // Закрытие меню после клика на ссылку **только на мобильных устройствах**
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) { // Проверяем ширину экрана
                menu.classList.remove("active");
                menu.style.display = "none";
                menuBtn.innerHTML = "☰"; // Возвращаем бургер-иконку
            }
        });
    });
});

