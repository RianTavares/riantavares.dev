import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
          method: 'alphabetical',
          order: [
              'Docs',
              ['Introduction'],
              'Design Tokens',
              ['Colors', 'Spacing', 'Typography', 'Other'],
          ],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
