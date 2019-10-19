## E2E tests
The file [we2e-test.js](we2e-test.js) contains e2e tests for endpoint addition and deletion.
For this purpose the [protractor](http://angular.github.io/protractor) framework is used. Before running the tests,
make sure that you have executed the command
```
$ ./node_modules/protractor/bin/webdriver-manager update
```
under the project's root directory. The webdriver-manager is a helper tool to easily get an instance 
of a Selenium Server running. To run the tests, execute the _protractor_ grunt task under the project's 
root directory

```
$ grunt protractor
```