const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggle.textContent = next === "dark" ? "🌙" : "☀️";
});

// Load saved theme
const saved = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", saved);
themeToggle.textContent = saved === "dark" ? "🌙" : "☀️";

/* ===== SCROLL ACTIVE NAV ===== */
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) current = section.getAttribute("id");
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--text-primary)" : "";
  });
});
/* ===== HAMBURGER ===== */
function toggleMenu() {
  const links = document.querySelector(".nav-links");
  const open = links.style.display === "flex";
  links.style.display = open ? "none" : "flex";
  links.style.flexDirection = "column";
  links.style.position = "absolute";
  links.style.top = "64px";
  links.style.left = "0";
  links.style.right = "0";
  links.style.background = "var(--nav-bg)";
  links.style.padding = "1.5rem 2rem";
  links.style.borderBottom = "1px solid var(--nav-border)";
  links.style.gap = "1.25rem";
  links.style.backdropFilter = "blur(20px)";
  if (open) links.removeAttribute("style");
}
/* ===== CONTACT FORM ===== */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "✓ Message sent!";
  btn.style.background = "#16a34a";
  setTimeout(() => {
    btn.innerHTML = "Send Message &#x2192;";
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}
/* ===== STAGGER DELAYS ===== */
document.querySelectorAll(".projects-grid .project-card").forEach((c, i) => {
  c.style.transitionDelay = i * 0.07 + "s";
});
document.querySelectorAll(".skills-grid .skill-group").forEach((g, i) => {
  g.style.transitionDelay = i * 0.05 + "s";
});
document.querySelectorAll(".certs-grid .cert-card").forEach((c, i) => {
  c.style.transitionDelay = i * 0.04 + "s";
});

const now = new Date();
const currentYear = 2026; // Setting to 2026 to match the timetable data
const currentMonthName = now.toLocaleString("en-US", { month: "long" });
const currentDay = now.getDate();

const allColumns = [
  // January
  { month: "January", date: 10 },
  { month: "January", date: 11 },
  { month: "January", date: 17 },
  { month: "January", date: 18 },
  { month: "January", date: 24 },
  { month: "January", date: 25 },
  { month: "January", date: 31 },
  // February
  { month: "February", date: 1 },
  { month: "February", date: 7 },
  { month: "February", date: 8 },
  { month: "February", date: 14 },
  { month: "February", date: 15 },
  { month: "February", date: 21, exp: { content: "1", span: 2 } },
  { month: "February", date: 22 },
  { month: "February", date: 28, exp: { content: "2", span: 2 } },
  // March
  { month: "March", date: 1 },
  { month: "March", date: 7, exp: { content: "3", span: 2 } },
  { month: "March", date: 8 },
  { month: "March", date: 14 },
  { month: "March", date: 15 },
  { month: "March", date: 21 },
  { month: "March", date: 22 },
  // April Gap
  { month: "April", isGap: true },
  // May
  { month: "May", date: 2 },
  { month: "May", date: 3 },
  { month: "May", date: 9 },
  { month: "May", date: 10 },
  { month: "May", date: 16, exp: { content: "4", span: 2 } },
  { month: "May", date: 17 },
  { month: "May", date: 23, exp: { content: "5", span: 2 } },
  { month: "May", date: 24 },
  { month: "May", date: 30, exp: { content: "6", span: 2 } },
  { month: "May", date: 31 },
  // June
  { month: "June", date: 6, exp: { content: "7", span: 2 } },
  { month: "June", date: 7 },
  { month: "June", date: 13 },
  { month: "June", date: 14 },
  { month: "June", date: 20, exp: { content: "8", span: 2 } },
  { month: "June", date: 21 },
  { month: "June", date: 27 },
  { month: "June", date: 28 },
  // July
  { month: "July", date: 4, exp: { content: "9", span: 2 } },
  { month: "July", date: 5 },
  { month: "July", date: 11 },
  { month: "July", date: 12 },
  {
    month: "July",
    date: 18,
    exp: { content: '<span style="font-size:0.9rem">10</span>', span: 1 },
  },
  {
    month: "July",
    date: 19,
    exp: { content: '<span class="vertical-text">အာဇာနည်နေ့</span>', span: 1 },
  },
  { month: "July", date: 25 },
  { month: "July", date: 26 },
  // August
  { month: "August", date: 1, exp: { content: "11", span: 2 } },
  { month: "August", date: 2 },
  { month: "August", date: 8 },
  { month: "August", date: 9 },
  { month: "August", date: 15, exp: { content: "12", span: 2 } },
  { month: "August", date: 16 },
  {
    month: "August",
    date: 22,
    exp: { content: '<span class="makeup-text">Make up</span>', span: 2 },
  },
  { month: "August", date: 23 },
  {
    month: "August",
    date: 29,
    exp: { content: '<span class="makeup-text">Make up</span>', span: 2 },
  },
  { month: "August", date: 30 },
  // September
  {
    month: "September",
    date: 5,
    exp: { content: '<span class="makeup-text">Make up</span>', span: 2 },
  },
  { month: "September", date: 6 },
  { month: "September", date: 12 },
  { month: "September", date: 13 },
  { month: "September", date: 19 },
  { month: "September", date: 20 },
  { month: "September", date: 26 },
  { month: "September", date: 27 },
];

const monthRow = document.getElementById("month-row");
const dateRow = document.getElementById("date-row");
const experimentRow = document.getElementById("experiment-row");

const monthGroups = [];
allColumns.forEach((col) => {
  const last = monthGroups[monthGroups.length - 1];
  if (last && last.month === col.month) {
    last.count++;
  } else {
    monthGroups.push({ month: col.month, count: 1 });
  }
});

monthGroups.forEach((group) => {
  const th = document.createElement("th");
  th.className =
    "month-header" + (group.month === "April" ? " april-column" : "");
  th.colSpan = group.count;
  th.textContent = group.month;
  monthRow.appendChild(th);
});

let skipExp = 0;
allColumns.forEach((col, idx) => {
  // Check if this column matches today's date (in 2026 context)
  const isToday = col.month === currentMonthName && col.date === currentDay;

  // Date Row
  const tdDate = document.createElement("td");
  if (col.isGap) {
    tdDate.className = "april-column";
  } else {
    tdDate.textContent = col.date;
    if (isToday) tdDate.classList.add("current-highlight", "date-cell");
  }
  dateRow.appendChild(tdDate);

  // Experiment Row
  if (skipExp > 0) {
    skipExp--;
  } else {
    const tdExp = document.createElement("td");
    if (col.isGap) {
      tdExp.className = "april-column";
    } else if (col.exp) {
      tdExp.colSpan = col.exp.span;
      tdExp.innerHTML = col.exp.content;
      // If the experiment covers today, highlight it
      // We check if today falls within the span starting from this column
      let expCoversToday = false;
      for (let i = 0; i < col.exp.span; i++) {
        const futureCol = allColumns[idx + i];
        if (
          futureCol &&
          futureCol.month === currentMonthName &&
          futureCol.date === currentDay
        ) {
          expCoversToday = true;
          break;
        }
      }
      if (expCoversToday) tdExp.classList.add("current-highlight");
      skipExp = col.exp.span - 1;
    } else {
      // Empty experiment cell, still check if it's today
      if (isToday) tdExp.classList.add("current-highlight");
    }
    experimentRow.appendChild(tdExp);
  }
});

let is24Hour = true;
const clockElement = document.getElementById("digital-clock");
const formatLabel = document.getElementById("format-label");
const dateElement = document.getElementById("today-date");
const dayElement = document.getElementById("day-name");

function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
  }
  hours = String(hours).padStart(2, "0");

  clockElement.textContent = `${hours}:${minutes}:${seconds}${ampm}`;

  // Date & Day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dayElement.textContent = days[now.getDay()];
  dateElement.textContent = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

clockElement.addEventListener("click", () => {
  is24Hour = !is24Hour;
  formatLabel.textContent = is24Hour ? "24-Hour Format" : "12-Hour Format";
  updateClock();
});

setInterval(updateClock, 1000);
updateClock();

// --- WEATHER ICON MAPPING ---
function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code === 51 || code === 53 || code === 55) return "🌧️";
  if (code === 61 || code === 63 || code === 65) return "🌧️";
  if (code === 71 || code === 73 || code === 75) return "❄️";
  if (code === 80 || code === 81 || code === 82) return "🌧️";
  if (code === 95 || code === 96 || code === 99) return "⛈️";
  return "⛅";
}

function getWeatherDescription(code) {
  const desc = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Foggy",
    51: "Drizzle",
    53: "Drizzle",
    55: "Drizzle",
    61: "Rainy",
    63: "Rainy",
    65: "Heavy Rain",
    71: "Snowy",
    73: "Snowy",
    75: "Heavy Snow",
    80: "Rain Showers",
    81: "Rain Showers",
    82: "Heavy Showers",
    95: "Thunderstorm",
    96: "Thunderstorm",
    99: "Thunderstorm",
  };
  return desc[code] || "Cloudy";
}

// --- WEATHER DASHBOARD ---
async function getW() {
  try {
    const lat = 16.8661,
      lon = 96.1951;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset,windspeed_10m_max&hourly=relative_humidity_2m&timezone=auto&past_days=0`;
    const res = await fetch(url);
    const d = await res.json();

    // Current Day (Index 0)
    const todayIdx = 0;
    const tMax = Math.round(d.daily.temperature_2m_max[todayIdx]);
    const tMin = Math.round(d.daily.temperature_2m_min[todayIdx]);
    const tCur = Math.round((tMax + tMin) / 2);
    const wCode = d.daily.weather_code[todayIdx];
    const hStart = todayIdx * 24;
    const avgHum = Math.round(
      d.hourly.relative_humidity_2m
        .slice(hStart, hStart + 24)
        .reduce((a, b) => a + b) / 24,
    );

    document.getElementById("main-weather-icon").textContent =
      getWeatherIcon(wCode);
    document.getElementById("current-temp").textContent = tCur;
    document.getElementById("weather-condition").textContent =
      getWeatherDescription(wCode);
    document.getElementById("temp-high").textContent = tMax;
    document.getElementById("temp-low").textContent = tMin;

    // Metrics
    const metrics = [
      { label: "Humidity", val: avgHum, unit: "%" },
      {
        label: "Wind",
        val: Math.round(d.daily.windspeed_10m_max[todayIdx]),
        unit: "km/h",
      },
      { label: "UV Index", val: d.daily.uv_index_max[todayIdx], unit: "" },
      {
        label: "Rain Prob",
        val: d.daily.precipitation_probability_max[todayIdx],
        unit: "%",
      },
      {
        label: "Sunrise",
        val: d.daily.sunrise[todayIdx].split("T")[1],
        unit: "",
      },
      {
        label: "Sunset",
        val: d.daily.sunset[todayIdx].split("T")[1],
        unit: "",
      },
    ];

    let mHTML = "";
    metrics.forEach((m) => {
      mHTML += `<div class="metric-item"><div class="metric-label">${m.label}</div><div class="metric-val">${m.val}<span class="metric-unit">${m.unit}</span></div></div>`;
    });
    document.getElementById("weather-metrics").innerHTML = mHTML;

    // Next 2 Days
    const fBoard = document.getElementById("forecast-2-days");
    fBoard.innerHTML = "";
    for (let i = 1; i <= 4; i++) {
      const date = new Date(d.daily.time[i]);
      const day =
        i === 1
          ? "Tomorrow"
          : date.toLocaleDateString("en-US", { weekday: "long" });
      const icon = getWeatherIcon(d.daily.weather_code[i]);
      const high = Math.round(d.daily.temperature_2m_max[i]);
      const low = Math.round(d.daily.temperature_2m_min[i]);

      fBoard.innerHTML += `
                    <div class="forecast-card">
                        <div>
                            <div class="forecast-day">${day}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${getWeatherDescription(d.daily.weather_code[i])}</div>
                        </div>
                        <div class="forecast-icon">${icon}</div>
                        <div class="forecast-temps">
                            <div class="forecast-high">${high}°</div>
                            <div class="forecast-low">${low}°</div>
                        </div>
                    </div>`;
    }
  } catch (e) {
    console.error(e);
  }
}
getW();

// --- RESOURCE CENTER MODAL LOGIC ---
document.querySelectorAll(".folder-card").forEach((card) => {
  const openBtn = card.querySelector(".folder-expand-btn");

  const panel = card.querySelector(".folder-expand-panel");

  const closeBtn = card.querySelector(".folder-close-btn");

  if (!openBtn || !panel || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    /* close others */
    document.querySelectorAll(".folder-expand-panel").forEach((p) => {
      if (p !== panel) {
        p.classList.remove("active");
      }
    });

    panel.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.remove("active");
  });
});

/* =========================
   RESOURCE VIEWER MODAL
========================= */

// Mock data for attachments - you can customize this
const resourceData = {
  "Bot 1101-1106": [
    { name: "Lecture_Notes.pdf", size: "2.4 MB", icon: "📄" },
    { name: "Practical_Guide.pdf", size: "1.8 MB", icon: "📄" },
    { name: "Diagram_01.png", size: "456 KB", icon: "🖼️" },
    { name: "Diagram_02.png", size: "523 KB", icon: "🖼️" },
    { name: "Study_Materials.pdf", size: "3.1 MB", icon: "📄" },
    { name: "Reference_Images.zip", size: "5.2 MB", icon: "📦" },
  ],
  "Bot 1102-1107": [
    { name: "Chapter_1.pdf", size: "1.9 MB", icon: "📄" },
    { name: "Chapter_2.pdf", size: "2.1 MB", icon: "📄" },
    { name: "Lab_Photos.zip", size: "8.5 MB", icon: "📦" },
    { name: "Experiment_Results.pdf", size: "1.2 MB", icon: "📄" },
  ],
  "Zool 1001-1002": [
    { name: "Introduction.pdf", size: "1.5 MB", icon: "📄" },
    { name: "Species_Guide.pdf", size: "4.3 MB", icon: "📄" },
    { name: "Photo_Collection.zip", size: "12.8 MB", icon: "📦" },
    { name: "Classification_Chart.png", size: "892 KB", icon: "🖼️" },
  ],
  English: [
    { name: "Grammar_Rules.pdf", size: "2.0 MB", icon: "📄" },
    { name: "Vocabulary_List.pdf", size: "1.3 MB", icon: "📄" },
    { name: "Writing_Examples.pdf", size: "2.8 MB", icon: "📄" },
    { name: "Audio_Lessons.zip", size: "15.2 MB", icon: "📦" },
  ],

  "Bot 2101-2106 (Pract.)": {
    "Practical (1) Taxonomic Description/Habit": [
      {
        name: "Taxonomic_Description/Habit.pdf",
        pageCount: 2,
        fileSize: "534 KB",
        type: "PDF",
        thumbnail: "./resources/botany/bot_2101-2106/practical(1)/thumb.jpg",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(1)/bot-2101-2106-practical-1-Taxonomic-Description(or)Habit.pdf",
      },

      {
        name: "Bot_2101-2106-P1-Content_Ref.-1.jpg",
        fileSize: "92 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/botany/bot_2101-2106/practical(1)/Bot_2101-2106-P1-Content_Ref.-1.jpg",
      },

      {
        name: "Bot_2101-2106-P1-Content_Ref.-2(not_complete).jpg",
        fileSize: "359 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(1)/Bot_2101-2106-P1-Content_Ref.-2(not_complete).jpg",
      },

      {
        name: "Bot_2101-2106-P1-Diagram_Ref.-1.png",
        fileSize: "1.9 MB",
        type: "PNG",
        source: "Phyo Thet Paing (Modified By Aung Phyo Paing)",
        url: "./resources/botany/bot_2101-2106/practical(1)/Bot_2101-2106-P1-Diagram_Ref.-1.png",
      },
    ],

    "Practical (2) Leaves": [
      {
        name: "Leaves.pdf",
        pageCount: 2,
        fileSize: "537 KB",
        type: "PDF",
        thumbnail: "./resources/botany/bot_2101-2106/practical(2)/thumb.jpg",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(2)/bot-2101-2106-practical-2-leaves.pdf",
      },

      {
        name: "Bot_2101-2106-P2-Content_Ref.-1.jpg",
        fileSize: "359 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(2)/Bot_2101-2106-P2-Content_Ref.-1.jpg",
      },

      {
        name: "Bot_2101-2106-P2-Diagram_Ref.-1.jpg",
        fileSize: "440 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(2)/Bot_2101-2106-P2-Diagram_Ref.-1.jpg",
      },
      {
        name: "Bot_2101-2106-P2-Diagram_Ref.-2.jpg",
        fileSize: "415 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(2)/Bot_2101-2106-P2-Diagram_Ref.-2.jpg",
      },
    ],

    "Practical (3) Inflorescences": [
      {
        name: "Inflorescences.pdf",
        pageCount: 2,
        fileSize: "530 KB",
        type: "PDF",
        thumbnail: "./resources/botany/bot_2101-2106/practical(3)/thumb.jpg",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(3)/bot-2101-2106-practical-3-inflorescences.pdf",
      },

      {
        name: "Bot_2101-2106-P3-Content_Ref.-1.jpg",
        fileSize: "318 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(3)/Bot_2101-2106-P3-Content_Ref.-1.jpg",
      },

      {
        name: "Bot_2101-2106-P3-Diagram_Ref.-1.jpg",
        fileSize: "493 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(3)/Bot_2101-2106-P3-Diagram_Ref.-1.jpg",
      },
      {
        name: "Bot_2101-2106-P3-Diagram_Ref.-2.jpg",
        fileSize: "563 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(3)/Bot_2101-2106-P3-Diagram_Ref.-2.jpg",
      },
    ],

    "Practical (4) Flower & Calyx": [
      {
        name: "Flower_&_Calyx.pdf",
        pageCount: 2,
        fileSize: "759 KB",
        type: "PDF",
        thumbnail: "./resources/botany/bot_2101-2106/practical(4)/thumb.jpg",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(4)/bot-2101-2106-practical-4-flower_&_calyx.pdf",
      },

      {
        name: "Bot_2101-2106-P4-Content_Ref.-1.jpg",
        fileSize: "318 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(4)/Bot_2101-2106-P4-Content_Ref.-1.jpg",
      },

      {
        name: "Bot_2101-2106-P4-Diagram_Ref.-1.jpg",
        fileSize: "307 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(4)/Bot_2101-2106-P4-Diagram_Ref.-1.jpg",
      },
      {
        name: "Bot_2101-2106-P4-Diagram_Ref.-2.jpg",
        fileSize: "288 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(4)/Bot_2101-2106-P4-Diagram_Ref.-2.jpg",
      },
    ],

    "Practical (5) Corolla & Androecium": [
      {
        name: "Corolla_&_Androecium.pdf",
        pageCount: 4,
        fileSize: "759 KB",
        type: "PDF",
        thumbnail: "./resources/botany/bot_2101-2106/practical(5)/thumb.jpg",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(5)/bot-2101-2106-practical-5-corolla_&_androecium.pdf",
      },

      {
        name: "Bot_2101-2106-P5-Content_Ref.-1.jpg",
        fileSize: "411 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(5)/Bot_2101-2106-P5-Content_Ref.-1.jpg",
      },

      {
        name: "Bot_2101-2106-P5-Diagram_Ref.-1.jpg",
        fileSize: "261 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(5)/Bot_2101-2106-P5-Diagram_Ref.-1.jpg",
      },
      {
        name: "Bot_2101-2106-P5-Diagram_Ref.-2.jpg",
        fileSize: "219 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(5)/Bot_2101-2106-P5-Diagram_Ref.-2.jpg",
      },

      {
        name: "Bot_2101-2106-P5-Diagram_Ref.-3.jpg",
        fileSize: "278 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(5)/Bot_2101-2106-P5-Diagram_Ref.-3.jpg",
      },

      {
        name: "Bot_2101-2106-P5-Diagram_Ref.-4.jpg",
        fileSize: "389 KB",
        type: "JPG",
        source: "Aung Phyo Paing",
        url: "./resources/botany/bot_2101-2106/practical(5)/Bot_2101-2106-P5-Diagram_Ref.-4.jpg",
      },
    ],
  },

  "Zool 2001-2002 (Pract.)": {
    "Practical (1) Nereis External Features (2001-Invertebrate)": [
      {
        name: "Nereis_External_Features(Invert.).pdf",
        pageCount: 2,
        fileSize: "413 KB",
        type: "PDF",
        thumbnail: "./resources/zoo/practical/p1-2001/thumb.jpg",
        source: "Aung Phyo Paing",
        url: "./resources/zoo/practical/p1-2001/zool-2001-2002-practical-1-nereis-external-features-(invert.).pdf",
      },

      {
        name: "Zoo-P1-Content_Ref.-1.jpg",
        fileSize: "169 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p1-2001/Zoo-P1-Content_Ref.-1.jpg",
      },

      {
        name: "Zoo-P1-Content_Ref.-2.jpg",
        fileSize: "176 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p1-2001/Zoo-P1-Content_Ref.-2.jpg",
      },
      {
        name: "Zoo-P1-Diagram_Ref.-1.jpg",
        size: "178 KB",
        icon: "🖼️",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p1-2001/Zoo-P1-Diagram_Ref.-1.jpg",
      },
    ],

    "Practical (2) Scoliodon External Features (2002-Vertebrate)": [
      {
        name: "Scoliodon_External_Features(Vert.).pdf",
        pageCount: 3,
        fileSize: "659 KB",
        thumbnail: "./resources/zoo/practical/p2-2002/thumb.jpg",
        type: "PDF",
        source: "Aung Phyo Paing",
        url: "./resources/zoo/practical/p2-2002/zool-2001-2002-practical-2-scoliodon-external-features-(vert.).pdf",
      },

      {
        name: "Zoo-P2-Content_Ref.-1.jpg",
        fileSize: "120 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p2-2002/Zoo-P2-Content_Ref.-1.jpg",
      },

      {
        name: "Zoo-P2-Content_Ref.-2.jpg",
        fileSize: "148 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p2-2002/Zoo-P2-Content_Ref.-2.jpg",
      },
      {
        name: "Zoo-P2-Diagram_Ref.-1.jpg",
        size: "124 KB",
        icon: "🖼️",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p2-2002/Zoo-P2-Diagram_Ref.-1.jpg",
      },
    ],

    "Practical (3) Pheretima posthuma External Features (2001-Invertebrate)": [
      {
        name: "Pheretima_posthuma_External_Features(Invert.).pdf",
        pageCount: 2,
        fileSize: "221 KB",
        thumbnail: "./resources/zoo/practical/p3-2001/thumb.jpg",
        type: "PDF",
        source: "Aung Phyo Paing",
        url: "./resources/zoo/practical/p3-2001/zool-2001-2002-practical-3-Pheretima-posthuma-external-features-(invert.).pdf",
      },

      {
        name: "Zoo-P3-Content_Ref.-1.jpg",
        fileSize: "173 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p3-2001/Zoo-P3-Content_Ref.-1.jpg",
      },

      {
        name: "Zoo-P3-Content_Ref.-2.jpg",
        fileSize: "178 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p3-2001/Zoo-P3-Content_Ref.-2.jpg",
      },
      {
        name: "Zoo-P3-Diagram_Ref.-1.jpg",
        size: "164 KB",
        icon: "🖼️",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p3-2001/Zoo-P3-Diagram_Ref.-1.jpg",
      },
    ],

    "Practical (4) Rana tigrina External Features (2002-Vertebrate)": [
      {
        name: "Rana_tigrina_External_Features(Vert.).pdf",
        pageCount: 2,
        fileSize: "453 KB",
        thumbnail: "./resources/zoo/practical/p4-2002/thumb.jpg",
        type: "PDF",
        source: "Aung Phyo Paing",
        url: "./resources/zoo/practical/p4-2002/zool-2001-2002-practical-4-Pheretima-posthuma-external-features-(vert.).pdf",
      },

      {
        name: "Zoo-P4-Content_Ref.-1.jpg",
        fileSize: "106 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p4-2002/Zoo-P4-Content_Ref.-1.jpg",
      },

      {
        name: "Zoo-P4-Content_Ref.-2.jpg",
        fileSize: "105 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p4-2002/Zoo-P4-Content_Ref.-2.jpg",
      },
      {
        name: "Zoo-P4-Diagram_Ref.-1.jpg",
        size: "108 KB",
        icon: "🖼️",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p4-2002/Zoo-P4-Diagram_Ref.-1.jpg",
      },
    ],

    "Practical (5) Palamnaeus External Features (2001-Invertebrate)": [
      {
        name: "Palamnaeus_External_Features(Invert.).pdf",
        pageCount: 2,
        fileSize: "230 KB",
        thumbnail: "./resources/zoo/practical/p5-2001/thumb.jpg",
        type: "PDF",
        source: "Aung Phyo Paing",
        url: "./resources/zoo/practical/p5-2001/zool-2001-2002-practical-5-Palamnaeus-external-features-(invert.).pdf",
      },
      {
        name: "Zoo-P5-Content_Ref.-1.jpg",
        fileSize: "160 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p5-2001/Zoo-P5-Content_Ref.-1.jpg",
      },

      {
        name: "Zoo-P5-Content_Ref.-2.jpg",
        fileSize: "181 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p5-2001/Zoo-P5-Content_Ref.-2.jpg",
      },
      {
        name: "Zoo-5-Diagram_Ref.-1.jpg",
        size: "178 KB",
        icon: "🖼️",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p5-2001/Zoo-P5-Diagram_Ref.-1.jpg",
      },
    ],

    "Practical (6) Uromastix External Features (2002-Vertebrate)": [
      {
        name: "Uromastix_External_Features(Vert.).pdf",
        pageCount: 3,
        fileSize: "385 KB",
        thumbnail: "./resources/zoo/practical/p6-2002/thumb.jpg",
        type: "PDF",
        source: "Aung Phyo Paing",
        url: "./resources/zoo/practical/p6-2002/zool-2001-2002-practical-6-Uromastix-external-features-(vert.).pdf",
      },

      {
        name: "Zoo-P6-Content_Ref.-1.jpg",
        fileSize: "126 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p6-2002/Zoo-P6-Content_Ref.-1.jpg",
      },

      {
        name: "Zoo-P6-Content_Ref.-2.jpg",
        fileSize: "104 KB",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p6-2002/Zoo-P6-Content_Ref.-2.jpg",
      },
      {
        name: "Zoo-P6-Diagram_Ref.-1.jpg",
        size: "152 KB",
        icon: "🖼️",
        type: "JPG",
        source: "May Myat Noe",
        url: "./resources/zoo/practical/p6-2002/Zoo-P6-Diagram_Ref.-1.jpg",
      },
    ],
  },

  "Botany Basics": [
    { name: "Plant_Structure.pdf", size: "3.2 MB", icon: "📄" },
    { name: "Cell_Biology.pdf", size: "2.7 MB", icon: "📄" },
    { name: "Photosynthesis_Diagram.png", size: "1.1 MB", icon: "🖼️" },
    { name: "Plant_Images.zip", size: "18.5 MB", icon: "📦" },
  ],
  "Cell Biology Notes": [
    { name: "Cell_Structure.pdf", size: "2.5 MB", icon: "📄" },
    { name: "Organelles.pdf", size: "1.9 MB", icon: "📄" },
    { name: "Microscopy_Images.zip", size: "9.3 MB", icon: "📦" },
    { name: "Cell_Division.png", size: "756 KB", icon: "🖼️" },
  ],
  "Bot 2101-2106": [
    { name: "Advanced_Topics.pdf", size: "3.8 MB", icon: "📄" },
    { name: "Research_Paper.pdf", size: "2.2 MB", icon: "📄" },
    { name: "Lab_Data.xlsx", size: "512 KB", icon: "📊" },
    { name: "Field_Photos.zip", size: "22.1 MB", icon: "📦" },
  ],
  "Bot 2102-2107": [
    { name: "Taxonomy_Guide.pdf", size: "4.1 MB", icon: "📄" },
    { name: "Species_Database.pdf", size: "3.5 MB", icon: "📄" },
    { name: "Identification_Keys.pdf", size: "2.8 MB", icon: "📄" },
    { name: "Specimen_Photos.zip", size: "16.7 MB", icon: "📦" },
  ],
  "Bot 2103-2108": [
    { name: "Ecology_Principles.pdf", size: "3.3 MB", icon: "📄" },
    { name: "Ecosystem_Analysis.pdf", size: "2.9 MB", icon: "📄" },
    { name: "Field_Study_Report.pdf", size: "1.7 MB", icon: "📄" },
    { name: "Habitat_Images.zip", size: "19.4 MB", icon: "📦" },
  ],
  "Bot 2104-2109": [
    { name: "Physiology_Textbook.pdf", size: "5.2 MB", icon: "📄" },
    { name: "Experimental_Methods.pdf", size: "2.1 MB", icon: "📄" },
    { name: "Data_Analysis.xlsx", size: "1.3 MB", icon: "📊" },
    { name: "Research_Images.zip", size: "24.8 MB", icon: "📦" },
  ],
  "Bot 2101-2106 Lecture": [
    { name: "Lecture_Slides_1.pdf", size: "4.5 MB", icon: "📄" },
    { name: "Lecture_Slides_2.pdf", size: "3.8 MB", icon: "📄" },
    { name: "Audio_Recording.mp3", size: "45.2 MB", icon: "🎵" },
  ],
  "Bot 2102-2107 Lecture": [
    { name: "Lecture_Notes.pdf", size: "3.2 MB", icon: "📄" },
    { name: "Presentation.pdf", size: "5.1 MB", icon: "📄" },
    { name: "Video_Lecture.mp4", size: "125.3 MB", icon: "🎬" },
  ],
  "Zool 2001-2002 Lecture": [
    { name: "Zoology_Fundamentals.pdf", size: "4.8 MB", icon: "📄" },
    { name: "Classification_Lecture.pdf", size: "3.5 MB", icon: "📄" },
    { name: "Animal_Behavior_Video.mp4", size: "98.7 MB", icon: "🎬" },
  ],
  "Bot 2101-2106 Assignment": [
    { name: "Assignment_1.pdf", size: "1.2 MB", icon: "📄" },
    { name: "Assignment_2.pdf", size: "1.5 MB", icon: "📄" },
    { name: "Rubric.pdf", size: "0.8 MB", icon: "📄" },
    { name: "Sample_Solutions.pdf", size: "2.3 MB", icon: "📄" },
  ],
  "Bot 2102-2107 Assignment": [
    { name: "Project_Brief.pdf", size: "1.1 MB", icon: "📄" },
    { name: "Evaluation_Criteria.pdf", size: "0.9 MB", icon: "📄" },
    { name: "Example_Submissions.zip", size: "8.5 MB", icon: "📦" },
  ],
  "Plant Physiology Notes": [
    { name: "Photosynthesis.pdf", size: "2.8 MB", icon: "📄" },
    { name: "Respiration.pdf", size: "2.4 MB", icon: "📄" },
    { name: "Nutrient_Transport.pdf", size: "2.1 MB", icon: "📄" },
    { name: "Diagrams.zip", size: "6.3 MB", icon: "📦" },
  ],
  "Ecology Study Guide": [
    { name: "Biomes.pdf", size: "3.5 MB", icon: "📄" },
    { name: "Population_Dynamics.pdf", size: "2.9 MB", icon: "📄" },
    { name: "Community_Interactions.pdf", size: "2.6 MB", icon: "📄" },
    { name: "Study_Questions.pdf", size: "1.4 MB", icon: "📄" },
  ],
};

function openResourceModal(event, resourceName) {
  event.stopPropagation();

  const modal = document.getElementById("resourceModal");
  const modalTitle = document.getElementById("modalResourceName");
  const attachmentsContainer = document.getElementById("attachmentsContainer");

  modalTitle.textContent = resourceName;

  // Get attachments for this resource
  const attachments = resourceData[resourceName] || [];

  // Clear and populate attachments
  attachmentsContainer.innerHTML = "";

  Object.entries(attachments).forEach(([folderName, files]) => {
    const folder = document.createElement("div");

    folder.className = "resource-folder-group";

    folder.innerHTML = `
        <h3 class="resource-subfolder-title">
            📁 ${folderName}
        </h3>

        <div class="resource-subfolder-files"></div>
    `;

    const filesContainer = folder.querySelector(".resource-subfolder-files");

    files.forEach((attachment) => {
      const card = document.createElement("div");

      card.className = "attachment-card";

      card.innerHTML = `

    <img
        src="${attachment.thumbnail ? attachment.thumbnail : attachment.url}"
        class="attachment-thumb"
    />

    <div class="attachment-title" title="${attachment.name}">
        ${attachment.name}
    </div>

    <div class="attachment-info">

        <div class="info-row">
            <span class="info-label">
                Size
            </span>

            <span class="info-separator">:</span>

            <span class="info-value">
                ${attachment.fileSize}
            </span>
        </div>

        <div class="info-row">
            <span class="info-label">
                Page Count
            </span>

            <span class="info-separator">:</span>

            <span class="info-value">
                ${attachment.pageCount ? attachment.pageCount : 1}
            </span>
        </div>

        <div class="info-row">
            <span class="info-label">
                Type
            </span>

            <span class="info-separator">:</span>

            <span class="info-value">
                ${attachment.type}
            </span>
        </div>

        <div class="info-row">
            <span class="info-label">
                Source By
            </span>

            <span class="info-separator">:</span>

            <span class="info-value" title="${attachment.source}">
                ${attachment.source}
            </span>
        </div>

    </div>

    <div class="attachment-actions">

        <button
            class="attachment-btn"
            onclick="previewFile('${attachment.url}','${attachment.type}')"
        >
            Preview
        </button>

        <a
            href="${attachment.url}"
            download
            class="attachment-btn"
        >
            Download
        </a>

    </div>
`;

      filesContainer.appendChild(card);
    });

    attachmentsContainer.appendChild(folder);
  });
  // Show modal
  modal.classList.add("active");
}

function closeResourceModal() {
  const modal = document.getElementById("resourceModal");
  modal.classList.remove("active");
}

function downloadAttachment(filename) {
  alert(
    `Downloading: ${filename}\n\nIn a real application, this would trigger a download.`,
  );
}

// Close modal when clicking outside
document
  .getElementById("resourceModal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeResourceModal();
    }
  });

function previewFile(url, type) {
  const viewer = document.getElementById("fileViewer");

  const body = document.getElementById("viewerBody");

  body.innerHTML = "";

  /* normalize */
  type = type.toLowerCase();

  /* PDF */
  if (type === "pdf") {
    body.innerHTML = `

        <div class="mobile-pdf-actions">

            <a
                href="${url}"
                target="_blank"
                class="open-pdf-btn"
            >
                Open PDF
            </a>

        </div>

        <iframe
            src="${url}#toolbar=0"
            width="100%"
            height="700px"
            style="
                border:none;
                border-radius:16px;
                background:white;
            "
        ></iframe>
    `;
  } else if (
    /* IMAGE */
    type === "jpg" ||
    type === "jpeg" ||
    type === "png" ||
    type === "webp" ||
    type === "gif"
  ) {
    body.innerHTML = `
            <img
                src="${url}"
                style="
                    width:100%;
                    max-height:80vh;
                    object-fit:contain;
                    border-radius:16px;
                "
            />
        `;
  } else {
    /* unsupported */
    body.innerHTML = `
            <div class="preview-error">
                Preview not supported.
            </div>
        `;
  }

  viewer.classList.add("active");
}

function closeViewer() {
  document.getElementById("fileViewer").classList.remove("active");
}

// const subjectCard =
//     document.getElementById("subjectCard");

// const practicalCard =
//     document.getElementById("practicalCard");

// subjectCard.addEventListener("click", () => {
//     document
//         .getElementById("subjectModal")
//         .classList.add("active");
// });

// practicalCard.addEventListener("click", () => {

//     let html = "";

//     practicalSubjects.forEach(subject => {

//         const data = resourceData[subject];

//         if (!data) return;

//         html += `
//             <div style="margin-bottom:1rem">
//                 <strong>${subject}</strong>
//                 <br>
//                 ${Object.keys(data).length} Practicals
//             </div>
//         `;
//     });

//     html += `
//         <hr style="margin:1rem 0">
//         <strong>Total :
//         ${countPracticals()} Practicals</strong>
//     `;

//     document.getElementById(
//         "practicalSummary"
//     ).innerHTML = html;

//     document
//         .getElementById("practicalModal")
//         .classList.add("active");
// });

// function closeStatsModal() {

//     document
//         .querySelectorAll(".stats-modal")
//         .forEach(m => {
//             m.classList.remove("active");
//         });
// }

// function countResources(data) {
//     let total = 0;

//     function walk(obj) {

//         if (Array.isArray(obj)) {
//             total += obj.length;
//             return;
//         }

//         if (typeof obj === "object" && obj !== null) {
//             Object.values(obj).forEach(walk);
//         }
//     }

//     walk(data);

//     return total;
// }

// document.getElementById("resourceCount").textContent =
//     countResources(resourceData);

//     const practicalSubjects = [
//     "Bot 2101-2106 (Pract.)",
//     "Bot 2102-2107 (Pract.)",
//     "Bot 2103-2108 (Pract.)",
//     "Bot 2104-2109 (Pract.)",
//     "Zool 2001-2002 (Pract.)"
// ];

// function countPracticals() {

//     let total = 0;

//     practicalSubjects.forEach(subject => {

//         const subjectData = resourceData[subject];

//         if (!subjectData) return;

//         total += Object.keys(subjectData).length;
//     });

//     return total;
// }

// document.getElementById("practicalCount").textContent =
//     countPracticals();

document.addEventListener("DOMContentLoaded", () => {

    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");
    const rainContainer = document.getElementById("rainContainer");

    if(!musicBtn || !bgMusic || !rainContainer){
        console.error("Rain system elements not found");
        return;
    }

    let playing = false;

    function startRain(){

        rainContainer.innerHTML = "";

        rainContainer.classList.add("active");

        for(let i=0;i<150;i++){

            const drop =
                document.createElement("div");

            drop.className = "raindrop";

            drop.style.left =
                Math.random() * 100 + "%";

            drop.style.animationDuration =
                (0.5 + Math.random()) + "s";

            drop.style.animationDelay =
                Math.random() * 2 + "s";

            rainContainer.appendChild(drop);
        }
    }

    function stopRain(){

        rainContainer.classList.remove("active");
        rainContainer.innerHTML = "";
    }

    musicBtn.addEventListener("click", async () => {

        if(!playing){

            try{

                await bgMusic.play();

                startRain();

                musicBtn.textContent = "⏸️";

                playing = true;

            }catch(err){

                console.error(err);
            }

        }else{

            bgMusic.pause();

            stopRain();

            musicBtn.textContent = "🌧️";

            playing = false;
        }
    });

});