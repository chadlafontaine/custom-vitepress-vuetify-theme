import {defineConfig} from 'vitepress'
import {fileURLToPath, URL} from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        ssr: {
            noExternal: [/\.css$/, /^vuetify/]
        },
        server: {
            fs: {
                strict: false
            }
        },
        resolve: {
            alias: [
                {
                    find: /^.*\/VPNav\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/customNavBar.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPSidebar\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/customSideBar.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPDocFooter\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/customDocFooter.vue', import.meta.url)
                    )
                }
            ]
        }
    }
})