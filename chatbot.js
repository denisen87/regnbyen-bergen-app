const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

const knowledge = [
  {
    keywords: ["hei", "hallo", "god dag", "hey", "hi", "hvem er du", "hvem snakker eg med?", "hvem der?"  ],
    answer: "Hei! Jeg er Regnbyen-chatboten 🌧️"
  },
  {
    keywords: ["paraply", "regn", "uvær", "vær", "nedbør"],
    answer: "Ta med paraply hvis det er mer enn 3–4 mm nedbør."
  },
  { keywords: ["åpningstider", "når er dere åpne", "når har dere åpent", "åpent"],
    answer: "Regnbyen er åpen fra 10:00 til 18:00 alle dager."
  },
  { keywords: ["bil", "biler", "kjøretøy", "transport"],
    answer: "Du kan parkere på Regnbyen."
  },
  { keywords: ["klær", "tøy", "antrekk", "påkledning"],
    answer: "Vi anbefaler vanntette klær og sko."
  },
  { keywords: ["aktiviteter", "ting å gjøre", "underholdning", "moro"],     
    answer: "Vi har mange aktiviteter, inkludert regnkunstverksted og vanntesting."
  },
  { keywords: ["kontakt", "kontaktinfo", "telefonnummer", "e-post"],
    answer: "Du kan kontakte oss på telefon 123-456-789 eller e-post kontakt@regnbyen.no"
  },
  { keywords: ["python", "programmering", "kode", "koding"],
    answer: "Python er et flott språk for nybegynnere og eksperter alike!"
  },
  { keywords: ["chatbot", "bot", "robot", "AI"],
    answer: "Jeg er en enkel chatbot laget for å hjelpe deg med informasjon om Regnbyen."
  },
  { keywords: ["om oss", "hvem er dere", "historie", "bakgrunn"],
    answer: "Regnbyen er et senter dedikert til å utforske og feire regn og vannets rolle i våre liv."
  },
  { keywords: ["hus", "bygninger", "arkitektur"],
    answer: "Våre bygninger er designet for å tåle og omfavne regn."
  },
  { keywords: ["sosiale arrangementer", "events", "arrangementer", "sosialt"],
    answer: "Vi arrangerer jevnlig sosiale arrangementer som regnfestivaler og workshops."
  },
  { keywords: ["kontakt", "kontaktinformasjon", "telefon", "epost"],
    answer: "Du kan nå oss på telefon 123-456-789 eller e-post kontakt@regnbyen.no"
  },
  { keywords: ["hva kan jeg gjøre her", "hva tilbyr dere", "hva skjer"],
    answer: "Regnbyen tilbyr en rekke aktiviteter, utstillinger og arrangementer relatert til regn og vann."
  },
  { keywords: ["hvor ligger dere", "adresse", "lokasjon"],
    answer: "Regnbyen ligger i Bergen sentrum, nær Bryggen."
  },
  { keywords: ["mat", "restaurant", "kafe", "spise"],
    answer: "Vi har en kafé som serverer deilige retter og drikker, perfekt for en regnfull dag."
  },
  { keywords: ["butikk", "souvenirer", "gaver"],
    answer: "Vår butikk tilbyr unike regnrelaterte suvenirer og gaver."
  },
  { keywords: ["billetter", "inngang", "pris"],
    answer: "Inngang til Regnbyen er gratis for alle besøkende."
  },
  { keywords: ["omvisning", "tur", "guide"],
    answer: "Vi tilbyr guidede omvisninger som gir innsikt i våre utstillinger og aktiviteter."
  },
  { keywords: ["frivillig", "volontør", "hjelpe til"],
    answer: "Vi setter pris på frivillige! Kontakt oss for å finne ut hvordan du kan bidra."
  },
  { keywords: ["skole", "utdanning", "skolebesøk"],
    answer: "Vi tilbyr spesialtilpassede skolebesøk og utdanningsprogrammer."
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
