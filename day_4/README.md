JEST is a unit testing framework. It was created by facebook
It was intended to be used with react framework
Looking at its feature is widely adapted across javascript testing
JEST should be installed as Dev dependency

Steps to install Jest:
1. Create a folder
2. Open same folder in a termianl & Run following command
npm init -y
3. Install Jest as dev dependency
   npm install --save-dev jest
4. Open paceage.json & within the scripts part the test operation to Jest
"scripts": {
    "test": "jest"
  },
5. The above tesp implies that when we run 'npm run test' Jest will be invoked.
Jest will check for any test cases & if present will run it.

we generally organise test cases into logic group known as test suite
with respect to Jest we create test suite using describe function 
describe function takes 2 arguments.
1. name of the test suite
2. a function which further consists of test cases

To create a test case we make use of test function.
Test function takes 2 arguments.
1. the name of the test case
2. a function which would include the logic of the test case

expect function is provided by Jest & it is used to take a result as argument
to skip a test we can put 'x' before test

npm run test -f “truth.test.js ” — -t “String”
