# tailwind-iphone
It's a simple model of an iPhone made only with HTML and tailwind.

## Configuration
As we are using npm, create a package.json file if it doesn't exist:
```bash
npm init -y
```

Install the dependencies:
```bash
npm install -D tailwindcss postcss@latest autoprefixer@latest
npx tailwindcss init
```

tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{scss,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the following lines to the style.scss file:
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To compile the tailwindcss, run the following command:
```bash
npx tailwindcss -i ./src/style.scss -o ./src/style.css --watch
```