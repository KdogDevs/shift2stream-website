# .github/dependabot.yml

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
    # Specify labels for pull requests
    labels:
      - "npm dependencies"
      - "dependabot"
    # Limit the number of open pull requests for npm dependencies
    open-pull-requests-limit: 10
    # Set version requirement update strategy
    versioning-strategy: auto
    # Allow up to 5 open pull requests for npm dependencies
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      separator: "-"
    # Specify reviewers for pull requests
    reviewers:
      - "KdogDevs"
    # Specify commit message preferences
    commit-message:
      prefix: "npm"
      include: "scope"
    # Specify Vite version upgrade
    allow:
      - dependency-name: "vite"

  # Enable version updates for GitHub Actions
  - package-ecosystem: "github-actions"
    # Look for `.github/workflows` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
    # Specify labels for pull requests
    labels:
      - "github-actions"
      - "dependabot"
    # Allow up to 5 open pull requests for github-actions dependencies
    open-pull-requests-limit: 5
