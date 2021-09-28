import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.7rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c495fd;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: #2e2e2e;
    }
  }

  body {
    background: #212121;
    font-family: 'Roboto', sans-serif;
    color: #f5f5f5;
  }

  a {
    font-family: inherit;
    text-decoration: none;
  }

  .page-style {
    padding: 2rem 6rem;
  }

  .page-header {
    font-weight: 500;
    font-size: 5rem;
  }

  .purple-header {
    color: #c495fd;
  }

  .pink-header {
    color: #f59cbb;
  }

  .link {
    color: #1eddcc;
  }

  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
        format('woff');
      font-weight: 400;
      font-style: normal;
    }
`;

export default GlobalStyle;
