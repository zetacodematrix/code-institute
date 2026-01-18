// ------------------------------
// Question Bank (no JSON files)
// ------------------------------
// Structure: { country: "Country", capital: "Capital" }
const COUNTRIES = [
  { country: "Afghanistan", capital: "Kabul" },
  { country: "Albania", capital: "Tirana" },
  { country: "Algeria", capital: "Algiers" },
  { country: "Andorra", capital: "Andorra la Vella" },
  { country: "Angola", capital: "Luanda" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Armenia", capital: "Yerevan" },
  { country: "Australia", capital: "Canberra" },
  { country: "Austria", capital: "Vienna" },
  { country: "Azerbaijan", capital: "Baku" },

  { country: "Bahamas", capital: "Nassau" },
  { country: "Bahrain", capital: "Manama" },
  { country: "Bangladesh", capital: "Dhaka" },
  { country: "Barbados", capital: "Bridgetown" },
  { country: "Belarus", capital: "Minsk" },
  { country: "Belgium", capital: "Brussels" },
  { country: "Belize", capital: "Belmopan" },
  { country: "Benin", capital: "Porto-Novo" },
  { country: "Bhutan", capital: "Thimphu" },
  { country: "Bolivia", capital: "Sucre" },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { country: "Botswana", capital: "Gaborone" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Brunei", capital: "Bandar Seri Begawan" },
  { country: "Bulgaria", capital: "Sofia" },
  { country: "Burkina Faso", capital: "Ouagadougou" },
  { country: "Burundi", capital: "Gitega" },

  { country: "Cambodia", capital: "Phnom Penh" },
  { country: "Cameroon", capital: "Yaoundé" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Cape Verde", capital: "Praia" },
  { country: "Central African Republic", capital: "Bangui" },
  { country: "Chad", capital: "N'Djamena" },
  { country: "Chile", capital: "Santiago" },
  { country: "China", capital: "Beijing" },
  { country: "Colombia", capital: "Bogotá" },
  { country: "Comoros", capital: "Moroni" },
  { country: "Costa Rica", capital: "San José" },
  { country: "Croatia", capital: "Zagreb" },
  { country: "Cuba", capital: "Havana" },
  { country: "Cyprus", capital: "Nicosia" },
  { country: "Czechia", capital: "Prague" },

  { country: "Denmark", capital: "Copenhagen" },
  { country: "Dominican Republic", capital: "Santo Domingo" },

  { country: "Ecuador", capital: "Quito" },
  { country: "Egypt", capital: "Cairo" },
  { country: "El Salvador", capital: "San Salvador" },
  { country: "Equatorial Guinea", capital: "Malabo" },
  { country: "Eritrea", capital: "Asmara" },
  { country: "Estonia", capital: "Tallinn" },
  { country: "Eswatini", capital: "Mbabane" },
  { country: "Ethiopia", capital: "Addis Ababa" },

  { country: "Fiji", capital: "Suva" },
  { country: "Finland", capital: "Helsinki" },
  { country: "France", capital: "Paris" },

  { country: "Gabon", capital: "Libreville" },
  { country: "Gambia", capital: "Banjul" },
  { country: "Georgia", capital: "Tbilisi" },
  { country: "Germany", capital: "Berlin" },
  { country: "Ghana", capital: "Accra" },
  { country: "Greece", capital: "Athens" },
  { country: "Grenada", capital: "St. George's" },
  { country: "Guatemala", capital: "Guatemala City" },
  { country: "Guinea", capital: "Conakry" },
  { country: "Guinea-Bissau", capital: "Bissau" },
  { country: "Guyana", capital: "Georgetown" },

  { country: "Haiti", capital: "Port-au-Prince" },
  { country: "Honduras", capital: "Tegucigalpa" },
  { country: "Hungary", capital: "Budapest" },

  { country: "Iceland", capital: "Reykjavík" },
  { country: "India", capital: "New Delhi" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Iran", capital: "Tehran" },
  { country: "Iraq", capital: "Baghdad" },
  { country: "Ireland", capital: "Dublin" },
  { country: "Israel", capital: "Jerusalem" },
  { country: "Italy", capital: "Rome" },

  { country: "Jamaica", capital: "Kingston" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Jordan", capital: "Amman" },

  { country: "Kazakhstan", capital: "Astana" },
  { country: "Kenya", capital: "Nairobi" },
  { country: "Kiribati", capital: "South Tarawa" },
  { country: "Kuwait", capital: "Kuwait City" },
  { country: "Kyrgyzstan", capital: "Bishkek" },

  { country: "Laos", capital: "Vientiane" },
  { country: "Latvia", capital: "Riga" },
  { country: "Lebanon", capital: "Beirut" },
  { country: "Lesotho", capital: "Maseru" },
  { country: "Liberia", capital: "Monrovia" },
  { country: "Libya", capital: "Tripoli" },
  { country: "Liechtenstein", capital: "Vaduz" },
  { country: "Lithuania", capital: "Vilnius" },
  { country: "Luxembourg", capital: "Luxembourg" },

  { country: "Madagascar", capital: "Antananarivo" },
  { country: "Malawi", capital: "Lilongwe" },
  { country: "Malaysia", capital: "Kuala Lumpur" },
  { country: "Maldives", capital: "Malé" },
  { country: "Mali", capital: "Bamako" },
  { country: "Malta", capital: "Valletta" },
  { country: "Marshall Islands", capital: "Majuro" },
  { country: "Mauritania", capital: "Nouakchott" },
  { country: "Mauritius", capital: "Port Louis" },
  { country: "Mexico", capital: "Mexico City" },
  { country: "Micronesia", capital: "Palikir" },
  { country: "Moldova", capital: "Chișinău" },
  { country: "Monaco", capital: "Monaco" },
  { country: "Mongolia", capital: "Ulaanbaatar" },
  { country: "Montenegro", capital: "Podgorica" },
  { country: "Morocco", capital: "Rabat" },
  { country: "Mozambique", capital: "Maputo" },

  { country: "Namibia", capital: "Windhoek" },
  { country: "Nepal", capital: "Kathmandu" },
  { country: "Netherlands", capital: "Amsterdam" },
  { country: "New Zealand", capital: "Wellington" },
  { country: "Nicaragua", capital: "Managua" },
  { country: "Niger", capital: "Niamey" },
  { country: "Nigeria", capital: "Abuja" },
  { country: "North Korea", capital: "Pyongyang" },
  { country: "North Macedonia", capital: "Skopje" },
  { country: "Norway", capital: "Oslo" },

  { country: "Oman", capital: "Muscat" },

  { country: "Pakistan", capital: "Islamabad" },
  { country: "Palau", capital: "Ngerulmud" },
  { country: "Panama", capital: "Panama City" },
  { country: "Papua New Guinea", capital: "Port Moresby" },
  { country: "Paraguay", capital: "Asunción" },
  { country: "Peru", capital: "Lima" },
  { country: "Philippines", capital: "Manila" },
  { country: "Poland", capital: "Warsaw" },
  { country: "Portugal", capital: "Lisbon" },

  { country: "Qatar", capital: "Doha" },

  { country: "Romania", capital: "Bucharest" },
  { country: "Russia", capital: "Moscow" },
  { country: "Rwanda", capital: "Kigali" },

  { country: "Saudi Arabia", capital: "Riyadh" },
  { country: "Senegal", capital: "Dakar" },
  { country: "Serbia", capital: "Belgrade" },
  { country: "Seychelles", capital: "Victoria" },
  { country: "Sierra Leone", capital: "Freetown" },
  { country: "Singapore", capital: "Singapore" },
  { country: "Slovakia", capital: "Bratislava" },
  { country: "Slovenia", capital: "Ljubljana" },
  { country: "Solomon Islands", capital: "Honiara" },
  { country: "Somalia", capital: "Mogadishu" },
  { country: "South Africa", capital: "Pretoria" },
  { country: "South Korea", capital: "Seoul" },
  { country: "South Sudan", capital: "Juba" },
  { country: "Spain", capital: "Madrid" },
  { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
  { country: "Sudan", capital: "Khartoum" },
  { country: "Sweden", capital: "Stockholm" },
  { country: "Switzerland", capital: "Bern" },
  { country: "Syria", capital: "Damascus" },

  { country: "Taiwan", capital: "Taipei" },
  { country: "Tajikistan", capital: "Dushanbe" },
  { country: "Tanzania", capital: "Dodoma" },
  { country: "Thailand", capital: "Bangkok" },
  { country: "Timor-Leste", capital: "Dili" },
  { country: "Togo", capital: "Lomé" },
  { country: "Tonga", capital: "Nukuʻalofa" },
  { country: "Trinidad and Tobago", capital: "Port of Spain" },
  { country: "Tunisia", capital: "Tunis" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Turkmenistan", capital: "Ashgabat" },

  { country: "Uganda", capital: "Kampala" },
  { country: "Ukraine", capital: "Kyiv" },
  { country: "United Arab Emirates", capital: "Abu Dhabi" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States", capital: "Washington, D.C." },
  { country: "Uruguay", capital: "Montevideo" },
  { country: "Uzbekistan", capital: "Tashkent" },

  { country: "Vanuatu", capital: "Port Vila" },
  { country: "Vatican City", capital: "Vatican City" },
  { country: "Venezuela", capital: "Caracas" },
  { country: "Vietnam", capital: "Hanoi" },

  { country: "Yemen", capital: "Sana'a" },
  { country: "Zambia", capital: "Lusaka" },
  { country: "Zimbabwe", capital: "Harare" },
];

// ------------------------------
// Random helpers
// ------------------------------
function shuffleArray(arr) {
  // Returns a new shuffled copy (does not mutate original)
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ------------------------------
// 1) Pick 20 random unique questions
// ------------------------------
function pickRandomQuestions(pool, count = 20) {
  if (!Array.isArray(pool)) {
    throw new Error("pickRandomQuestions: pool must be an array.");
  }
  if (pool.length < count) {
    throw new Error(
      `pickRandomQuestions: pool has ${pool.length} items, need at least ${count}.`
    );
  }

  // Shuffle then slice ensures uniqueness without extra bookkeeping
  return shuffleArray(pool).slice(0, count);
}

// ------------------------------
// 2) Generate 4 MCQ options for ONE question
// ------------------------------
// Returns an object you can render easily:
// {
//   country: "France",
//   correctCapital: "Paris",
//   options: ["Rome", "Paris", "Berlin", "Madrid"],
//   correctIndex: 1
// }
function makeMCQ(questionItem, pool) {
  if (!questionItem || !questionItem.country || !questionItem.capital) {
    throw new Error("makeMCQ: questionItem must have { country, capital }.");
  }
  if (!Array.isArray(pool) || pool.length < 4) {
    throw new Error("makeMCQ: pool must be an array with at least 4 items.");
  }

  const correctCapital = questionItem.capital;

  // Build list of candidate wrong capitals (exclude the correct one)
  const wrongCapitalPool = pool
    .filter((item) => item.capital !== correctCapital)
    .map((item) => item.capital);

  // Defensive: ensure enough wrong answers exist
  if (wrongCapitalPool.length < 3) {
    throw new Error("makeMCQ: not enough wrong capitals to choose from.");
  }

  // Pick 3 unique wrong capitals
  const wrongCapitals = [];
  const shuffledWrongs = shuffleArray(wrongCapitalPool);

  for (const cap of shuffledWrongs) {
    if (!wrongCapitals.includes(cap)) wrongCapitals.push(cap);
    if (wrongCapitals.length === 3) break;
  }

  const options = shuffleArray([...wrongCapitals, correctCapital]);
  const correctIndex = options.indexOf(correctCapital);

  return {
    country: questionItem.country,
    correctCapital,
    options,
    correctIndex,
  };
}

function renderQuestion(mcq, questionNumber, totalQuestions) {
  // Update question text
  const questionText = document.getElementById("question-text");
  questionText.textContent = `What is the capital of ${mcq.country}?`;

  // Update progress text (optional but recommended)
  const progress = document.getElementById("progress");
  if (progress) {
    progress.textContent = `Question ${questionNumber} of ${totalQuestions}`;
  }

  // Reset radios and inject options
  mcq.options.forEach((optionText, index) => {
    const radio = document.getElementById(`opt${index}`);
    const label = document.getElementById(`opt${index}-label`);

    radio.checked = false;
    radio.value = index; // store index (or use text if you prefer)
    label.textContent = optionText;
  });

  // Disable Next until user selects an option
  const nextBtn = document.getElementById("next-btn");
  nextBtn.disabled = true;
}

const mcq = makeMCQ(state.questions[state.currentIndex], COUNTRIES);

renderQuestion(
  mcq,
  state.currentIndex + 1,
  state.questions.length
);

document.getElementById("quiz-form").addEventListener("change", (e) => {
  if (e.target.name === "answer") {
    document.getElementById("next-btn").disabled = false;
  }
});


function renderQuestion(mcq, questionNumber, totalQuestions) {
  // Update question text
  const questionText = document.getElementById("question-text");
  questionText.textContent = `What is the capital of ${mcq.country}?`;

  // Update progress text (optional but recommended)
  const progress = document.getElementById("progress");
  if (progress) {
    progress.textContent = `Question ${questionNumber} of ${totalQuestions}`;
  }

  // Reset radios and inject options
  mcq.options.forEach((optionText, index) => {
    const radio = document.getElementById(`opt${index}`);
    const label = document.getElementById(`opt${index}-label`);

    radio.checked = false;
    radio.value = index; // store index (or use text if you prefer)
    label.textContent = optionText;
  });

  // Disable Next until user selects an option
  const nextBtn = document.getElementById("next-btn");
  nextBtn.disabled = true;
}

function showScreen(screenId) {
  const screens = [
    "start-screen",
    "quiz-screen",
    "score-screen",
    "review-screen",
  ];

  screens.forEach((id) => {
    const section = document.getElementById(id);
    if (!section) return;

    if (id === screenId) {
      section.hidden = false;
    } else {
      section.hidden = true;
    }
  });
}
// On initial load
showScreen("start-screen");

// After clicking Start
showScreen("quiz-screen");

// After finishing last question
showScreen("score-screen");

// Later, when review is implemented
showScreen("review-screen");

