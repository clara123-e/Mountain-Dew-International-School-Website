Mountain Dew International School Website

About This Project

This is a multi-page website built for Mountain Dew International School, a school based in Ghana whose motto is "A Journey to Excellence." The site is meant to serve as the school's online presence, giving parents, students, and visitors a clear place to learn about the school, get in touch, and eventually log in or sign up for school-related services.

This project was built as part of a weekly assignment for my Software Development course, and it also marks the start of my personal capstone project. I plan to keep building on this site in later modules, eventually turning it into a full stack application with a real backend and database.

What the Project Entails

The website currently includes five pages, all connected through client side routing so users can move between them without the page reloading:

- Home: A welcoming landing page introducing the school, with a short overview of what makes it stand out.
- About: Covers the school's mission, vision, and core values.
- Contact: Includes the school's contact details and a working contact form that collects a visitor's name, email, and message.
- Login: A login form for returning users, with an email field and a password field that includes a show and hide toggle.
- Sign Up: A registration form for new users, collecting first name, last name, email, password, and password confirmation, also with a show and hide password toggle.

Every page shares the same navigation bar and footer, so the experience feels consistent no matter where a visitor lands. The navbar includes the school's logo, name, and tagline, along with links to every page. The footer displays a copyright notice that updates its year automatically.

How It Is Expected to Operate

Right now, this is a front end only project. The login and sign up forms collect data and log it to the browser console when submitted, but nothing is saved anywhere yet since there is no backend or database connected. This is intentional at this stage. Down the line, I plan to connect these forms to a real backend so that account creation and login actually work, along with storing submitted contact messages somewhere useful instead of just the console.

Navigation is handled entirely on the client side using React Router, so switching between pages does not reload the browser or lose any state. All the styling is done with Tailwind CSS, and I set up custom colors that match the school's actual brand: a red, an ash grey, and a blue, all pulled directly from the school's logo.

Tech Stack

- **React** – for building the user interface as reusable components
- **Vite** – the build tool used to scaffold and run the project during development
- **Tailwind CSS** – for styling, using utility classes instead of writing custom CSS files
- **react-router-dom** – handles page navigation without full page reloads

About react-router-dom

`react-router-dom` is a routing library for React applications. Normally, a website with multiple pages requires the browser to reload every time you click a link, which resets everything and feels slow. React Router solves this by letting the app swap out what is shown on screen based on the current URL, without ever actually reloading the page.

In this project, `react-router-dom` is used to define five different routes, one for each page (Home, About, Contact, Login, and Sign Up). The `<BrowserRouter>` component wraps the whole app and enables this behavior, `<Routes>` holds all the possible paths, and each `<Route>` maps a specific URL (like `/about`) to the component that should render there. Instead of normal `<a>` tags for navigation inside the app, the navbar uses React Router's `<Link>` component, which updates the URL and swaps the page content instantly, without a full browser reload.

Project Structure

Running the Project Locally

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Run `npm run dev` to start the local development server
4. Open the local URL shown in the terminal (usually `http://localhost:5173`)

 Status

This is a work in progress. The pages and layout are complete for this stage of the assignment, but there is no backend yet, so login, sign up, and the contact form do not actually save any data. That will be added in a future module as the project grows into a full stack application.