# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### What I learned

I learned how to style a checkbox into a toggle button with CSS.

```css
#theme-toggle {
  cursor: pointer;
  position: relative;
  width: 3.75rem;
  height: 1.6875rem;
  border-radius: 25px;
  outline: none;
  background-color: hsl(230, 22%, 74%);
  -webkit-appearance: none;
  transition: background 0.3s rgba(0, 0, 0, 0.15);
}

#theme-toggle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 76%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 1.35rem;
  width: 1.35rem;
  background-color: white;
  transition: left 0.4s;
}

#theme-toggle:checked:after {
  left: 24%;
}

#theme-toggle:hover {
  cursor: pointer;
}
```
