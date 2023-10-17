# AEM UI Frontend Multi Component Build

The following repository is a multi module node project which allows you to manage the JS/CSS for each component and have them converted into a clientlibrary as part of the build.

## How to build

mvn clean install

## Architecture 

Each component is stored under components/ and within each folder represents the NodeJS project that can be used to minify and uglify the CSS/JS.

### Setup

    - Create a new component under components (npm init)
    - Copy and paste the following files from one of the existing components (image/text)
      - clientlib.config.js
      - main.js
      - package.json
      - webpack.config.js
    - Create your css/js folder structure
    - Add your js/css to the necessary files
    - Execute `npm run dev` to validate it builds the JS/CSS and creates the clientlib

After creating all the new components simply add the project to the `workspaces` json array in order to have the build performed.

