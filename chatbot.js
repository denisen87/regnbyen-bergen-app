const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

const knowledge = [
  {
    keywords: ["hei", "hallo", "god dag", "hey", "hi", "hvem er du", "hvem snakker eg med?", "hvem der?"  ],
    answer: "Hei! Jeg er Regnbyen-chatboten, Spør meg om regn, klær, hus, bil eller aktiviteter 🌧️"
  },
  {
    keywords: ["paraply", "regn", "uvær", "vær", "nedbør"],
    answer: "Ta med paraply hvis det er mer enn 3–4 mm nedbør, Vil du at jeg skal forklare hva mm betyr?.",
    followUp: "explain_mm"
  },
  { keywords: ["åpningstider", "når er dere åpne", "når har dere åpent", "åpent"],
    answer: "Regnbyen er åpen fra 10:00 til 18:00 alle dager."
  },
  { keywords: ["bil", "biler", "kjøretøy", "transport"],
    answer: "Du kan parkere på Regnbyen."
  },
  { keywords: ["klær", "tøy", "antrekk", "påkledning"],
    answer: "Vi anbefaler vanntette klær og sko, Vil du ha tips til 'billig' eller 'best kvalitet'?.",
    followUp: "clothing_tips"
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
  },
  { keywords: ["tilgjengelighet", "rullestol", "funksjonshemmet"],
    answer: "Regnbyen er fullt tilgjengelig for rullestolbrukere og har fasiliteter for funksjonshemmede."
  },
  { keywords: ["parkering", "bilparkering", "parkere"],
    answer: "Vi har gratis parkering tilgjengelig for våre besøkende."
  },
  { keywords: ["offentlig transport", "buss", "tog", "transport"],
    answer: "Regnbyen er lett tilgjengelig med offentlig transport, inkludert busser og tog."
  },
  { keywords: ["arrangementskalender", "hendelser", "events"],
    answer: "Du kan finne vår arrangementskalender på nettsiden vår for oppdateringer om kommende hendelser."
  },
  { keywords: ["sikkerhet", "trygghet", "sikkerhetsprosedyrer"],
    answer: "Vi prioriterer sikkerheten til våre besøkende og har strenge sikkerhetsprosedyrer på plass."
  },
  { keywords: ["værmelding", "vær", "regnprognose"],
    answer: "Du kan sjekke den siste værmeldingen på vår nettside for å planlegge besøket ditt."
  },
  { keywords: ["gavekort", "gavekort kjøp", "gavekort informasjon"],
    answer: "Du kan kjøpe gavekort på nettsiden vår." 
  },
  {
    keywords: ["medlemskap", "bli medlem", "medlemsfordeler"],
    answer: "Bli medlem i Regnbyen for eksklusive fordeler og oppdateringer!"
  },
  { keywords: ["frakt", "levering", "forsendelse"],
    answer: "Vi tilbyr frakt og levering for varer kjøpt i vår nettbutikk."
  },
  { keywords: ["tilbakemelding", "feedback", "kommentarer"],
    answer: "Vi setter pris på tilbakemeldinger! Vennligst send dine kommentarer til oss via e-post."
  },
  { keywords: ["personvern", "data", "cookies"],
    answer: "Les vår personvernerklæring på nettsiden for informasjon om hvordan vi håndterer data og cookies."
  },
  { keywords: ["karriere", "jobber", "stillinger"],
    answer: "Sjekk vår karriereside for ledige stillinger og muligheter til å jobbe med oss."
  },
  { keywords: ["sponsing", "samarbeid", "partnere"],
    answer: "Vi er alltid åpne for sponsing og samarbeid. Kontakt oss for mer informasjon."
  },
  { keywords: ["nyheter", "oppdateringer", "pressemeldinger"],
    answer: "Hold deg oppdatert med de siste nyhetene og pressemeldingene på vår nettside."
  },
  { keywords: ["FAQ", "ofte stilte spørsmål", "hjelp"],
    answer: "Besøk vår FAQ-side for svar på ofte stilte spørsmål."
  },
  { keywords: ["donasjoner", "støtte", "bidra"],
    answer: "Støtt Regnbyen ved å donere via vår nettside."
  },
  { keywords: ["friluftsområder", "parker", "utendørs"],
    answer: "Utforsk våre vakre friluftsområder og parker rundt Regnbyen."
  },
  { keywords: ["kunstutstillinger", "galleri", "kunst"],
    answer: "Vi har regelmessige kunstutstillinger i vårt galleri, fokusert på regn og vann."
  },
  { keywords: ["workshops", "kurs", "læring"],
    answer: "Delta i våre workshops og kurs for å lære mer om regnrelaterte emner."
  },
  { keywords: ["familieaktiviteter", "barn", "familie"],
    answer: "Regnbyen tilbyr mange familievennlige aktiviteter som barn vil elske!",
    followUp: "activity_type"
  },
{
  keywords: ["matvalg", "vegetarisk", "vegan", "kafé"],
  getAnswer: (text) => {
    if (text.includes("vegetarisk") || (text.includes("vegan") && text.includes("mat"))) {
      return "Vår kafé tilbyr et bredt utvalg av vegetariske og veganske retter.";
    }
    return "Vår kafé tilbyr deilige retter og drikker for alle smaker.";
  }
}
];

/**
 * 2) MINNE / KONTEKST
 * Vi bruker en enkel 'state' for oppfølgingsspørsmål.
 */
let state = {
  mode: null,        // f.eks. "clothes_budget"
  lastTopic: null
};

let history = []; // enkel historikk i minne

/**
 * 3) NORMALISERING AV TEKST
 * - lower case
 * - fjerner tegn
 * - rydder mellomrom
 */
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[!?.,:;()"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * 4) "SMART MATCH": scorer hver knowledge-item basert på antall treff.
 * Returnerer beste match hvis score > 0
 */
function getBestMatch(text) {
  let best = { item: null, score: 0 };

  for (const item of knowledge) {
    let score = 0;
    for (const keyword of item.keywords) {
      const k = normalize(keyword);
      // gi litt høyere score hvis keyword er en frase (inneholder mellomrom)
      const weight = k.includes(" ") ? 2 : 1;

      if (text.includes(k)) score += weight;
    }

    if (score > best.score) best = { item, score };
  }

  return best.score > 0 ? best.item : null;
}

/**
 * 5) HÅNDTER MODUS (oppfølgingsspørsmål)
 */
function handleMode(text) {
  if (state.mode === "explain_mm") {
    state.mode = null;
    if (text.includes("ja")) return "Kort sagt: mm = hvor mye regn som faller. 1 mm ≈ 1 liter per m².";
    if (text.includes("nei")) return "Skjønner! Spør om noe annet når du vil 🙂";
    return "Svar gjerne 'ja' eller 'nei' 🙂";
  }

  if (state.mode === "clothes_budget") {
    state.mode = null;
    if (text.includes("billig")) {
      return "Billig-tips: regnbukse + rimelig skalljakke + ull innerst. Fokus: vanntett og vindtett.";
    }
    if (text.includes("best") || text.includes("kvalitet")) {
      return "Best kvalitet: 3-lags skalljakke (Gore-Tex/tilsvarende), gode sømmer + impregnering. Ull innerst.";
    }
    return "Vil du ha 'billig' eller 'best kvalitet'? 🙂";
  }

  if (state.mode === "activity_type") {
    state.mode = null;
    if (text.includes("inn")) return "Innendørs: VilVite, museum, kino, escape room, kafeer.";
    if (text.includes("ute") || text.includes("utendørs")) return "Utendørs: tur i regntøy, Fløyen/Byfjellene – men sjekk vind + nedbør først.";
    return "Vil du ha 'innendørs' eller 'utendørs'? 🙂";
  }

  return null;
}

/**
 * 6) KOMMANDOER
 */
function handleCommands(text) {
  if (text === "/clear") {
    chatBox.innerHTML = "";
    history = [];
    return "Ryddet chatten ✅";
  }
  if (text === "/history") {
    if (history.length === 0) return "Ingen historikk ennå 🙂";
    return "Historikk:\n- " + history.slice(-6).join("\n- ");
  }
  return null;
}

/**
 * 7) FÅ SVAR
 */
function getAnswer(userText) {
  const text = normalize(userText);

  // Kommandoer først
  const commandAnswer = handleCommands(text);
  if (commandAnswer) return commandAnswer;

  // Hvis vi er i en "modus" (oppfølgingsspørsmål)
  const modeAnswer = handleMode(text);
  if (modeAnswer) return modeAnswer;

  // Finn beste match i knowledge
  const match = getBestMatch(text);
  if (!match) return "Det vet jeg dessverre ikke ennå 🙂 Prøv 'paraply', 'klær' eller 'aktiviteter'.";
  
  state.lastTopic = match.keywords[0];

  // sett follow-up mode hvis finnes
  if (match.followUp) state.mode = match.followUp;

  // støtte for answer som funksjon senere
  if (typeof match.answer === "function") return match.answer(text);

  return match.answer;
}

/**
 * 8) VIS MELDINGER
 */
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.style.marginBottom = "8px";
  msg.innerHTML = `<strong>${sender}:</strong> ${text.replace(/\n/g, "<br>")}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * 9) SEND MELDING
 */
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "Du");
  history.push("Du: " + text);
  chatInput.value = "";

  const svar = getAnswer(text);
  history.push("Stig: " + svar);

  setTimeout(() => addMessage(svar, "Stig 🤖"), 350);
});