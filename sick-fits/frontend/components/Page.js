import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  /* Define the "radnika_next" custom font family */
  @font-face {
    font-family: "radnika_next";
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  html {
    --black: #393939;
    --red: #ff0000;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #E1E1E1;
    --lightGray: #E1E1E1;
    --bs: 0 10px 20px 0 rgba(0,0,0,0,0.9);
    --maxWidth: 1000px;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: var(--black);
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  padding: 2rem;
  margin: 0 auto;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
