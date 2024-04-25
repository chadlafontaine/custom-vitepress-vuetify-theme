import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import colors from "vuetify/util/colors";
import { md2 } from 'vuetify/blueprints';
import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import Layout from "./Layout.vue";
const vuetify = createVuetify({
    components,
    directives,
    blueprint: md2,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.blue.darken2, // #1976D2
                    secondary: colors.lightBlue.lighten1, // 29B6F6
                },
            },
        },
    },
});
export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }) {
        // register your custom global components
        app.use(vuetify);
    }
};
