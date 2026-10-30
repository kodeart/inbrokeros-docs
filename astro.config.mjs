// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
    integrations: [
        vue(),
        starlight({
            title: 'inBrokerOS Docs',
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    items: [{ autogenerate: { directory: 'reference' } }],
                },
            ],
            //social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        })],
})
