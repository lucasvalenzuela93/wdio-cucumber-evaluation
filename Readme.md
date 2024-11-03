# Wdio Cucumber Evaluation

#### This framework is based on:
- [WebdriverIO](https://webdriver.io/) for web browser testing
- [Appium](https://appium.io/) for mobile testing

#### Uses:
- [Cucumber](https://cucumber.io/) as the testing framework and for BDD test case declaration
- The [Page Object](https://martinfowler.com/bliki/PageObject.html) design pattern

### Gherkin Feature Definitions
[Gherkin](https://cucumber.io/docs/gherkin/reference/) files are located in the [`./features`](./features) folder. These files contain the features-under-test definitions in a human-readable language.

### Step Definitions
The [step definitions](https://cucumber.io/docs/cucumber/step-definitions/) are found in the [`./steps`](./steps) folder. These scripts translate Gherkin steps into executable code.

### Page Objects
The [Page Objects](https://martinfowler.com/bliki/PageObject.html) can be found in the [`./pageobjects`](./pageobjects) folder.

## Pre-requisites
To run the tests in your local environment, ensure you have the following:
- Clone the repository to your local machine
- Node: This suite requires at least Node version 16. Run `node -v` in your CLI to check your current version.
- [JDK](https://www.oracle.com/java/technologies/downloads/)
- [Appium Doctor](https://www.npmjs.com/package/@appium/doctor) to check all prerequisites for running Appium tests in a local environment
- [Android Studio](https://developer.android.com/studio) for the Android emulator (More info [here](https://developer.android.com/studio/run/emulator))
- Run `npm install` to install all required dependencies

## How to Run
First, navigate to the repository folder using your terminal, then:

- For web tests, use the command: `npm run web`
  
- For Android tests:
  - Ensure you have an Android emulator running. You can create a new one and set the device name and Android version (platformVersion) in [`android.conf.js`](./config/android.conf.js) capabilities, or use the existing options:
    - 'appium:deviceName': 'Nexus_6P'
    - 'appium:platformVersion': '11.0'
  - This framework implements Appium service; ensure you do NOT have any Appium server running.
  - Finally, run Android tests with: `npm run android`
