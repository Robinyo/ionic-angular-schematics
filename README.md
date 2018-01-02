# Getting Started with @ionic-angular/schematics

## Table of Contents

* [Installation](#installation)
* [Goals](#goals)
* [Generating a New Project](#generating-and-serving-an-ionic-project-via-a-development-server)
* [Generating Pages and Services](#generating-pages-and-services)

### Prerequisites

Install Schematics globally using npm:

```bash
npm install -g @angular-devkit/core
npm install -g @angular-devkit/schematics
npm install -g @schematics/schematics
npm install -g rxjs
```

Install the Angular CLI globally using npm:
```bash
npm install -g @angular/cli
```

## Installation

To install @ionic-angular/schematics globally using npm:

```bash
npm install -g @ionic-angular/schematics
```

To add @ionic-angular/schematics to a project using npm:

```bash
npm install @ionic-angular/schematics --save-dev
```

**Note:** Add the following to your project's `.angular-cli.json` to define a default collection:

```json
"defaults": {
  "schematics": {
    "collection": "@ionic-angular/schematics"
  },
  ...
}
```

## Goals
- A standardised project structure: What the Angular Style guide discribes in the 
[Overall structural guidelines](https://angular.io/guide/styleguide#overall-structural-guidelines)

```bash
    ├── <PROJECT_ROOT>
        └── /src
            └── /app                  - App Module 
                ├── app.component.ts
                ├── app.html
                ├── app.module.ts
                ├── app.scss
                ├── main.ts
                └── /core             - Core Module
                └── /pages            - Feature Modules
                    └── /home        

                └── /shared           - Shared Module
            └── /assets
            └── /theme          
            ├── index.html
            ├── manifest.json
            ├── service-worker.js
        └── /resources
        └── /www
            └── /assets
            └── /build   
            ├── index.html
            ├── manifest.json
            ├── service-worker.js
        ├── .editorconfig
        ├── .gitignore
        ├── config.xml
        ├── ionic.config.json      
        ├── package.json
        ├── tsconfig.json
        ├── tslint.json             
```
- Code scaffolding
- [Aliases](https://robferguson.org/blog/2017/11/22/working-with-typescript-webpack-and-ionic-3/)
- [Environment specific configuration](https://github.com/Robinyo/big-top#aliases-and-environment-specific-variables)
- [Dynamic Themes](https://robferguson.org/blog/2017/11/12/theming-your-ionic-3-app/)
- [Logging](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)
- [Unit and E2E Testing](https://robferguson.org/blog/2017/11/28/testing-your-ionic-3-app/)
- Baked in best practices that have been discovered by the community over time

See: https://robferguson.org/blog/2017/12/31/the-future-of-the-ionic-cli/

### Generating and serving an Ionic project via a development server
 
You can use the Schematics CLI to generate a new Ionic project:
 
```bash
schematics @ionic-angular/schematics:application --directory my-app --name myApp
cd my-app
ionic serve
```

You can use the `ng new` command to generate a new Ionic project:

```bash
ng new --collection=@ionic-angular/schematics my-app
```

See: https://robferguson.org/blog/2017/12/31/the-future-of-the-ionic-cli/

### Generating Pages and Services

You can use the Schematics CLI to generate Ionic components:

```bash
schematics @ionic-angular/schematics:page --name my-new-page
```

You can use the `ng generate` (or just `ng g`) command to generate Ionic components:

```bash
ng generate page --collection=@ionic-angular/schematics my-new-page
ng g page --collection=@ionic-angular/schematics my-new-page # using the alias
```

**Note:** Add the following to your project's `.angular-cli.json` to define a default collection:

```json
"defaults": {
  "schematics": {
    "collection": "@ionic-angular/schematics"
  },
  ...
}
```

You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
Page | `ng g page my-new-page`
Service | TODO

@ionic-angular/schematics will add a reference to `pages` in your project's `app.module.ts` file.
