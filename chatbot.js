const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

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

  let svar = "Det vet jeg dessverre ikke ennå 🙂";

  if (text.toLowerCase().includes("hei")) {
    svar = "Hei! Jeg er Regnbyen-chatboten 🌧️";
  }

  setTimeout(() => addMessage(svar, "Stig 🤖"), 400);
});
