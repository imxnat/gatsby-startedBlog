[![N|Solid](https://www.drupal.org/files/Gatsby_Logo.png)](https://www.gatsbyjs.com/docs/)

# Getting Started at Gatsby playing with:

- Gatsby: Create and deploy your first site - [Get Started here](https://www.gatsbyjs.com/docs/tutorial/part-1/)
- Gatsby Pages and Link component
- Creating React Components in Gatsby
- Using CSS modules for styling components
- Gatsby plugin image -> StaticImage
- GrahpQL for data query

## Installation: Base requirements

This is what I used for getting Started Gatsby at Manjaro Linux XFCE

- [Nodejs](https://nodejs.org/es/download/package-manager/#arch-linux) - For installing development packages using **npm**
```
$ pacman -S nodejs npm

```
- [Gatsby and gatsby-cli](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)
```
$ sudo npm install -g gatsby
```
```
$ sudo npm install -g gatsby-cli
```
- [Visual Studio Code - Editor de código](http://umaranis.com/2018/07/05/installing-visual-studio-code-vscode-on-manjaro-linux/) - From the **AUR** repository
```
$ sudo yaourt visual-studio-code-bin
```

## Gatsby plugin image

- In order to use the Gatsby plugin for [Static image](), we will need to install:
```
$ npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
```
- Next > Configure your plugins in your **gatsby-config.js** file.

![N|Solid](https://i.imgur.com/VaOcQjB.png)

- Then, wherever you will use the plugin, you will need to import it.

![N|Solid](https://i.imgur.com/042NtXS.png)

- Know more about your **gatsby-config.js** file [here](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/).
## GrahpQL for data query

✨ General process for using Data in your Gatsby site:

1. Add a source plugin: from where your data can get into the data layer.
2. Use the [GraphiQL](http://localhost:8000/___graphql) **playground** to build up the query so you can test out that we receiving what we need.
3. Take that query and copy it to one of your React Component.







***
<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
