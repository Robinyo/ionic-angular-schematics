# How to Publish @ionic-angular/schematics

There are two `README.md` files:
- `./README.md`
- `src/README.md`

The copy in `./` is used by GitHub.
The copy in `src/` is used by https://www.npmjs.com

There are three `package.json` files:
- `./package.json`
- `src/package.json`

The copy in `./` is used to build the project.
The copy in `src/` is used by https://www.npmjs.com
Bump the version in both files.

You also need to update the `@ionic/app-scripts` devDependencies, in 
`ionic-angular-schematics/src/application/files/package.json`

```json
  "devDependencies": {
    "@ionic-angular/schematics": "^1.0.0",
  }
```

Run:
```bash
tsc -p tsconfig.json
```

In the <PROJECT_ROOT> push the updates to GitHub:

```bash
git add .
git commit -m "Updated the README.md file"
git commit -m "Updated the Application collection"
git commit -m "Updated the Page collection"
git commit -m "Added Core Feature Module"
git commit -m "Added support for Aliases and Environment specific configuration"
git commit -m "Added Dynamic Theme support"
git commit -m "Added Shared Module support"
git commit -m "Added generate Module support"
git commit -m "Added generate Service support"
git commit -m "Fixed webpack config issue"
git push -u origin master
```

Then publish the package to the npm registry:
```bash
cd src
npm publish --access=public
cd ..
```

To install/uninstall @ionic-angular/schematics globally using npm:

```bash
npm uninstall -g @ionic-angular/schematics
npm install -g @ionic-angular/schematics
```

**Note:** There is currently an issue with Schematics use of `require.resolve()` however there is a known workaround:

```bash
cd /usr/local/lib/node_modules/@angular/cli/node_modules
mkdir @ionic-angular
cp -R /usr/local/lib/node_modules/@ionic-angular/* @ionic-angular/

To define a default collection (globally):

```bash
ng set defaults.schematics.collection @ionic-angular/schematics --global
```

Try:

```bash
ng new my-app
cd my-app
ionic serve --platform=ios
```

And:

```bash
ng g page pages/welcome --skip-import --dry-run
ng g module feature-1 --spec --dry-run

npm run build --platform=ios --prod
```


