import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withContexts(contexts));
addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  background: [
    {
      name: "Default Theme",
      value: "#ffffff",
      default: true,
    },
    {
      name: "Dark Theme",
      value: "#210B20",
    },
  ],
  a11y: {
    // optional selector which element to inspect
    element: "#root",
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {},
    // optional flag to prevent the automatic check
    manual: true,
  },
};
