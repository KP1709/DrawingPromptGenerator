# Drawing Prompt Generator
[![Netlify Status](https://api.netlify.com/api/v1/badges/739de898-9f03-4a36-aa2a-f7843daed5bf/deploy-status)](https://app.netlify.com/sites/kareenapatel-drawingpromptgenerator/deploys)
![Static Badge](https://img.shields.io/badge/supabase-active-lightgreen)


## ⌨️ Technology + Asset stack
HTML / CSS / npm / Node.js / Vite / Font Awesome / Supabase (PostgreSQL) / Pexel / React

## 🍼 Introduction
While continuing to learn React through Bob Ziroll's Learn React course (Scrimba), I wanted to practice and experiment with APIs. This application is a twist on a project on Frontend Mentor. Essentially, the web application displays random drawing prompts to users and outputs an image associated with the word so users gain inspiration. In addition, information about the photographer is displayed giving credit to each image. The API used is custom as I created it using Supabase.

### ⚡Supabase
Supabase is a Firebase alternative which I discovered during a university module. One of the tool's features is creating databases where data can be fetched as an API. Therefore I created a database filled with prompts, an associated image and the photographer's information and linked it to the project. The database can be modified at any time which will update automatically in the project. 

## 🛠️ Features
- Accessibility integrated into the 'generate new prompt' (dice) button using aria-label.
- The prompt word and images are retrieved from the database.
- Images shown are set to be landscape only.
- The photographer's image is displayed on the card with alt text added to the image.
- Users can view the photographer's Pexel account.
- The API keys are hidden correctly using the .env file and added to the .gitignore file. 
- Application fails correctly - considers the sad path.

## 🎨 Design + Functionality
The design and functionality were inspired by a similar project on Frontend Mentor (Advice Generator App). The design was adapted to suit the addition of other elements such as the photo, photographer's name and link to their account. 

Link to Frontend Mentor challenge - https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db 

## 📚 Resources
 - Scrimba's Learn React - https://scrimba.com/learn/learnreact
 - Supabase Javascript Documentation - https://supabase.com/docs/reference/javascript/introduction
 - Supabase React Documentation - https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

## ➕ Potential features to add 
- Swapping between different themes (e.g. Landscapes, objects, Halloween).
- Option to change colour theme.