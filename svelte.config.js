import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { adapter: adapter(),
    prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (status === 404) {
          console.warn(`404 error on path "${path}" from "${referrer}" (${referenceType})`);
          // ビルドを中断しないようにするため、フォールバックのレスポンスを返すか、空の文字列を返します
          return { html: '<p>ページが見つかりません</p>', status: 200 };
        }
      }
    }
  },
	extensions: ['.svelte', '.svx']
};

export default config;
