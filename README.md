# Getting Started with @ionic-angular/schematics

## Table of Contents

* [Installation](#installation)
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

@ionic-angular/schematics will add a reference to `pages` in your project's `app.module.ts` file.

You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
Page | `ng g page my-new-page`
Service | TODO


