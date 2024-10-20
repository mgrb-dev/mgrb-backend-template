# mgrb-backend-template

## Description

A backend template built with Express and Node.js to kickstart development quickly.

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd mgrb-backend-template
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

### Development

To start the development server:

```sh
npm run start:dev
```

### Production

To build the project:

```sh
npm run build
```

To start the production server:

```sh
npm start
```

### Testing

To run tests:

```sh
npm test
```

## Scripts

- `start:dev`: Starts the development server with hot-reloading.
- `build`: Compiles TypeScript to JavaScript and replaces paths.
- `start`: Starts the production server.
- `test`: Runs tests using Jest.
- `lint`: Lints the code using ESLint.
- `format`: Formats the code using Prettier.
- `clean`: Cleans the build and coverage directories.
- `purge`: Removes the `node_modules` directory.

## License

This project is licensed under the MIT License.