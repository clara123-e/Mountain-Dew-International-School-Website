# My React So Far

This file documents the React conventions I have used while building the Mountain Dew International School website, why I used them, how they work, and where I used each one in this actual project.

## 1. Functional Components

Every piece of UI in this project is written as a function that returns JSX. I did not use any class components.

**Why:** Functional components are shorter, easier to read, and are the standard way React is written today, especially now that hooks exist.

**Example:** Almost every file in `src/pages` and `src/components` follows this pattern, like `Home.jsx`:

```jsx
function Home() {
  return (
    <div>
      <h1>Welcome to Mountain Dew International School</h1>
    </div>
  );
}

export default Home;
```

## 2. useState

`useState` lets a component keep track of data that can change over time, and re-renders the component whenever that data changes.

**Why:** Forms, toggles, and anything interactive need to remember what the user has done.

**Example:** In `SignUp.jsx`, I use it to store all the form fields in one object:

```jsx
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
```

## 3. Import and Export

Every component lives in its own file and is shared using `export default`, then brought into other files using `import`.

**Why:** This keeps each piece of the app in its own file instead of one giant file, and makes it clear where each component comes from.

**Example:**

```jsx
// at the bottom of Navbar.jsx
export default Navbar;

// in App.jsx
import Navbar from "./components/Navbar";
```

## 4. Props

Props let a parent component pass data down into a child component.

**Why:** It lets components stay generic and reusable instead of hardcoding everything inside them.

**Example:** The `AuthProvider` component in `AuthContext.jsx` accepts `children` as a prop, so it can wrap around anything:

```jsx
export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

## 5. Conditional Rendering

This is showing different content depending on some condition, using things like the ternary operator (`? :`) or `&&`.

**Why:** The UI often needs to look different depending on state, like whether a password is visible or whether a form was submitted.

**Example:** In `Login.jsx`, I show a success message only if the form has been submitted:

```jsx
{submitted && (
  <p className="text-green-600 text-sm text-center mt-2">
    Logged in successfully. Check the console.
  </p>
)}
```

## 6. The .map() Function to Render Lists

`.map()` is a normal JavaScript array method, but in React it is commonly used to turn a list of data into a list of components.

**Why:** Instead of writing a `<Route>` by hand for every single page, I can define my pages as data and generate the routes automatically.

**Example:** In `AppRoutes.jsx`:

```jsx
{unauthRoutes.map((route) => (
  <Route key={route.path} path={route.path} element={route.element} />
))}
```

## 7. Controlled Inputs

A controlled input is one whose value is always tied directly to a piece of state, rather than the browser managing it on its own.

**Why:** This lets React always know exactly what is inside every input, which is needed for things like checking that two password fields match.

**Example:** In every form in this project, inputs follow this pattern:

```jsx
<input
  type="email"
  value={formData.email}
  onChange={(e) => handleChange("email", e.target.value)}
/>
```

## 8. Custom Hooks

A custom hook is a function that starts with "use" and lets you reuse logic across components, often built on top of React's own hooks.

**Why:** Instead of every component needing to know how `AuthContext` works internally, they can just call one simple function.

**Example:** In `AuthContext.jsx`:

```jsx
export function useAuth() {
  return useContext(AuthContext);
}
```

Then any component can use it like this:

```jsx
const { isAuthenticated, login, logout } = useAuth();
```

## 9. React Context

Context lets you share data across many components without manually passing props down through every layer in between.

**Why:** Login status needs to be checked in many unrelated places (the Sidebar, the protected route wrapper, the Dashboard), and passing it down as props through every layer would be messy.

**Example:** `AuthContext.jsx` creates the context, and `AuthLayout.jsx` reads from it to decide whether to show a page or redirect:

```jsx
const { isAuthenticated } = useAuth();

if (!isAuthenticated) {
  return <Navigate to="/login" replace />;
}
```

## 10. Component Composition (Layout Wrappers)

This means building bigger pieces of UI by combining smaller components together, rather than repeating the same layout code on every page.

**Why:** Every public page needed the same Navbar and Footer, and every authenticated page needed the same Sidebar. Instead of copying that code into five different files, I built one layout component for each case.

**Example:** `UnauthLayout.jsx` wraps around whichever page is active using React Router's `Outlet`:

```jsx
function UnauthLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
```

## 11. useNavigate and useLocation

`useNavigate` lets you move a user to a different page from inside your code, instead of waiting for them to click a link. `useLocation` lets you read information about the current page, including any data that was passed along during navigation.

**Why:** After logging in, I wanted to automatically send the user to the Dashboard instead of making them click something else.

**Example:** In `Login.jsx`:

```jsx
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  login(formData.email);
  navigate("/dashboard");
};
```

## In My Own Words

Building this project taught me that React is really about breaking a page into small, reusable pieces, and then deciding how those pieces should share information with each other. At first I was writing everything directly inside one component, like the sign up form, but as the project grew I learned to pull out anything that repeated, like the Navbar, Footer, and Sidebar, into their own components so I was not rewriting the same code on every page.

The biggest shift in how I think about React came from working with `AuthContext`. Before that, I was passing data between components using props or through `useNavigate`'s state option, which only works for a single page-to-page handoff. Once I needed the same piece of data (whether someone is logged in, and their email) available in many different, unrelated components at once, I understood why Context exists. It felt like giving certain data a "home base" that any component can check in on, instead of manually relaying it through every layer in between.

I also better understand now why React Router's `Outlet` and my own `AuthProvider` both use `children` (or `Outlet`, which works similarly) in slightly different ways to solve the same kind of problem: letting a component wrap around content it does not know about ahead of time. That is the real idea behind a "Wrapper" component, and once I saw it in both places, the pattern made a lot more sense.

Packages I installed and used:

- **react-router-dom**: handles all navigation in this app without full page reloads. I used `BrowserRouter`, `Routes`, `Route`, `Link`, `Outlet`, `Navigate`, `useNavigate`, and `useLocation` from it.
- **tailwindcss**: used for all styling in this project through utility classes directly in the JSX, instead of writing separate CSS files for each component.