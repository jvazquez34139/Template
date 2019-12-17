# Template
 #### Basic node.js website packet

 This includes dependencies for gulp automation, express and parsers, template folder routes, and a basic running express app.

## Express App
  #### Includes an `app.js` file. This is the main server file.

  Open to directory `$node app.js` to start server and begin development.

  `/routes` holds an `index.js` file that route manages the `/` route and a `/sanity`.

  This basic app uses pug as its rendering engine.
## Gulp Automation
  #### Gulp is set up to run several automation tasks and the `package.json` has several gulp packages as dev-dependencies.

  `$gulp test`

    Runs a basic sanity to ensure that gulp was installed correctly

  `$gulp concatScripts`

    Collects all scripts that can be concatenated into a single script for a specific page or function.

    This can be copied and renamed for several concatenated scripts for different pages or uses.

  `$gulp minifyJS`

    Runs `concatScripts` and then compresses into an  `app.min.js`

    This can be modified to rename the `app.min.js`

  `$gulp compileSass`

    Compiles sass files to css in a `main.css` file in `/public/css`

    This also comes with maps for debugging

  `$gulp minifyCSS`

    Runs `compileSass` then compresses `main.css` into `main.min.css`

  `$gulp watchCSS`

    Watches for any changes on the sass files to run the `minifyCSS` gulp task

  `$gulp watchFiles`

    Watches for changes in either the js files to run the `minifyJS` gulp task, or sass files to run the `minifyCSS` gulp task

  `$gulp clearJS`

    Deletes the `app.js` and `app.min.js` files

  `$gulp clearCSS`

    Deletes the `/public/css` folder

  `$gulp clean`

    Deletes everything generated through gulp

    Can be modified to delete additional files

  `$gulp`

    runs `clean` > `minifyJS`, `minifyCSS` > and creates `/dist` with only the files needed to run the app, excluding scss files, development related files, and is a ready copy for deployment.

## Basic Directory Layout
