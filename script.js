const DATA = {
  "BTC-USDT": {
    asia: {
      direction: "SHORT",
      confidence: 76,
      summary: "Institutional and trend-following pressure dominate. Retail dip-buying is present, but insufficient to absorb sell-side momentum.",
      entry: "71,874",
      current: "69,252",
      target: "67,148",
      range: "69,486 – 71,618",
      archetypes: [
        { name: "Institutional", bias: "Sell pressure", pct: 70, note: "Structure-driven reaction to session imbalance." },
        { name: "Algo / HFT", bias: "Momentum short", pct: 100, note: "Fast systems amplify downside when local support weakens." },
        { name: "Trend Followers", bias: "Breakdown continuation", pct: 100, note: "Positioning for a lower-range test." },
        { name: "Smart Money", bias: "Weak support", pct: 10, note: "Limited accumulation near current zone." },
        { name: "Macro / News", bias: "Risk-off tilt", pct: 70, note: "Broader sentiment suppresses long-side conviction." }
      ],
      logs: [
        "1800 agents initialized across 6 archetypes",
        "Institutional cluster increased sell-side conviction after range rejection",
        "Retail cohort attempted dip accumulation near local support",
        "Trend-followers reinforced continuation probability",
        "Aggregate outcome converged to SHORT bias with high conviction"
      ]
    },
    europe: {
      direction: "LONG",
      confidence: 68,
      summary: "European session shows recovery momentum after early absorption. Smart money accumulation and short covering create upward pressure.",
      entry: "68,940",
      current: "69,410",
      target: "70,985",
      range: "68,700 – 71,020",
      archetypes: [
        { name: "Institutional", bias: "Controlled accumulation", pct: 61, note: "Selective bids below prior session midpoint." },
        { name: "Algo / HFT", bias: "Reversal acceleration", pct: 74, note: "Microstructure supports a squeeze upward." },
        { name: "Trend Followers", bias: "Late confirmation", pct: 56, note: "Need breakout confirmation to fully commit." },
        { name: "Smart Money", bias: "Accumulation", pct: 84, note: "Higher activity inside discounted zone." },
        { name: "Macro / News", bias: "Neutral-to-positive", pct: 49, note: "No major external drag during the session." }
      ],
      logs: [
        "Volatility compression detected before Europe open",
        "Accumulation behavior intensified in smart money cohort",
        "Short-side agents reduced conviction after reclaim of local structure",
        "Reversal dynamics propagated across adaptive agents",
        "Aggregate outcome converged to LONG bias with moderate conviction"
      ]
    },
    newyork: {
      direction: "SHORT",
      confidence: 81,
      summary: "New York session amplifies volatility and distribution. Agent consensus shifts toward aggressive downside once liquidity is released.",
      entry: "70,114",
      current: "69,008",
      target: "66,902",
      range: "68,740 – 70,622",
      archetypes: [
        { name: "Institutional", bias: "Distribution", pct: 77, note: "Large players exit strength into liquidity." },
        { name: "Algo / HFT", bias: "Volatility short", pct: 92, note: "Fast systems amplify directional move after expansion." },
        { name: "Trend Followers", bias: "Full downside alignment", pct: 97, note: "Breakdown confirmed by session transfer." },
        { name: "Smart Money", bias: "Low absorption", pct: 18, note: "No meaningful counter-bid near handoff." },
        { name: "Macro / News", bias: "Risk transfer", pct: 73, note: "Session overlap increases stress response." }
      ],
      logs: [
        "Session overlap increased volatility dispersion",
        "Institutional distribution pattern detected near upper session band",
        "Countertrend buyers failed to maintain local support",
        "Downside cascade triggered in fast-reactive cohorts",
        "Aggregate outcome converged to SHORT bias with very high conviction"
      ]
    }
  },
  "ETH-USDT": {
    asia: {
      direction: "LONG",
      confidence: 64,
      summary: "ETH agents show quieter but constructive accumulation. Liquidity conditions support a controlled upward bias.",
      entry: "3,482",
      current: "3,516",
      target: "3,604",
      range: "3,460 – 3,620",
      archetypes: [
        { name: "Institutional", bias: "Bid support", pct: 58, note: "Measured accumulation below local range top." },
        { name: "Algo / HFT", bias: "Neutral-to-long", pct: 52, note: "Reaction speed remains moderate." },
        { name: "Trend Followers", bias: "Awaiting breakout", pct: 44, note: "Need stronger confirmation to expand exposure." },
        { name: "Smart Money", bias: "Accumulation", pct: 81, note: "Steady interest in value zone." },
        { name: "Macro / News", bias: "Neutral", pct: 40, note: "Limited macro interference." }
      ],
      logs: [
        "Cross-agent sentiment remained constructive through Asian liquidity window",
        "Accumulation behavior outpaced distribution in smart money cohort",
        "Directional consensus stabilized in favor of LONG bias"
      ]
    },
    europe: {
      direction: "SHORT",
      confidence: 59,
      summary: "European session shows fading recovery and rotational weakness. Agents expect a pullback before any fresh expansion.",
      entry: "3,544",
      current: "3,521",
      target: "3,441",
      range: "3,430 – 3,566",
      archetypes: [
        { name: "Institutional", bias: "Profit taking", pct: 55, note: "Light distribution into strength." },
        { name: "Algo / HFT", bias: "Short rotation", pct: 61, note: "Selling increases near local inefficiency." },
        { name: "Trend Followers", bias: "Tentative short", pct: 48, note: "Partial alignment only." },
        { name: "Smart Money", bias: "Supportive", pct: 36, note: "Absorption exists but lacks intensity." },
        { name: "Macro / News", bias: "Neutral", pct: 43, note: "No catalyst strong enough to reverse." }
      ],
      logs: [
        "Recovery impulse weakened during European handoff",
        "Fast-reactive cohorts leaned toward mean reversion to lower band",
        "Aggregate outcome converged to SHORT bias with moderate conviction"
      ]
    },
    newyork: {
      direction: "LONG",
      confidence: 72,
      summary: "New York session favors expansion after a successful base. Adaptive agents shift toward continuation once breakout is validated.",
      entry: "3,506",
      current: "3,559",
      target: "3,681",
      range: "3,500 – 3,694",
      archetypes: [
        { name: "Institutional", bias: "Expansion bid", pct: 69, note: "Positioning improves after reclaim of structure." },
        { name: "Algo / HFT", bias: "Breakout acceleration", pct: 78, note: "High reactivity once top range breaks." },
        { name: "Trend Followers", bias: "Full long alignment", pct: 83, note: "Breakout logic now in force." },
        { name: "Smart Money", bias: "Supportive", pct: 64, note: "Earlier accumulation rotates into continuation." },
        { name: "Macro / News", bias: "Constructive", pct: 51, note: "Session backdrop allows momentum trade." }
      ],
      logs: [
        "Breakout validation increased cross-cohort participation",
        "Momentum systems reinforced long continuation path",
        "Aggregate outcome converged to LONG bias with high conviction"
      ]
    }
  },
  "SOL-USDT": {
    asia: {
      direction: "SHORT",
      confidence: 62,
      summary: "SOL shows higher sensitivity to session rotation. Agent behavior points to early downside probing before stabilization.",
      entry: "168.4",
      current: "164.7",
      target: "158.9",
      range: "163.8 – 169.1",
      archetypes: [
        { name: "Institutional", bias: "Reduce risk", pct: 57, note: "Defensive response in higher-beta asset." },
        { name: "Algo / HFT", bias: "Downside probe", pct: 67, note: "Short-term weakness favored." },
        { name: "Trend Followers", bias: "Partial short", pct: 52, note: "Need session acceptance lower." },
        { name: "Smart Money", bias: "Selective support", pct: 31, note: "Some buying interest, not dominant." },
        { name: "Macro / News", bias: "Fragile risk mood", pct: 49, note: "Broader market still cautious." }
      ],
      logs: [
        "Risk-sensitive cohorts reduced upside participation",
        "Adaptive agents favored downside probing into lower band",
        "Aggregate outcome converged to SHORT bias with moderate conviction"
      ]
    },
    europe: {
      direction: "LONG",
      confidence: 66,
      summary: "Europe introduces stronger recovery behavior. Accumulation and momentum agents begin to align on upside continuation.",
      entry: "163.1",
      current: "165.3",
      target: "171.8",
      range: "162.9 – 172.4",
      archetypes: [
        { name: "Institutional", bias: "Re-entry bids", pct: 60, note: "Buy-side returns near discount." },
        { name: "Algo / HFT", bias: "Impulse long", pct: 70, note: "Short-covering boosts move." },
        { name: "Trend Followers", bias: "Confirming breakout", pct: 58, note: "Upside alignment rising." },
        { name: "Smart Money", bias: "Supportive accumulation", pct: 72, note: "Visible value response." },
        { name: "Macro / News", bias: "Neutral", pct: 42, note: "No negative catalyst intrudes." }
      ],
      logs: [
        "Session handoff improved upside participation",
        "Short-covering response propagated into momentum cohort",
        "Aggregate outcome converged to LONG bias with moderate conviction"
      ]
    },
    newyork: {
      direction: "SHORT",
      confidence: 74,
      summary: "New York session increases downside stress. Higher-beta agents react aggressively once volatility widens.",
      entry: "167.2",
      current: "163.9",
      target: "156.7",
      range: "162.8 – 168.1",
      archetypes: [
        { name: "Institutional", bias: "Distribution", pct: 66, note: "Strength used for exit liquidity." },
        { name: "Algo / HFT", bias: "Aggressive short", pct: 84, note: "Fast systems amplify downside extension." },
        { name: "Trend Followers", bias: "Breakdown alignment", pct: 86, note: "Continuation setup active." },
        { name: "Smart Money", bias: "Weak support", pct: 22, note: "Little absorption at current band." },
        { name: "Macro / News", bias: "Risk-off", pct: 63, note: "Beta compression pressure increases." }
      ],
      logs: [
        "Volatility expansion triggered defensive behavior in higher-beta cohorts",
        "Distribution increased during New York overlap window",
        "Aggregate outcome converged to SHORT bias with high conviction"
      ]
    }
  }
};

const PAIRS = ["BTC-USDT", "ETH-USDT", "SOL-USDT"];
const SESSIONS = [
  { id: "asia", label: "Asia" },
  { id: "europe", label: "Europe" },
  { id: "newyork", label: "New York" }
];

let currentPair = "BTC-USDT";
let currentSession = "newyork";

function renderButtons() {
  const pairButtons = document.getElementById("pairButtons");
  const sessionButtons = document.getElementById("sessionButtons");

  pairButtons.innerHTML = "";
  sessionButtons.innerHTML = "";

  PAIRS.forEach(pair => {
    const btn = document.createElement("button");
    btn.className = "choice-btn" + (pair === currentPair ? " active" : "");
    btn.textContent = pair;
    btn.onclick = () => { currentPair = pair; renderButtons(); renderOutput(); };
    pairButtons.appendChild(btn);
  });

  SESSIONS.forEach(session => {
    const btn = document.createElement("button");
    btn.className = "choice-btn" + (session.id === currentSession ? " active" : "");
    btn.textContent = session.label;
    btn.onclick = () => { currentSession = session.id; renderButtons(); renderOutput(); };
    sessionButtons.appendChild(btn);
  });
}

function renderSimFlow(activeCount = 0) {
  const steps = [
    "Initialize current market state",
    "Spawn autonomous agents",
    "Assign personalities and archetypes",
    "Simulate reactions to session context",
    "Aggregate consensus into forecast"
  ];
  const root = document.getElementById("simFlow");
  root.innerHTML = "";
  steps.forEach((step, index) => {
    const row = document.createElement("div");
    row.className = "sim-step";
    row.innerHTML = `<div class="dot ${index < activeCount ? "active" : ""}"></div><span>${step}</span>`;
    root.appendChild(row);
  });
}

function renderOutput() {
  const data = DATA[currentPair][currentSession];
  const sessionLabel = SESSIONS.find(s => s.id === currentSession).label;

  document.getElementById("outputEyebrow").textContent = `${currentPair} • ${sessionLabel} session`;
  document.getElementById("summaryText").textContent = data.summary;

  const badge = document.getElementById("directionBadge");
  badge.className = "direction-badge " + (data.direction === "LONG" ? "up" : "down");
  badge.textContent = `${data.direction} • ${data.confidence}%`;

  const metrics = [
    ["Entry", data.entry],
    ["Current", data.current],
    ["Target", data.target],
    ["Range", data.range]
  ];
  document.getElementById("metricsGrid").innerHTML = metrics.map(([label, value]) => (
    `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`
  )).join("");

  document.getElementById("archetypesList").innerHTML = data.archetypes.map(item => `
    <div class="archetype">
      <div class="archetype-head"><span>${item.name}</span><span>${item.pct}%</span></div>
      <div class="bar"><div style="width:${item.pct}%; background:${data.direction === "LONG" ? "linear-gradient(90deg, #34d399, #22d3ee)" : "linear-gradient(90deg, #fb7185, #e879f9)"}"></div></div>
      <div class="archetype-note"><strong>${item.bias}.</strong> ${item.note}</div>
    </div>
  `).join("");

  document.getElementById("logsList").innerHTML = data.logs.map(log => `<div class="log-card">${log}</div>`).join("");
}

function runSimulation() {
  const button = document.getElementById("runButton");
  button.disabled = true;
  button.textContent = "Running simulation...";
  let step = 0;
  renderSimFlow(0);
  const timer = setInterval(() => {
    step += 1;
    renderSimFlow(step);
    if (step >= 5) {
      clearInterval(timer);
      renderOutput();
      button.disabled = false;
      button.textContent = "Run Simulation";
    }
  }, 350);
}

document.getElementById("runButton").addEventListener("click", runSimulation);
renderButtons();
renderSimFlow(0);
renderOutput();