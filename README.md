# Selenium Sample Project

## Overview
This project utilizes **Selenium** for browser automation, enabling the testing of web applications across different browsers. The tests are managed by **Mocha**, a powerful JavaScript test framework, while **Allure** is used for generating visually appealing and comprehensive reports of test executions.

This setup demonstrates effective use of Selenium with JavaScript, including features like parallel test execution, cross-browser support, and detailed reporting.

## Key Features
- **Selenium**: Automated testing of web applications across multiple browsers.
- **Mocha**: A flexible JavaScript test framework that allows for organizing and running tests seamlessly.
- **Allure**: Generates rich test reports that provide insights into test execution and results.
- **Parallel Test Execution**: Run tests in parallel to speed up execution and optimize resource usage.
- **Cross-Browser Setup**: Easily switch between different browsers for testing purposes.
- **Screenshots on Failures**: Automatically captures screenshots when tests fail, enhancing debugging and providing visual context in Allure reports.

## Dependencies
Ensure all necessary dependencies are installed before running tests. Use the following command to install:

```bash
npm install
```

## Running Tests
To execute the tests, use the following command:

```bash
npm test
```

### Specifying the Browser
You can specify which browser to use for testing via an environment variable. This allows for flexible testing configurations. Use the following command to set the browser:

- For macOS and Linux:
  ```bash
  export BROWSER=chrome
  ```

- For Windows:
  ```bash
  set BROWSER=chrome
  ```

Only Firefox and Chrome are supported. If no environment variable is set, the tests will default to running in Chrome.

## Viewing Allure Reports
To view the Allure reports, first run the tests to generate the report files, then use the following command:

```bash
npm run allure-serve
```

This command starts a local server and opens the Allure report in your default web browser, allowing you to easily review the results and insights.

## Conclusion
This project is an excellent example of leveraging Selenium with JavaScript for effective web application testing. With features like parallel execution, cross-browser setup, screenshots on failures, and detailed reporting through Allure, it serves as a robust foundation for automated testing efforts.
