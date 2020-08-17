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

+ Create a build script for tailwind css styles by :
```js
"build-css": "tailwindcss build src/style.css -o public/style.css"
```