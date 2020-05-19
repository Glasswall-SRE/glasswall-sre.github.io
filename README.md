# Glasswall SRE Website
The Glasswall SRE Team Documentation Site

# Motivation
To assist Glasswall and the wider community in achieving production ready standards and scalable products.

# Pipeline Status

![CI](https://github.com/glasswall-sre/glasswall-sre.github.io/workflows/CI/badge.svg)
![CD](https://github.com/glasswall-sre/glasswall-sre.github.io/workflows/CD/badge.svg)

# Tech / Framework
- Docusaurus 2
- Markdown
- Javascript
- Cypress

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

# Installation

```
$ yarn
```

# Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

# Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

# Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Testing

```
$ yarn cypress
```

# Contributions
Contributions, ideas and bug reports are welcome and greatly appreciated. Please add issues for suggestions and bug reports or create a pull request.
