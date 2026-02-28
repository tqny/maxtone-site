const chatLog = document.getElementById("chatLog");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const voiceBtn = document.getElementById("voiceBtn");
const chips = document.querySelectorAll(".chip");

const AGENT_CONTEXT = {
  services:
    "MaxTone offers practical AI workflow services for GTM, customer, and operations teams: process mapping, agent orchestration, human-in-the-loop guardrails, and measurable pilot execution.",
  availability:
    "Tony is currently open to BDM, CSM, AM, and Program Manager opportunities in Seattle-first B2B tech, with hybrid/remote consideration.",
  experience:
    "Tony brings SaaS and technical sales experience across pipeline ownership, onboarding, expansion, and cross-functional delivery, plus hands-on AI workflow execution.",
  roleFit:
    "Best-fit roles are BDM, CSM, AM, and Program Manager where AI-assisted execution and human judgment both matter.",
  projects:
    "Start with Workout Pyramid for production-shipping proof, then review the three in-build workflows: lead-qual + CRM update, onboarding + escalation, and program risk dashboard.",
  metrics:
    "V1 tracks workflow experiment count, research cadence, and interview conversion outcomes. The next update will publish explicit before/after metrics per project.",
  contact:
    "Contact: mikityuk.tony@gmail.com | LinkedIn: linkedin.com/in/tonymikityuk",
  fallback:
    "I can help with services, availability, experience, role fit, projects, metrics, and contact details.",
};

let speakNextAgentReply = false;

function addMessage(role, text) {
  const item = document.createElement("div");
  item.className = `msg ${role}`;
  item.textContent = text;
  chatLog.appendChild(item);
  chatLog.scrollTop = chatLog.scrollHeight;

  if (role === "agent" && speakNextAgentReply && "speechSynthesis" in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
    speakNextAgentReply = false;
  }
}

function classifyIntent(input) {
  const text = input.toLowerCase();

  if (/(service|offer|help|consult|build|agent workflow)/.test(text)) return "services";
  if (/(available|availability|open to work|hiring|role right now)/.test(text)) return "availability";
  if (/(experience|background|resume|history|worked|career)/.test(text)) return "experience";
  if (/(role|fit|bdm|csm|am|program manager|interested)/.test(text)) return "roleFit";
  if (/(project|workout|portfolio|showcase|proof)/.test(text)) return "projects";
  if (/(metric|dashboard|measure|kpi|result)/.test(text)) return "metrics";
  if (/(contact|email|linkedin|reach)/.test(text)) return "contact";

  return "fallback";
}

async function tryLiveAgent(userText) {
  try {
    const res = await fetch("/api/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.reply || null;
  } catch {
    return null;
  }
}

async function handleSend(rawText) {
  const text = (rawText || chatInput.value || "").trim();
  if (!text) return;

  addMessage("user", text);
  chatInput.value = "";

  const liveReply = await tryLiveAgent(text);
  if (liveReply) {
    addMessage("agent", liveReply);
    return;
  }

  const intent = classifyIntent(text);
  addMessage("agent", AGENT_CONTEXT[intent]);
}

sendBtn.addEventListener("click", () => handleSend());
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleSend();
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => handleSend(chip.dataset.chip));
});

let recognition;
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    speakNextAgentReply = true;
    handleSend(transcript);
  };
}

voiceBtn.addEventListener("click", () => {
  if (!recognition) {
    addMessage("agent", "Voice input is not supported in this browser. Type your question instead.");
    return;
  }
  recognition.start();
});

addMessage(
  "agent",
  "Hi, I am the MaxTone Door Greeter. Ask about services, role fit, projects, availability, or experience."
);
