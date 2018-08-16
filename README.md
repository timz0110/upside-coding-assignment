<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>
<p align="center">
  <a href="https://on.cypress.io">Documentation</a> |
  <a href="https://on.cypress.io/changelog">Changelog</a> |
  <a href="https://on.cypress.io/roadmap">Roadmap</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cypress">
    <img src="https://img.shields.io/npm/dm/cypress.svg" alt="npm"/>
  </a>
  <a href="https://gitter.im/cypress-io/cypress">
    <img src="https://img.shields.io/gitter/room/cypress-io/cypress.svg" alt="Gitter chat"/>
  </a><br />
  <a href="https://opencollective.com/cypressio">
    <object type="image/svg+xml" data="https://opencollective.com/cypressio/tiers/corporate-backer.svg?avatarHeight=64&width=600" />
  </a>
</p>

## What is Cypress?

<p align="center">
  <a href="https://player.vimeo.com/video/237527670">
    <img alt="Why Cypress Video" src="https://user-images.githubusercontent.com/1271364/31739717-dbdff0ee-b41c-11e7-9b16-bfa1b6ac1814.png" width="75%" height="75%" />
  </a>
</p>

## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

```bash
npm install cypress --save-dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin. This means you can call it from your project root either of the following ways:

The long way with the full path

```bash
./node_modules/.bin/cypress open
```

Or with the shortcut using npm bin

```bash
$(npm bin)/cypress open
```

Or by using npx

note: npx is included with npm > v5.2 or can be installed separately.

```bash
npx cypress open
```

After a moment, the Cypress Test Runner will launch.
