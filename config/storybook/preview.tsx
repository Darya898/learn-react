import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import React from "react";
import ThemeDecorator from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";






let preview: Preview;
preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.LIGHT}>
        <StyleDecorator>
            <Story/>
        </StyleDecorator>
        </ThemeDecorator>
    ),
      (Story)=>(
          <RouterDecorator> <Story/></RouterDecorator>
      ),
  ]

};


export default preview;
