# Drawing Prompt Generator

## ⌨️ Technology + Asset stack
HTML / CSS / npm / Node.js / Vite / Font Awesome / Supabase (PostgreSQL)

## 🔌APIs used
- Supabase
    - I created my own database filled with prompts and linked it to the project. This enables prompts to be modified easily. 
- Pexel image API
    - Hosted by Pexel with a very detailed API response enabling flexibility on how it's used in the project. 

## 🍼 Introduction
While continuing to learn React through Bob Ziroll's Learn React course (Scrimba), I wanted to experiment and practice intergrating APIs into a React project. This web application displays random drawing prompts to users and outputs an image associated with the word. The user can request for a different prompt in which the word and image will change. The prompt obtained from Supabase is required so the second API can execute. This project was interesting as I was using two different APIs in different places but had to pass data from the main app file to the component at a lower level. 

## 🎨 Design
The design was inspired by a similar project on Frontend Mentor (Advice Generator App) but was adapted to suit the addition of other elements such as the photo, photographer's name and link to their account. 

Link to Frontend Mentor challenge - https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db 

## 📚 Resources
 - Scrimba's Learn React - https://scrimba.com/learn/learnreact
 - Pexel's API Documentation - https://www.pexels.com/api/documentation/
 - Supabase Javascript Documentation - https://supabase.com/docs/reference/javascript/introduction
 - Supabase React Documentation - https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

## 🛠️ Features
- Accessibility intergrated into the 'generate new prompt' (dice) button using aria-label.
- The prompt word is retrieved from Supabase and inserted into the Pexel API to use as context in the search query.
- Images shown are set to be landscape only.
- The photographer of the image is displayed in the card.
- Users can view the photographer's Pexel account.
- The API keys are hidden correctly using the .env file and added to the .gitignore file. 

## ➕ Potential features to add 
- Swapping between different themes (e.g. Landscapes, objects, halloween).
- Option to change colour theme. 
