# nodejs-backend-template

## Description

A backend template built with Express and Node.js to accelerate the development process.

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Scripts](#scripts)
- [Docker Commands](#docker-commands)
- [License](#license)

## Prerequisites

- Node.js (>= 22.x)
- npm (>= 10.x)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd nodejs-backend-template
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
- `lint`: Lints the code using ESLint.
- `lint:fix`: Fixes linting issues using ESLint.
- `test`: Runs tests using Jest.
- `test:watch`: Runs tests in watch mode.
- `format`: Formats the code using Prettier.
- `check-format`: Checks if the code is formatted using Prettier.
- `clean`: Removes the build directory.
- `purge`: Removes the node_modules directory and clears the npm cache.
- `prepare`: Installs Husky hooks.

## Docker Commands

### Build the Docker image

```sh
# Build the Docker image
docker build -t nodejs-backend-template .

# Run the Docker image
docker run -d --name nodejs-backend-template-container -p 8080:8080 nodejs-backend-template

# Check the logs
docker logs nodejs-backend-template-container

# Stop and remove the container
docker stop nodejs-backend-template-container
docker rm nodejs-backend-template-container
```

## License

This project is licensed under the MIT License.
