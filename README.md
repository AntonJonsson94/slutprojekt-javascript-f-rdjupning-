# pink-circle
A demo of Parcel with Sass och Typescript. Made for students at vocational university studying front-end on their second semester of four.

## How to clone, install and run
1) First clone repo to local machine

```
git clone https://github.com/niklas-mardby/pink-circle.git
```

2) Enter repo directory

```
cd pink-circle
```

3) Install dev dependencies

```
npm install
```

4) Start the dev server that will watch for saved changes to your SCSS-files and TS-files

```
npm run start
```

5) Now open http://localhost:1234/ in your browser. The dev server is running and you can code Sass and TS, save and then watch the result in your browser without having to compile or refresh.

## How to set this up with your own project

If you want to start your own project working with Parcel, Sass and Typescript you set it up like this:

First install Sass and Typescript globally, then

1) Create repo on Github with a readme
2) Clone repo to local computer and enter folder of repo
3) Run
```
npm init
```

4) Run
```
npm install --save-dev parcel
```

and make sure your package.json has these lines:
```json
"source": "src/index.html",
"scripts": {
    "start": "parcel"
  },
```

⭐ My package.json currently looks like this: https://github.com/niklas-mardby/pink-circle/blob/main/package.json and yours can look the same.

5) Create a .gitignore file and add
```
node_modules
dist
.parcel-cache
```

6) Now create the files and folders for your project! Create a folder src and in there create an index.html

7) You can link your html directly to your Sass and TS like so
```html
<script defer src="ts/app.ts"></script>
<link rel="stylesheet" href="scss/main.scss">
```

8) Which also means you need a folder scss with a main.scss and a folder ts with an app.ts (all of which are added to folder src)

9) Now you are set up and you can start the dev server and start working with watch and auto-refresh
```
npm run start
```

10) Now open http://localhost:1234/ in your browser

# Resources

- https://parceljs.org/
- https://sass-lang.com/
- https://www.typescriptlang.org/

# Issues
There are more things that could be added. Come with suggestions!

Known issues are:
- Readme lacks instructions on how to build project

