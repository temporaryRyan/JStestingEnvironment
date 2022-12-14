# Testing Environment with Jest and ESLint

##### By: Ryan Duff

## Description:

This is simply a testing/linting environment using Jest and ESLint. Babel is used to translate ES6 code for use with Jest. For the sake of simplicity Webpack is not included. 

## Setup

* Clone or download this repository onto your desktop
* Navigate to top-level of the directory via the command line.
* Run the command: `$ npm install`
* All JS files should be placed in the `src` directory. 
* All test files should be placed in the `_tests_` directory. 
* To get you started there is an example file `src/deepClone.js` that is being tested by `_tests_/deepClone.test.js`. Your own files should follow this naming convention ie: `src/fileToTest.js` should be tested by `_tests_/fileToTest.test.js`
* Run tests in the terminal with the command: `npm run test`
* Run ESLInt in the terminal with the command: `npm run lint`

## Node and NPM Versions used in creating this repository:
* `$ node -v`: v18.11.0
* `$ npm -v`: 8.19.2

## License

[MIT](https://opensource.org/licenses/MIT)


Copyright (c) 2022 Ryan Duff
