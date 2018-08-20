# prettier-sample

Sample repo showing webpack issue with prettier in the browser.

This uses [React Storybook](https://github.com/storybooks/storybook) to get demo the webpack problem with prettier.
See webpack config (although it isn't doing anything explicit):

    ./storybook/.webpack

Issue: https://github.com/prettier/prettier/issues/4959

# Start

```bash
yarn install
yarn start
```

![Screen](https://user-images.githubusercontent.com/185555/44324527-08924780-a4aa-11e8-9b15-2e96f58ea0f8.gif)

# Webpack Errors:

```bash
WARNING in ./node_modules/prettier/standalone.js
7397:15-64 Critical dependency: the request of a dependency is an expression
 @ ./node_modules/prettier/standalone.js
 @ ./lib/common/prettier.js
 @ ./lib/common/index.js
 @ ./lib/test/storybook.js
 @ ./lib/components/Foo.stories.js
 @ ./lib stories.js$
 @ ./.storybook/config.js
 @ multi ./node_modules/@storybook/react/dist/server/config/polyfills.js ./node_modules/@storybook/react/dist/server/config/globals.js (webpack)-hot-middleware/client.js?reload=true ./.storybook/config.js
Child html-webpack-plugin for "index.html":
                                   Asset      Size  Chunks             Chunk Names
                              index.html    569 kB       1
    7b056e65e12fac1b83ba.hot-update.json  44 bytes          [emitted]
       [0] ./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/@storybook/react/dist/server/index.html.ejs 1.7 kB {1}
       [1] ./node_modules/lodash/lodash.js 540 kB {1}
       [2] (webpack)/buildin/global.js 509 bytes {1}
       [3] (webpack)/buildin/module.js 517 bytes {1}
Child html-webpack-plugin for "iframe.html":
                                   Asset      Size  Chunks             Chunk Names
                             iframe.html    569 kB       1
    63d0aee88fe26bae2acc.hot-update.json  44 bytes          [emitted]
       [0] ./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/@storybook/react/dist/server/iframe.html.ejs 1.16 kB {1}
       [1] ./node_modules/lodash/lodash.js 540 kB {1}
       [2] (webpack)/buildin/global.js 509 bytes {1}
       [3] (webpack)/buildin/module.js 517 bytes {1}
```
