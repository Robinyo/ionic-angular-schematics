# Getting Started with @ionic-angular/schematics

## Table of Contents

* [Goals](#goals)
* [Installation](#installation)
* [Generating a new Project](#generating-and-serving-an-ionic-project)
* [Generating Pages and Services](#generating-pages-and-services)

## Goals
- A standardised Ionic project structure

  Aligned with the Angular Style guide's [Overall structural guidelines](https://angular.io/guide/styleguide#overall-structural-guidelines)

```bash
    ├── <PROJECT_ROOT>
        └── /src
            └── /app                           - App Module 
                ├── app.component.ts
                ├── app.html
                ├── app.module.ts
                ├── app.scss
                ├── main.ts
                └── /core                      - Core Feature Module
                └── /pages                     - Page Modules
                    └── /home
                        ├── home.page.html
                        ├── home.page.module.ts
                        ├── home.page.scss   
                        ├── home.page.spec.ts
                        ├── home.page.ts     
                └── /services                  - Services/Providers                                                                                                               
                └── /shared                    - Shared Feature Module (for your components, pipes, and directives)
            └── /assets
            └── /theme
                ├── variables.scss     
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

**Note:** See this [post](http://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/) re Shared Feature Module (Shared Common Modules) v Encapsulated Modules.

- [Code scaffolding](#generating-pages-and-services)
- [Aliases](https://robferguson.org/blog/2017/11/22/working-with-typescript-webpack-and-ionic-3/)
- [Environment specific configuration](https://github.com/Robinyo/big-top#aliases-and-environment-specific-variables)
- [Dynamic Themes](https://robferguson.org/blog/2017/11/12/theming-your-ionic-3-app/)
- [Logging](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)
- [Unit and E2E Testing](https://robferguson.org/blog/2017/11/28/testing-your-ionic-3-app/)
- Baked in best practices that have been discovered by the community over time

See: https://robferguson.org/blog/2017/12/31/the-future-of-the-ionic-cli/

## Installation

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

### Install @ionic-angular/schematics

#### Globally

To install @ionic-angular/schematics globally using npm:

```bash
npm install -g @ionic-angular/schematics
```

To set @ionic-angular/schematics as the default collection:

```bash
ng set defaults.schematics.collection @ionic-angular/schematics --global
```

To reset the default collection:

```bash
ng set defaults.schematics.collection @schematics/angular --global
```

**Note:** There is currently an issue with Schematics use of `require.resolve()` however there is a known workaround:

```bash
cd /usr/local/lib/node_modules/@angular/cli/node_modules
mkdir @ionic-angular
cp -R /usr/local/lib/node_modules/@ionic-angular/* @ionic-angular/
```

#### Locally

To add @ionic-angular/schematics to a project using npm:

```bash
npm install @ionic-angular/schematics --save-dev
```

The set @ionic-angular/schematics as the default collection update your project's `.angular-cli.json`:

```json
"defaults": {
  "schematics": {
    "collection": "@ionic-angular/schematics"
  }
}
```

You also need to add the Angular CLI to your project's `devDependencies`:

```bash
npm install @angular/cli@latest --save-dev
```

### Generating and serving an Ionic project
 
You can use the `ng new` command to generate a new Ionic project:

```bash
ng new --collection=@ionic-angular/schematics my-app
cd my-app
ionic serve
``` 
 
If you have set `@ionic-angular/schematics` as the default collection:

```bash
ng new my-app
cd my-app 
ionic serve
``` 
 
You can also use the Schematics CLI to generate a new Ionic project:
 
```bash
schematics @ionic-angular/schematics:application --directory my-app --name MyApp
cd my-app
npm install
ionic serve
```

### Generating Pages and Services

You can use the `ng generate` (or just `ng g`) command to generate Ionic pages:

```bash
ng generate page --collection=@ionic-angular/schematics pages/my-new-page
ng g page --collection=@ionic-angular/schematics pages/my-new-page # using the alias
ng g page pages/my-new-page # if @ionic-angular/schematics is the default collection
```

**Note:** @ionic-angular/schematics will add a reference to your generated `page` in your project's `app.module.ts` file.

You can also use the Schematics CLI to generate Ionic pages:

```bash
schematics @ionic-angular/schematics:page --name my-new-page
```

You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
Class | TODO
Component | TODO
Directive | TODO
Page | `ng g page pages/my-new-page`
Pipe | TODO
Service | TODO
Interface | TODO
Enum | TODO
Module | TODO

## Resources

## Angular 

* Angular docs: [Angular Style Guide](https://angular.io/guide/styleguide)
* GitHub: [Angular CLI](https://github.com/angular/angular-cli)
* GitHub: [Angular CLI Stories](https://github.com/angular/angular-cli/wiki/stories)

## Ionic 

* Ionic docs: [Ionic CLI](https://ionicframework.com/docs/cli/)
* Ionic docs: [Ionic Starters](https://ionicframework.com/docs/cli/starters.html)
* Ionic docs: [ionic generate](https://ionicframework.com/docs/cli/generate/)
* Ionic blog: [Ionic and Lazy Loading - Part 1](http://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
* Ionic blog: [Ionic and Lazy Loading - Part 2](http://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)

## npm 

* npm docs: [How to Create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)
* npm docs: [How to Publish a Package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
