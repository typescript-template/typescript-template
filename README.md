# TypeScript Template

Scaffold a typescript app/cli/library with the modular TypeScript Template, and keep it up to date with the template update tool!

## Getting Started

1. Install the TypeScript Template globally `npm i -g typescript-template-cli`

## Choose a Template Type

- **base** - Base project with npm, typescript, linting + formatting, and script-running setup
- **jasmine** - Base project + Jasmine testing 
- **node** - Node application
- **lib** - npm Module / Library
- **cli** - npm CLI Application

### Base Setup

Includes:
- TypeScript
- ESLint + Prettier
- Documentation Files (Changelog, Readme)
- Scripts Runner
- VSCode Config + Debug

Create: `tstemplate create base PROJECT_NAME`

### Node App

Includes:
- Base Setup + Jasmine
- App Bootstrapping (ts-async-bootstrap)
- .env/Environment Schema Support (ts-appconfig)
- Error Handler
- Logger
- Main Entrypoint

Create: `tstemplate create node PROJECT_NAME`

### Library

Includes:
- Base Setup + Jasmine
- Prep, Pack, and Publish Automation
- NPM Deployment Automation

Create: `tstemplate create lib PROJECT_NAME`

### CLI

Includes:
- Base Setup + Jasmine + Library
- Command Line Setup

Create: `tstemplate create cli PROJECT_NAME`

### Jasmine

Includes:
- Base Setup
- Jasmine Test Runner
- Spec Setup

Create: `tstemplate create jasmine PROJECT_NAME`

## Keeping your project up to date

Update your project with `tstemplate update PROJECT_TYPE`

## Contributing & Development

See [contributing.md](docs/contributing/contributing.md) for information on how to develop or contribute to this project!
