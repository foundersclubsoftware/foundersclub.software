# foundersclub.software

# Local Development
Clone this repository and create a new branch where you will commit your changes. When you are ready to communicate your changes with the team, you can open a pull request where your changes will be reviewed.

### Project setup
```
npm install
```
This will install all the required modules for the project.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
# Running Tests Locally
### Run your tests
```
npm run tests
```
You can write more tests in the `tests/` directory.

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# CI Server Setup
This project uses [Travis CI](https://travis-ci.com/). The .travis.yml file in this repo is already setup to run your tests and deploy, it only needs an environmental variable for Danger to be added to the Travis repo. After a PR into the master branch is created, Travis will run your tests. If all the tests pass and your PR has been reviewed, it will be merged into the master branch and Travis will build and deploy the site.
