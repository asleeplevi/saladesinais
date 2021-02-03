import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body{
    background-color: #322E39;
    color: #DEDEDE;
    font-size: 100%;
    font-family: Roboto;
  }
  h1{
    font-size: calc( 1.5rem + 1vw );
  }
  h2{
    span{
      color: ${props => props.theme.colors.primary};
    }
  }
  p{
    font-size: 1rem;
  
  }
  
`
