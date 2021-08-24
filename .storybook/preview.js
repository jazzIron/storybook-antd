// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }


//import "../src/index.css"; //👈 The app's CSS file goes here
import { addDecorator, addParameters } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

import "antd/dist/antd.css";

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
};

export const decorators = [(Story) => <Story />];

// global decorator 설정
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
