
# Exercise Evaluation Lucas Valenzuela

#### This framework it based on: [Webdriverio](https://webdriver.io/) for web browser testing

#### Uses:
* [Cucumber](https://cucumber.io/) as the testing framework and for BDD test case declaration.
* The [Page Object](https://martinfowler.com/bliki/PageObject.html) design pattern.

### Gherkin Feature Definitions
[Gherkin](https://cucumber.io/docs/gherkin/reference/) files are found in the [`./features`](./features) folder.
Those are the features-under-test definition in a human readable language.

### Step Definitions
The [step definitions](https://cucumber.io/docs/cucumber/step-definitions/) files are found in the [`./steps`](./steps) folder.
The step definitions are the scripts that _translate_ Gherkin steps into executable code.

### Page Objects
The [Page Objects](https://martinfowler.com/bliki/PageObject.html) are found in the [`./pageObjects`](./pageObjects) folder.

## Pre-requisites
##### In order to run the tests in your local environment you would need to have:
* Node: This suite should run using at least Node version 16. Go to you CLI and do a `node -v` and you should be able to see which version are you running.
* [JDK](https://www.oracle.com/java/technologies/downloads/)
* Clone repo in your local
* Made a `npcm ci` or `npm install` to install al required dependencies

## How to run tests locally
Using a terminal move to repo folder and using the following command `npm run wdio` for desktop chrome browser
