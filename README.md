## BookMyShow Clone Application Build

We'll use things like HTML5, CSS3, Tailwind, ReactJs, MongoDb, react-slicks (for carousel), react-icons, react-context-api (for state management || redux), etc.

# React
npx create-react-app.
From this the react app gets created directly in the same directory, now we don't have to do cd file_name everytime before doing npm start

# Pages
home.page.jsx (default.hoc.jsx)
movie.page.jsx (movie.hoc.jsx)
play.page.jsx (default.hoc.jsx)

# HOCs / Layouts
default.hoc.jsx
movie.hoc.jsx

# Components
Cast >> cast.component.jsx
Entertainment       >>  entertainmentCard.component.jsx
Hero Carousel       >>  heroCarousel.component.jsx
                    >>  arrows.components.jsx
Movie Hero          >>  movieHero.component.jsx
                    >>  movieInfo.component.jsx
Navbar              >>  navbar.component.jsx
                    >>  movieNavbar.component.jsx
Payment Modal       >>  payment.component.jsx
Play filters        >>  filters.component.jsx
Poster              >>  poster.component.jsx
Poster Slider       >>  posterSliders.component.jsx

# Tailwind CSS
Advanced features present on the top of Bootstrap
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
Run these two in the terminal, then add three lines in the index.css, then run the application
npm run start
className are also present here just like in Bootstrap

# Tailwind Shades
A website where you can find code to any mixture of shades you want

# React Slick
A library for Carousel
npm install react-slick
npm install slick-carousel
Install the react slick and the slick carousel and then import some instructions in app.js after removing some negations in the start

# React Axios
Promise based HTTP client for the browser and node.js, main connection between APIs
npm i axios

# Headless UI
Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
npm install @headlessui/react

# React Icons
Just like font-awesome icons, react also has its own icons
npm install react-icons
To get any icons from here, just import the code that is written on the official website

# Browser Router
It is a standard library for routing in React.
It enables navigation between views from different components in a React application, allows the browser URL to be changed, and keeps the UI in sync with the URL.
npm i react-router-dom
After installation, import the package in index.js

SELF NOTES
We write components such as layouts, pages etc. You should write the basic structure yourself but for shortcut u can just type 'rafce' and get the entire basic structure.
RAFCE stands for returnArrowFunctionExportComponent.
The workflow goes like this, Index.js calls app, in app.js by-default the url is '/' soo it'll call home page, but homepage is wrapped within defualtHOC soo it'll call default defaultHOC, that'll call the navbar component and soo on.
If we change the url to '/plays', it'll call the play page, every other call is same along with the output, just the home page output will change to play page.
Same when the url is '/movies', it'll take the flow to movie page and movieNavbar.
When we pass 'props', we also pass a certain 'config' information for all the props.
Whenever you use $ symbol, use `${}`

Continue Day-56