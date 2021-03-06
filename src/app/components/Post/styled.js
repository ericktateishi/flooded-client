import PaperUI from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import styled from 'styled-components'

export const Paper = withStyles(() => ({
  root: {
    marginBottom: '20px',
    backgroundColor: '#dfe0e2',
    padding: '10px 15px',
    color: '#071013',
    '@media screen and (min-width: 900px)': {
      width: '320px',
      margin: '0px 10px 20px',
    }
  },
}))(PaperUI)

export const Title = styled.h5`
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 5px;
`

export const Time = styled.p`
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    font-size: 18px;
  }
`

export const User = styled.p`
  font-weight: 100;
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: end;
`

export const Engagement = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  color: ${props => props.points > 0 ? "#248dfa" : props.points === 0 ? "#071013" : "#DB2955"};

  svg {
    font-size: 30px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`

export const PostContainer = styled.div`
  padding: 0px 10px 80px;

  @media screen and (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`