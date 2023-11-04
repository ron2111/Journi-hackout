import { MemoryRouter } from "react-router-dom";
import GlobalStyles from "../src/GlobalStyles"


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

  export const decorators = [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
];
