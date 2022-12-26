import React from "react";
import { themes } from "@storybook/theming";
import styled from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
};

const Container = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const decorators = [
  (Story) => (
    <Container>
      <Story />
    </Container>
  ),
];
