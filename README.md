# tailwind-restaurant
A responsive website build with tailwind css.

#### How to use talwind css
+ first install node js in your computer 
+ Install npm packages as a default or step by step.
```js
npm init -y //default

npm init
```

+ Install tailwind css in your project 
```js
npm install tailwindcss
```
You will see tailwind css added as a dependency inside your package.json file

+ Create and run a build script for tailwind css styles by :
```json
"build-css": "tailwindcss build src/style.css -o public/style.css"
```
```js
npm run build-css
```
Now you can start coding html as you add tailwindcss classes

#### How to install tailwindcss config file
+ In your terminal run the code below
```js
 npx tailwindcss init --full
```
Tailwind config js file will be installed in your project

+ Go to the tailwind config js file and add your Styles.
```js
fontSize: {
      mainFont: '1.25rem',
      secondaryFont: '2rem',
      textFont: '2.5rem',
    },
```

+ Run the bild-css in your terminal.

#### Creating your own tailwind config file
```js
npx tailwindcss init
```
+ Inside the file you can add your own styles

```js
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
```
+ Run the build command to update your public stylesheet file.
```js
npm run build-css
```
#### How to create a custom class selector
In the style.css file where you imported your tailwind css components, add a  collection of the classes, into one  and use @apply to initiate them. @apply acts like a mixin for tailwind css.
```js
.card{
    @apply bg-white rounded overflow-hidden shadow-md relative;
}
```