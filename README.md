# Selenium sample project

## Overview
This project utilizes **Selenium** for browser automation and **Mocha** for running tests. The test results are reported using **Allure**, providing a comprehensive view of the test execution.

## Testing Frameworks
- **Selenium**: For automated testing of web applications.
- **Mocha**: JavaScript test framework for running tests.
- **Allure**: Report generation tool to visualize test results.

## Running Tests
To execute the tests, use the following command:

```bash
npm test
```

## Viewing Allure Reports
To view the Allure reports, first run the tests to generate the report files, then use the following command:

```bash
npm run allure-serve
```

This will start a server and open the Allure report in your default web browser.

## Dependencies
Make sure to install the necessary dependencies:

```bash
npm install
```