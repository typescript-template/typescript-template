# TypeScript Template

Scaffold a typescript app/cli/library with the modular TypeScript Template, and keep it up to date with the template update tool!

## Getting Started

1. Install the TypeScript Template globally `npm i -g @typescript-template/cli`

## Choose a Template Type

- **[Base](#base-templates)**
    - **[base](#base-setup)** - Base project with npm, typescript, linting + formatting, and script-running setup  
    - **[jasmine](#jasmine)** - Base project + Jasmine testing  
    - **[node](#node-app)** - Node application  
    - **[lib](#library)** - npm Module / Library  
    - **[cli](#cli)** - npm CLI Application  

- **[Backend](#back-end)**
    - **[riao](#riao-app)** - @riao/dbal database app  
    - **[rest](#rest-api)** - @riao/rest database api  

- **[Frontend](#front-end)**
    - **[angular](#angular)** - Angular app  
    - **[vite](#vite)** - Typescript build for browser  
    - **[electron](#electron)** - Electron desktop app  
    - **[three](#threejs)** - ThreeJS 3D app  
    - **[chrome](#chrome-extension)** - Chrome extension  

### Custom Repo

URL:

`tstemplate create remote PROJECT_NAME --remoteUrl=ssh://github.com/my-org/my-project.git`

Local Repo & Branch:

`tstemplate create remote PROJECT_NAME --remoteUrl=D:/Dev/my-project/.git --branch=main`

## Base Templates

### Base Setup

Create a blank project with linting, docs, typescript setup, etc.

Includes:
- TypeScript
- ESLint + Prettier
- Documentation Files (Changelog, Readme)
- Scripts Runner
- VSCode Config + Debug

**Create**: `tstemplate create base PROJECT_NAME`

### Node App

Create a blank node app.

Includes:
- Base Setup + Jasmine
- App Bootstrapping ([ts-async-bootstrap](https://www.npmjs.com/package/ts-async-bootstrap))
- .env/Environment Schema Support ([ts-appconfig](https://www.npmjs.com/package/ts-appconfig))
- [Error Handler](https://www.npmjs.com/package/ts-error-handler)
- [Logger](https://www.npmjs.com/package/ts-tiny-log)
- Main Entrypoint

**Create**: `tstemplate create node PROJECT_NAME`

### Library

Create a blank typescript library

Includes:
- Base Setup + Jasmine
- Prep, Pack, and Publish Automation
- NPM Deployment Automation

**Create**: `tstemplate create lib PROJECT_NAME`

### CLI

Create a command-line app

Includes:
- Base Setup + Jasmine + Library
- Command Line Setup

**Create**: `tstemplate create cli PROJECT_NAME`

### Jasmine

Create a blank project with jasmine tests

Includes:
- Base Setup
- Jasmine Test Runner
- Spec Setup

**Create**: `tstemplate create jasmine PROJECT_NAME`

## Back-end

### Riao App

Create a node app with a @riao/dbal database

Includes:
- [@riao/dbal](https://www.npmjs.com/package/@riao/dbal)
- [@riao/mysql](https://www.npmjs.com/package/@riao/mysql)

**Create**: `tstemplate create riao PROJECT_NAME `

### Rest API

Create a rest api with @riao/rest

Includes:
- [@riao/dbal](https://www.npmjs.com/package/@riao/dbal)
- [@riao/rest](https://www.npmjs.com/package/@riao/rest)
- [api-machine](https://www.npmjs.com/package/api-machine)
- [valsan](https://www.npmjs.com/package/valsan)

**Create**: `tstemplate create rest PROJECT_NAME`

## Front-end

### Angular

Create an angular app

Includes:
- Angular app

**Create**: `tstemplate create angular PROJECT_NAME`

### Vite

Create a front-end app using vite build

Includes:
- Vite
- HTML5 Front-end starter

**Create**: `tstemplate create vite PROJECT_NAME`

### Electron

Create a desktop app using Electron

Includes:
- Electron

**Create**: `tstemplate create electron PROJECT_NAME`

### ThreeJS

Create a 3D app using ThreeJS

Includes:
- ThreeJS

**Create**: `tstemplate create three PROJECT_NAME`


### Chrome Extension

**Create**: a chrome-extension

Includes:
- Chrome extension boilerplate

**Create**: `tstemplate create chrome PROJECT_NAME`


## Keeping your project up to date

Update your project with `tstemplate update PROJECT_TYPE`

## Contributing & Development

See [contributing.md](docs/contributing/contributing.md) for information on how to develop or contribute to this project!
