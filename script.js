document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = "none";

    window.sendMessage = function () {
        event.preventDefault();
        const userText = userInput.value.trim();
        if (!userText) return;
        chatBox.style.display = "block";

        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user");
        userMessage.innerHTML = `<strong>You:</strong> ${userText}`;
        chatBox.appendChild(userMessage);

        setTimeout(() => {
            userMessage.classList.add("show");
        }, 100);

        // Заранее заданные ответы
        const responses = {
            привет: "Привет!",
            hello: "Hi!",
            salom: "Aleykum asalom",
            "как дела": "Хорошо - Как я могу вам помочь?!",
            "how are you": "Fine Thanks - How can I help you?!",
            "qanday san": "Yaxshi raxmat - Qanday sizga yordam beray?!",
            "какая работа у тебя": "Отвечать на твои вопросы 😊",
            "what is your job": "Reply your quesitons 😊",
            "sening vazifang nima": "Sizga javoblar bilan yordam berish 😊",
            пока: "Пока! Всего хорошого!",
            "что делать если у меня болит живот":
                "🔹Попробуй теплую воду или слабый чай. Избегай жирного, острого и тяжелой пищи.<br>🔹Ляг, расслабься и попробуй согреть живот теплым полотенцем.<br>🔹Если боль вызвана газами или спазмами, легкий массаж живота или спокойная прогулка могут помочь.",
            "что делать если у меня болит голова":
                "🔹Попробуй попить воды так как обезвоживание часто вызывает головную боль.<br>🔹Попробуй лечь в темной комнате и расслабиться.<br>🔹 Свежий воздух во время прогулки или проветривание комнаты могут помочь.",
            "что делать если у меня есть температура":
                "🔹Попробуй попить жидкость - вода, чай, бульон помогают предотвратить обезвоживание.<br>🔹Отдохни и дай организму время восстановиться, избегай физических нагрузок.<br>🔹Если температура высокая, можно приложить прохладный компресс на лоб или принять теплый душ.",
            "что делать если я заболел грипом":
                "🔹Отдохните и дайте организму возможность восстановиться.<br>🔹Попейте чай с лимоном, с медом, или же травяные настои которые помогут снять воспаление.<br>🔹Использование таких веществ при полоскании как соль, сода, ромашка помогут при боли в горле.",
            "qorin og'rig'ida nima qilish kerak":
                "🔹 Iliq suv yoki engil choy iching. Yog'li, achchiq va og'ir ovqatlardan saqlaning.<br>🔹 Yotib, dam oling va qoringa iliq sochiq qo'yib isitishga harakat qiling.<br>🔹 Agar og'riq gazlar yoki spazmlar sabab bo'lsa, yengil qorin massaji yoki sokin sayr foydali bo'lishi mumkin.",
            "bosh og'rig'ida nima qilish kerak":
                "🔹Suv ichishga harakat qiling, chunki suvsizlanish ko'pincha bosh og'rig'ini keltirib chiqaradi.<br>🔹 Qorong'i xonada yotib, dam oling.<br>🔹 Tashqarida sayr qilish yoki xonani shamollatish yordam berishi mumkin.",
            "harorat ko'tarilganda nima qilish kerak":
                "🔹Suv, choy, sho'rva iching — bu suvsizlanishning oldini olishga yordam beradi.<br>🔹 Dam oling va organizmga tiklanish uchun vaqt bering, jismoniy zo'riqishlardan saqlaning.<br>🔹 Agar harorat juda yuqori bo'lsa, peshonaga sovuq kompress qo'ying yoki iliq dush qabul qiling.",
            "gripp bilan kasallanganda nima qilish kerak":
                "🔹 Dam oling va organizmga tiklanish uchun vaqt bering.<br>🔹 Limonli choy, asal yoki o't damlamalarini iching, ular yallig'lanishni kamaytirishga yordam beradi.<br>🔹 Tuz, soda, romashka bilan chayish tomoq og'rig'ini yengillashtirishi mumkin."
        };

        const aiMessage = document.createElement("div");
        aiMessage.classList.add("message", "ai");
        aiMessage.innerHTML = `<strong>AI:</strong> ${responses[userText.toLowerCase()] || "Я пока не понимаю этот запрос 🤖"}`;
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
