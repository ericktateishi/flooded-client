import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: #2468FA;
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
    color: #2468FA;
    opacity: 1;
  }
  
  input:-ms-input-placeholder {
    color: #2468FA;
  }
  
  input::-ms-input-placeholder {
    color: #2468FA;
  }
`