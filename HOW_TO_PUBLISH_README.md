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
```

To install/uninstall @ionic-angular/schematics globally using npm:

```bash
npm install -g @ionic-angular/schematics
npm uninstall -g @ionic-angular/schematics
```

To define a default collection (globally):

```bash
ng set defaults.schematics.collection @ionic-angular/schematics --global
```