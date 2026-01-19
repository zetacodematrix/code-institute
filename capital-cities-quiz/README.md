# Capital Cities Quiz

A mobile-first, accessible, single-page JavaScript quiz application that tests users on world capital cities. Each quiz session presents 20 randomly selected questions from a larger country–capital dataset, with multiple-choice answers, instant navigation, scoring, and optional review.

This project was built using **vanilla HTML, CSS, and JavaScript**, with a strong emphasis on clean structure, state management, accessibility, and extensibility.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Light & Dark Mode](#light--dark-mode)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Future Improvements](#future-improvements)
- [AI Use](#ai-use)
- [[Quality & Standards](#quality-standards)
- [Author](#author)

---

## Demo

https://zetacodematrix.github.io/code-institute/capital-cities-quiz/

<img width="1800" height="760" alt="all-devices-black" src="https://github.com/user-attachments/assets/f7454338-55a2-41e4-b286-edd764d35f2d" />

---

## Features

- Start screen with quiz introduction
- 20 random, non-repeating questions per attempt
- Multiple-choice questions (1 correct, 3 incorrect)
- Progress indicator (e.g. “Question 7 of 20”)
- Score calculation with percentage result
- Restart quiz without page reload
- Optional review screen showing correct vs selected answers
- Mobile-first responsive layout
- Keyboard-accessible controls

---

## Light & Dark Mode

The app includes a **Light / Dark mode toggle**:

- **Light mode** uses a soft green/brown palette designed for readability
- **Dark mode** uses a dark blue theme with accessible contrast ratios
- The selected theme is saved in `localStorage` and restored on reload
- Implemented using CSS variables and a `data-theme` attribute

This approach avoids duplicated stylesheets and keeps the UI easy to extend.

---

## How It Works

1. All country–capital data is stored in a JavaScript array (no external APIs or JSON files).
2. On quiz start:
   - The dataset is shuffled
   - 20 unique countries are selected
3. For each question:
   - One correct capital is chosen
   - Three incorrect capitals are randomly selected
   - Options are shuffled before display
4. User selections are stored in application state.
5. After the final question, the score is calculated and displayed.

State is managed via a central `state` object, and the DOM is updated dynamically.

---

## Tech Stack

- **HTML5**
  - Semantic structure (`header`, `main`, `section`, `form`, `fieldset`)
- **CSS3**
  - Mobile-first design
  - CSS variables for theming
  - Accessible colour contrast
- **Vanilla JavaScript (ES6+)**
  - State management
  - Randomisation logic
  - DOM manipulation
- No frameworks, libraries, or build tools

---

## Project Structure

```text
capital-cities-quiz/
├── index.html      # App structure and screens
├── styles.css      # Mobile-first styles + light/dark themes
├── script.js       # Quiz logic, state, rendering
└── README.md
```


---

## Accessibility

- Native radio inputs for multiple-choice answers
- Labels linked to inputs for screen readers
- Keyboard navigation supported throughout
- Focus-visible styles for interactive elements
- ARIA attributes used where appropriate (e.g. progress updates)

---

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Click **Start Quiz** to begin

No dependencies or build steps required.

---

## Future Improvements

- Full review screen with per-question feedback
- Difficulty levels
- Topic-based quizzes (reusing the same engine)
- Timed quiz mode
- Persistent high scores
- Backend integration for user accounts
- Reuse as a generic quiz engine for educational sites (e.g. xclmath.com)

---
## AI Use

AI assistance was used during the development of this project in a supporting role. Specifically, AI tools were used to:
- Help plan the overall project workflow and break the app into manageable development steps
- Generate an initial country–capital dataset, which was then reviewed and integrated into the project
- Assist with debugging, refactoring, and validating JavaScript logic during development


All core implementation decisions, code integration, styling, testing, and final functionality were completed by the author, with AI used as a productivity and learning aid rather than as a replacement for development work.

---

## Quality & Standards

- HTML validated using W3C Validator
- CSS validated using W3C CSS Validator
- JavaScript checked with ESLint (recommended rules)
---

## Author

Built by **Hal Euphrates** as part of a frontend JavaScript bootcamp assignment, with planned extension into a reusable quiz component for educational web projects.

