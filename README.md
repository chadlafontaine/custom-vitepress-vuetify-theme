# custom-vitepress-vuetify-theme

Custom Vitepress theme that uses Vuetify components

## Installation

```bash
# with npm
npm i custom-vitepress-vuetify-theme
```

## Usage

Create .vitepress/theme/index.js

```js
// .vitepress/theme/index.js
import theme from "custom-vitepress-vuetify-theme";

export default theme
```

Create the .vitepress/config.js and extend the custom theme config

```js
// .vitepress/config.js
import baseConfig from 'custom-vitepress-vuetify-theme/config'

export default ({
    extends: baseConfig
})
```
