# tailwind-iphone
It's a simple model of an iPhone made only with HTML and tailwind. This project was created to demonstrate the use of tailwindcss and how to create a simple model of an iPhone. In the next Projects, this content will be used to create some more features.

## Demo
[Demo](https://nxt-codes.github.io/tailwind-iphone/)

## Result
<img src="https://github.com/nxt-codes/tailwind-iphone/blob/main/src/assets/images/phone%20in%20hand.png" width="200" height="200" />

## Configuration
As we are using npm, create a package.json file if it doesn't exist:
```bash
npm init -y
```

Install the dependencies to use tailwindcss:
```bash
npm install -D tailwindcss postcss@latest autoprefixer@latest
npx tailwindcss init
```

In the tailwind.config.js file, add the following code:
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
npx tailwindcss -i ./style.scss -o ./style.css --watch
```

## Test
Add the following code to the index.html file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>iPhone</title>
</head>
<body>
  <h2 class="text-4xl font-extrabold text-black">iPhone-Test</h2>
</body>
</html>
```

```bash
npx tailwindcss -i ./style.scss -o ./style.css --watch
```
To test the project, open the index.html file in your browser.