import {defineConfig} from 'vitepress'
import {fileURLToPath, URL} from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
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
                        new URL('../theme/customComponents/customNavBar.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPSidebar\.vue$/,
                    replacement: fileURLToPath(
                        new URL('../theme/customComponents/customSideBar.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPDocFooter\.vue$/,
                    replacement: fileURLToPath(
                        new URL('../theme/customComponents/customDocFooter.vue', import.meta.url)
                    )
                }
            ]
        }
    },
})
