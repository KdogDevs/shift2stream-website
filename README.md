# Shift2Stream Website

## Overview

Shift2Stream is a cutting-edge streaming solutions provider, offering high-quality streaming, advanced analytics, and flexible hybrid solutions. This repository contains the source code for the Shift2Stream website, built with React and TypeScript.

## Features

- Responsive design for optimal viewing on all devices
- Interactive animations using Framer Motion
- Integration with Material-UI components
- Tailwind CSS for styling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

To install the Shift2Stream website locally, follow these steps:

1. Clone the repository:
git clone https://github.com/KdogDevs/shift2stream-website.git


2. Navigate to the project directory:
cd shift2stream-website


3. Install the dependencies:
npm install


## Usage

To run the website locally:

1. Start the development server:
npm run dev


2. Open your browser and visit `http://localhost:3000`

## Building for Production

To create a production build:

npm run build


The built files will be in the `dist` directory.

## Contributing

Contributions to the Shift2Stream website are welcome. Please adhere to the following steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Specify your license here, e.g., MIT, GPL, etc.]

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/KdogDevs/shift2stream-website](https://github.com/KdogDevs/shift2stream-website)

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## Workflows and Deployment

This repository uses GitHub Actions for various workflows and deployment processes. Below are the details of the workflows:

### Code Scanning

A GitHub Actions workflow is set up for code scanning to ensure the security and quality of the codebase. The workflow is defined in `.github/workflows/code-scanning.yml`. The identified code scanning issue has been resolved. The workflow for the security code scanning issue 1 is now public and correct. For more details, refer to the issue tracking link: [https://github.com/KdogDevs/shift2stream-website/security/code-scanning/1](https://github.com/KdogDevs/shift2stream-website/security/code-scanning/1).

### Automatic Releases

A GitHub Actions workflow is set up for automatic releases when a push is made to the `main` branch. The workflow generates release notes using `github/gh-release-notes@v0.2.0`. The workflow is defined in `.github/workflows/release.yml`.

### Branch Syncing

A GitHub Actions workflow is set up to sync the `dev` branch with the `main` branch. This ensures that all changes are staged in the `dev` branch before being merged into the `main` branch. The workflow is defined in `.github/workflows/sync-dev-main.yml`.

## Contribution Instructions

To contribute to this repository, please follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes (`git checkout -b feature/YourFeature`).
4. Make your changes and commit them (`git commit -m 'Add YourFeature'`).
5. Push your changes to your forked repository (`git push origin feature/YourFeature`).
6. Open a pull request from your forked repository to the original repository.
7. All pull requests must be approved by the repository owner before being merged.
8. Only the repository owner can edit the branches directly.

