# Drawing Prompt Generator
[![Netlify Status](https://api.netlify.com/api/v1/badges/739de898-9f03-4a36-aa2a-f7843daed5bf/deploy-status)](https://app.netlify.com/sites/kareenapatel-drawingpromptgenerator/deploys)


## ⌨️ Technology + Asset stack
HTML / CSS / npm / Node.js / Vite / Font Awesome / Supabase (PostgreSQL) / Pexel

## 🍼 Introduction
While continuing to learn React through Bob Ziroll's Learn React course (Scrimba), I wanted to practice and experiment with APIs. This application is a twist on a project on Frontend Mentor. Essentially, the web application displays random drawing prompts to users and outputs an image associated with the word so user gain inspiration. In addition, information about the photographer is displayed giving credit to each image. The API used is custom as I created it using Supabase.

### ⚡Supabase
Supabase is a Firebase alternative which I discovered during a university module. One of the features of the tool is creating databases in which data can be fetched as an API. Therefore I created my own database filled with prompts, an associated image and photographer's information and linked it to the project. The database can be modified at anytime which will update automatically in the project. 

### 🕵🏽‍♀️ Hiding API keys
The API keys were hidden in a .env file and Netlify serverless functions were used to hide the keys from being viewed in the request header. This was where the Supabase client was connected. The URL generated by Netlify was passed into App.jsx to fetch the data using Async/Await.

The repo contains two folder 'netlify/functions' and '/functions'. 
- 'netlify/functions' - used for production purposes
- '/functions' - used for deployment purposes  

## 🎨 Design + Functionality
The design and functionality was inspired by a similar project on Frontend Mentor (Advice Generator App). The design was adapted to suit the addition of other elements such as the photo, photographer's name and link to their account. 

Link to Frontend Mentor challenge - https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db 

## 📚 Resources
 - Scrimba's Learn React - https://scrimba.com/learn/learnreact
 - Supabase Javascript Documentation - https://supabase.com/docs/reference/javascript/introduction
 - Supabase React Documentation - https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
 - Serverless function intergration in React - https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/
 - Netlify and Supabase intergration - https://www.netlify.com/integrations/supabase/
 - Hiding API keys using Netlify - https://www.youtube.com/watch?v=m2Dr4L_Ab14
 - Hiding API keys in Vite - https://devzibah.hashnode.dev/using-a-dotenv-file-to-store-and-use-api-keys-in-a-vite-built-react-app

## 🛠️ Features
- Accessibility intergrated into the 'generate new prompt' (dice) button using aria-label.
- The prompt word is retrieved from Supabase and inserted into the Pexel API to use as context in the search query.
- Images shown are set to be landscape only.
- The photographer of the image is displayed in the card with alt text added to the image.
- Users can view the photographer's Pexel account.
- The API keys are hidden correctly using the .env file and added to the .gitignore file. 

## ➕ Potential features to add 
- Swapping between different themes (e.g. Landscapes, objects, halloween).
- Option to change colour theme. 
- Implement a .toml file to declare the build and deployment folder for Netlify functions (if possible)
