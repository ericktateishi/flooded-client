import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #248dfa;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
  padding: 20px 10px;

  svg {
    font-size: 32px;
    margin-right: 5px;
  }

  input::placeholder {
    color: #248dfa;
    opacity: 1;
  }
  
  input:-ms-input-placeholder {
    color: #248dfa;
  }
  
  input::-ms-input-placeholder {
    color: #248dfa;
  }
`