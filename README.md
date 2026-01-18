# Secret Santa Game

## Overview
This project is a web-based Secret Santa game developed using JavaScript. It allows users to add participants, remove them dynamically, shuffle the list, and perform an automated draw that assigns each participant to another in a closed cycle.

The main purpose of this project is to practice programming logic, data manipulation, and algorithmic thinking. HTML and CSS are used strictly as supporting tools for interface rendering, not as the core focus of the project.

---

## Features
- Add participant names with validation against duplicates
- Remove participants by clicking directly on their names
- Shuffle participants randomly
- Automatic Secret Santa draw using a closed-loop algorithm
- Reset the entire application state
- Clean and structured user interface

---

## Draw Logic
Participants are stored in an array and shuffled using a randomization algorithm.  
After shuffling, each participant is assigned to the next one in the list, while the last participant is linked back to the first.

This logic ensures:
- No participant is assigned to themselves
- No duplicated assignments
- A fair and consistent draw

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Concepts Practiced
- Programming logic and control flow
- Array manipulation (push, splice, shuffle)
- DOM manipulation
- Event handling
- Dynamic element creation
- User input validation
- Application state management
- Separation between logic and presentation

---

## Project Structure
/assets

index.html

style.css

/js

└── app.js

---

## Project Purpose
This project was developed for educational purposes, focusing on strengthening core programming logic and JavaScript fundamentals.  
The implemented logic can be reused and adapted for more complex applications involving data processing and user interaction.

---

## Otávio Faria
GitHub: otavioFaria0

---
