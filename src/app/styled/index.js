import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bfbfbf;
      border-radius: 5px;
    }
  }

  body {
    background-color: #FFFFFF;
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`