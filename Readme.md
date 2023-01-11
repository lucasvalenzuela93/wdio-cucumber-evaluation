
# Wdio Cucumber Evaluation

#### This framework is based on: [Webdriverio](https://webdriver.io/) for web browser testing and [Appium](https://appium.io/) for mobile testing

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
The [Page Objects](https://martinfowler.com/bliki/PageObject.html) are found in the [`./pageobjects`](./pageobjects) folder.

## Pre-requisites
##### In order to run the tests in your local environment you would need to have:
* Clone repo in your local
* Node: This suite should run using at least Node version 16. Go to you CLI and do a `node -v` and you should be able to see which version are you running.
* [JDK](https://www.oracle.com/java/technologies/downloads/)
* [Appium doctor](https://www.npmjs.com/package/@appium/doctor) in order to check all requisites to run appium test in a local enviroment
* [Android studio](https://developer.android.com/studio) for android emulator (More info [here](https://developer.android.com/studio/run/emulator))
* Made a `npm install` to install al required dependencies


## How to run
First of all, using a terminal move to repo folder, and then:

* For web test: use the command `npm run web`

* For android tests:
  * Make sure to have up an android emulator, create a new one and set device name and android version (platformVersion) in [`android.conf.js`](./config/android.conf.js) capabilities
  or you can use the existing:
    - 'appium:deviceName': 'Nexus_6P',
    - 'appium:platformVersion': '11.0',
  * This framework implements appium-service, in order to run android tests make sure to NOT have any appium server up
  * Finally you can run android tests with `npm run android` 
