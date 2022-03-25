import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/tacticboard/',
	plugins: [
		vue(),
		VitePWA({
			filename: 'service-worker.js',
			registerType: 'autoUpdate',
			workbox: {
				maximumFileSizeToCacheInBytes: Number.MAX_SAFE_INTEGER,
				cleanupOutdatedCaches: false,
			},
			manifest: {
				name: 'Tacticboard',
				short_name: 'Tacticboard',
				theme_color: '#65a30d',
				icons: [
					{
						src: `icons/android-chrome-192x192.png`,
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: `icons/android-chrome-512x512.png`,
						sizes: '512x512',
						type: 'image/png',
					},
				],
				start_url: '.',
				display: 'standalone',
				background_color: '#0F0F0F',
			},
		}),
	],
})
