import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px;
  & > * {
    margin: 10px 0px !important;
  }
`

export const Subtitle = styled.p`
  font-size: 13px;
  padding: 0px 20px;
  color: #5f5f5f;
  font-weight: bold;
  text-align: center;
`

export const Error = styled.p`
  color: #db2955;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  margin-top: 0px !important;
`