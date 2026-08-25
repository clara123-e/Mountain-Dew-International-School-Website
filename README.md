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

Understanding How Components Change

While building this project, three related React concepts came up a lot: how a component's state changes, how components mount and unmount, and what actually causes a component to re-render. Here is what I learned about each one, using real examples from this project.

1. How a Component Changes State

State is data that a component keeps track of and can change over time, like whether a password is currently visible, or what a user has typed into a form. In React, you do not change state directly. Instead, you call a special "setter" function that React gives you when you create the state with `useState`.

Example from this project:** In `Login.jsx`, the password visibility toggle works like this:

```jsx
const [showPassword, setShowPassword] = useState(false);

<button onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? "🙈" : "👁️"}
</button>
```

Here, `showPassword` is the state, and `setShowPassword` is the only way to change it. Every time the button is clicked, `setShowPassword` flips the value from `true` to `false` or back, and React re-renders the component to reflect the new value.

2. How a Component Mounts and Unmounts

Mounting is when a component first appears on the screen. Unmounting is when it is removed from the screen completely, for example when the user navigates to a different page.

Example from this project:** Every time a user visits `/dashboard`, the `Dashboard` component mounts. If the user then clicks a link to go to `/about`, the `Dashboard` component unmounts (it is completely removed from the page), and the `About` component mounts in its place.

This matters because a component's state does not survive an unmount. If I had a counter inside `Dashboard` and the user navigated away and came back, the counter would reset to its starting value, since a brand new instance of the component mounts each time.

### 3. What Triggers a Re-render

A re-render is when React updates what is shown on the screen because something changed. A component re-renders when:

- Its own state changes** (calling a setter function like `setShowPassword` above)
- Props it receives change** (data passed in from a parent component)
- Context it is subscribed to changes** (for example, when `isAuthenticated` changes in `AuthContext`, every component using `useAuth()` re-renders)
- Its parent component re-renders** (children usually re-render when their parent does, unless optimized otherwise)

Example from this project:** When a user logs in through `Login.jsx`, the `login()` function updates `isAuthenticated` inside `AuthContext`. Because `AuthLayout.jsx` reads `isAuthenticated` through `useAuth()`, it re-renders immediately, and the condition inside it now allows the `Dashboard` page to render instead of redirecting to `/login`.

```jsx
const { isAuthenticated } = useAuth();

if (!isAuthenticated) {
  return <Navigate to="/login" replace />;
}
```

Passing Data Between Pages with useNavigate

React Router's `useNavigate` hook can carry a small piece of data along when navigating to a new page, using a second argument called `state`.

Example from this project:** After a user logs in, `Login.jsx` passes their email to the Dashboard like this:

```jsx
navigate("/dashboard", { state: { email: formData.email } });
```

The `Dashboard` page then reads that data back out using `useLocation`:

```jsx
const location = useLocation();
const email = location.state?.email;
```

This lets the Dashboard greet the user by the email they just logged in with, without needing a backend or database to store that information yet.