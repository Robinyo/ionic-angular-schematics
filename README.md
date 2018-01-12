# @ionic-angular/schematics

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) 
 
## Table of Contents

* [Goals](#goals)
* [Installation](#installation)
* [Generating a new Project](#generating-a-new-project)
* [Generating Components, Directives, Modules, Pages, Pipes and Services](#generating-components)

## Goals
- A standardised Ionic project structure aligned with the Angular style guide's:
  - [X] [Overall structural guidelines](https://angular.io/guide/styleguide#overall-structural-guidelines)
  - [X] [Folders-by-feature structure](https://angular.io/guide/styleguide#folders-by-feature-structure)  
  - [X] [App Module](https://angular.io/guide/styleguide#app-root-module)
  - [X] [Core Feature Module](https://angular.io/guide/styleguide#core-feature-module)
  - [X] [Shared Feature Module](https://angular.io/guide/styleguide#shared-feature-module)

```
    ├── <PROJECT_ROOT>
        └── /src
            └── /app                                  -  App Module
                ├── app.component.ts
                ├── app.html
                ├── app.module.ts
                ├── app.scss
                ├── main.ts
                └── /core                             - Core Feature Module (e.g., Singleton Services/Providers)
                    ├── core.module.ts
                    ├── module-import-guard.ts  
                    └── /logger
                        ├── console-logger.service.ts
                        ├── logger.service.ts                               
                └── /pages                            - Page (Component) Modules
                    └── /home
                        ├── home.page.html
                        ├── home.page.module.ts 
                        ├── home.page.scss   
                        ├── home.page.spec.ts
                        ├── home.page.ts                                                                                                               
                └── /shared                           - Shared Feature Module (shared Components, Directives and Pipes)
                    ├── shared.module.ts                
            └── /assets
            └── /environments                         - Environment specific configuration   
                ├── environment.dev.ts
                ├── environment.ts                        
            └── /theme
                ├── facebook-messenger-theme.scss            
                ├── gradient-mixins.scss
                ├── gradient.scss
                ├── green-and-blue-theme.scss                    
                ├── variables.scss
            ├── index.html
            ├── manifest.json
            ├── service-worker.js
        └── /config                                   - Webpack Configuration
            ├── webpack.config.json
        └── /e2e                                      - E2E Test Configuration
            ├── app.e2e-spec.ts
            ├── app.po.ts
            ├── tsconfig.e2e.json
        └── /resources                                - Default Resources (e.g., Icon and Splash)
        └── /www                                      - Ionic's 'dist' directory
            └── /assets
            └── /build   
            ├── index.html
            ├── manifest.json
            ├── service-worker.js
        ├── .editorconfig
        ├── .gitignore
        ├── config.xml
        ├── ionic.config.json
        ├── karma.conf.json           
        ├── package.json
        ├── protractor.conf.json
        ├── README.md     
        ├── tsconfig.json
        ├── tsconfig.ng-cli.json        
        ├── tslint.json             
```

- [Code scaffolding](#generating-components)
  - [X] Application
  - [X] Component
  - [X] Directive
  - [X] Enum
  - [X] Interface
  - [X] Module      
  - [X] Page
  - [X] Pipe
  - [X] Service      
- [X] [Aliases](https://robferguson.org/blog/2017/11/22/working-with-typescript-webpack-and-ionic-3/)
- [X] [Environment specific configuration](https://github.com/Robinyo/big-top#aliases-and-environment-specific-variables)
- [X] [Dynamic Themes](https://robferguson.org/blog/2017/11/12/theming-your-ionic-3-app/)
- [X] [Logging](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)
- [X] [Unit and E2E Testing](https://robferguson.org/blog/2017/11/28/testing-your-ionic-3-app/)
- [X] Baked in best practices that have been discovered by the community over time

**Note:** See this [post](http://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/) re Shared Feature Module (Shared Common Modules) v Encapsulated Modules.

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
npm install @ionic-angular/schematics@latest --save-dev
```

You also need to add the Angular CLI to your project's `devDependencies`:

```bash
npm install @angular/cli@latest --save-dev
```

The set @ionic-angular/schematics as the default collection update your project's `.angular-cli.json`:

```json
"defaults": {
  "schematics": {
    "collection": "@ionic-angular/schematics"
  }
}
```

### Generating a new project
 
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

### Generating Components

You can use the `ng generate` (or just `ng g`) command to generate Ionic pages:

```bash
ng generate page --collection=@ionic-angular/schematics pages/my-page --skip-import
ng g page --collection=@ionic-angular/schematics pages/my-page --skip-import # using the alias
ng g page pages/my-page --skip-import # if @ionic-angular/schematics is the default collection
```

**Note:** Pages are lazy loaded by default.

You can also use the Schematics CLI to generate Ionic pages:

```bash
schematics @ionic-angular/schematics:page --name my-page
```

Sample page:

<p align="center">
  <img src="https://github.com/Robinyo/ionic-angular-schematics/blob/master/screen-shots/ios/home-page.png">
</p>

You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
Component | `ng g component my-new-component --spec`
Directive | `ng g directive my-new-directive --spec`
Enum | `ng g enum my-new-enum`
Interface | `ng g interface my-new-interface`
Module | `ng g module my-new-module --spec`
Page | `ng g page pages/my-new-page --skip-import`
Pipe | `ng g pipe my-new-pipe --spec`
Service | `ng g service my-new-service --spec`
 
## Resources

## Blog Posts

* [The Future of the Ionic CLI](https://robferguson.org/blog/2017/12/31/the-future-of-the-ionic-cli/)

## Angular 

* Angular docs: [Angular Style Guide](https://angular.io/guide/styleguide)
* GitHub: [Angular CLI](https://github.com/angular/angular-cli)
* GitHub: [Angular CLI Stories](https://github.com/angular/angular-cli/wiki/stories)

## Ionic 

* Ionic docs: [Ionic CLI](https://ionicframework.com/docs/cli/)
* Ionic docs: [Ionic Starters](https://ionicframework.com/docs/cli/starters.html)
* Ionic docs: [ionic generate](https://ionicframework.com/docs/cli/generate/)
* Ionic docs: [Configuring Ionic](https://ionicframework.com/docs/cli/configuring.html)
* Ionic blog: [Ionic and Lazy Loading - Part 1](http://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
* Ionic blog: [Ionic and Lazy Loading - Part 2](http://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)
* Ionic: [Progressive Web Apps](https://ionicframework.com/pwa)

## npm 

* npm docs: [How to Create Node.js Modules](https://docs.npmjs.com/getting-started/creating-node-modules)
* npm docs: [How to Publish a Package](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* npm docs: [Verdaccio - A lightweight private npm proxy registry](https://github.com/verdaccio/verdaccio)
