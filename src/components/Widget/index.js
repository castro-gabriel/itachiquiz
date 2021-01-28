import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.darkOpacity};
  border-radius: 4px;
  overflow: hidden;
  
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  text-align: center; 
  & > *:first-child {
    margin-top: 0%;
  }
  & > *:last-child {
    margin-bottom: 0%;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 52px;
  background-color: ${({theme}) => theme.colors.secondary};

  * {
    margin: 0;
  }
`

export default Widget