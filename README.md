# Shift2Stream Website

## Overview

Shift2Stream is a cutting-edge streaming solutions provider, offering high-quality streaming, advanced analytics, and flexible hybrid solutions. This repository contains the source code for the Shift2Stream website, built with React and TypeScript.

## Features

- Responsive design for optimal viewing on all devices
- Interactive animations using Framer Motion
- Integration with Material-UI components
- Tailwind CSS for styling

## Prerequisites

Before you begin, ensure you have met the following 
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

A GitHub Actions workflow is set up for automatic releases when a push is made to the `main` branch. The workflow generates release notes using `softprops/action-gh-release@v1`. The workflow is defined in `.github/workflows/release.yml`.

#### Tag Creation Step

The automatic release workflow now includes a step to create a tag before running the release step. This ensures that a tag is always available for the GitHub Releases action. The tag is created based on the current date and time.

### Branch Syncing

A GitHub Actions workflow is set up to sync the `dev` branch with the `main` branch. This ensures that all changes are staged in the `dev` branch before being merged into the `main` branch. The workflow is defined in `.github/workflows/sync-dev-main.yml`.

### Auto-Passing on Non-Main Branches

A GitHub Actions workflow is set up to auto pass on non-main branches. The workflow is defined in `.github/workflows/auto-pass.yml`.

### Permissions Settings for GitHub Actions Workflows

To adhere to the principle of least privilege, the following permissions settings have been applied to the GitHub Actions workflows:

- The `.github/workflows/release.yml` workflow specifies `permissions: contents: read, issues: write`.
- The `.github/workflows/sync-dev-main.yml` workflow specifies `permissions: contents: read, pull-requests: write`.

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

## Auto-Release Workflow

A new GitHub Actions workflow has been added to handle automatic releases whenever a PR is merged with the main branch. The release notes for each release are auto-generated using Copilot. The workflow is defined in `.github/workflows/release.yml`.

### Copilot Integration for Release Notes

The auto-release workflow leverages GitHub Copilot to generate release notes. This ensures that the release notes are comprehensive and accurately reflect the changes made in each release.

## Creating a Personal Access Token (PAT)

To ensure that the GitHub Actions bot has the necessary permissions to push the tag to the repository, follow these steps to create a personal access token (PAT):

1. Go to GitHub Settings and generate a new token with `repo` scope.
2. Store the PAT as a secret in your repository settings.

## Storing the PAT as a Secret

To store the PAT as a secret named `PAT` in the repository settings, follow these steps:

1. Go to your repository's settings.
2. Navigate to the "Secrets" section.
3. Create a new secret called `PAT` and paste the generated token.

## Updating the Workflow File

To update the workflow file to use the PAT for authentication, follow these steps:

1. Open the `.github/workflows/release.yml` file.
2. Locate the `Create Tag` step.
3. Update the `env` section to use `GITHUB_TOKEN: ${{ secrets.PAT }}`.
4. Save the changes and commit the updated workflow file.
