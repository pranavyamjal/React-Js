## Installing and Creating a React Project (Core react ! bundlers like vite || parcel)

 1. npm should be already installed 
     if ! (sudo apt install npm)

 2. npx create-react-app 01BasicReact
    Cannot create a project named "01BasicReact" because of npm naming restrictions:
     * name can no longer contain capital letters

 3. npx create-react-app 01basicreact


 # How to View React Project Files

  1. Entry point is always {package.json}

  2. src contains the main development logic and UI

  3. To run {npm run build}
      Which creates a build folder and in which the all static asserts and all javascript written in react is converted here

  4. build folder is the one which is the production product and is served to end-users ! src

# Why we use bundlers

 Bundlers are used in React.js to improve the performance and reduce the loading times of React applications.

*Here are some of the reasons why we use bundlers in React.js:*

**To combine multiple JavaScript files into a single file.**

This can reduce the number of HTTP requests that need to be made to load the application, which can improve performance.


**To minify and optimize the JavaScript code.**

This can reduce the size of the JavaScript file, which can also improve performance.


**To transpile the JavaScript code to a version that is compatible with older browsers.**

This can make the application more accessible to a wider range of users.


**To manage dependencies.**

Bundlers can help to manage the dependencies of a React application, which can make it easier to develop and maintain the application.

**Some of the popular bundlers used in React.js are:
Webpack, Parcel, and Rollup.
These bundlers can be used to create a production-ready React application that is performant, accessible, and easy to maintain.**

# How to build and run a react project

    1. npm run build

    2. npm run start