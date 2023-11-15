# Fyle Frontend development challenge
Challenge outline: Github Repositories listing page

## Prerequisites

Before running the application and unit tests, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): The runtime environment for running Angular applications.
- [Angular CLI](https://angular.io/cli): The command-line interface for Angular applications.

## Installation

1. Clone the GitHub repository to your local machine:

   ```
   git clone https://github.com/sonalikari/fyle-internship-challenge-23.git
   ```

2. Navigate to the project's root directory:

   ```
   cd fyle-internship-challenge-23
   ```

3. Install the project dependencies using npm:

   ```
   npm install
   ```

## Running The Server

To run the GitHub User Search Application, follow these steps:

1. Ensure you have completed the installation steps as mentioned above.

2. Open a terminal and navigate to the project's root directory if you're not already there.

3. Run the following command to start the application:

   ```
   ng serve
   ```

4. The application should now be running locally. Open your web browser and access the app at `http://localhost:4200/`.

## Running Unit Tests

The assignment requires unit tests with 100% code coverage for at least one component and one service. To run the unit tests, use the following commands:

1. For the service unit test:

   ```
   ng test --include=**/api.service.spec.ts
   ```

2. For the component unit test:

   ```
   ng test --include=**/app.component.spec.ts
   ```

Ensure that your unit tests achieve 100% code coverage, and you can view the code coverage report after running the tests.