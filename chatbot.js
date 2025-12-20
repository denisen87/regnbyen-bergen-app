const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

const knowledge = [
  {
    keywords: ["hei", "hallo", "god dag"],
    answer: "Hei! Jeg er Regnbyen-chatboten 🌧️"
  },
  {
    keywords: ["paraply", "regn"],
    answer: "Ta med paraply hvis det er mer enn 3–4 mm nedbør."
  }
];

function getAnswer(userText) {
  const text = userText.toLowerCase();

  for (const item of knowledge) {
    for (const keyword of item.keywords) {
      if (text.includes(keyword)) {
        return item.answer;
      }
    }
  }

  return "Det vet jeg dessverre ikke ennå 🙂";
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.style.marginBottom = "8px";
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "Du");
  chatInput.value = "";

  const svar = getAnswer(text);

  setTimeout(() => addMessage(svar, "Stig 🤖"), 400);
});
