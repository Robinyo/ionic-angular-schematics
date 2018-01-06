# How to Publish @ionic-angular/schematics

There are two `README.md` files:
- `./README.md`
- `src/README.md`

The copy in `./` is used by GitHub.
The copy in `src/` is used by https://www.npmjs.com

There are two `package.json` files:
- `./package.json`
- `src/package.json`

Also update the `@ionic/app-scripts` devDependencies:

```json
  "devDependencies": {
    "@ionic-angular/schematics": "^0.0.21",
  }
```

In `ionic-angular-schematics/src/application/files/package.json`

The copy in `./` is used to build the project.
The copy in `src/` is used by https://www.npmjs.com

Bump the version in both files.

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
ionic serve
```

And:

```bash
ng g page pages/welcome --skip-import --dry-run
```


