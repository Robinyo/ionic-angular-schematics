# How to Publish @ionic-angular/schematics

Bump the version in `src/package.json`

In the <PROJECT_ROOT> push the updates to GitHub:

```bash
git add .
git commit -m "Updated the README.md file"
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
cd my-app && ionic serve
```

