import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 10vw;

  @media(max-width: 800px){
    padding: 0 8vw;
  }
`

export const SectionCall = styled.section`
  margin-top: 60px;
  position: relative;

  .logo-wrapper{
    
    svg{
      margin-bottom: 30px;

      width: 50px;
      height: 50px;
      
      *{
       fill: #fff; 
      }
    }
  } 

  .wrapper{
    display: flex;
    align-items: center;
    gap: 50px;

    @media(max-width: 800px){
      display: block;
    }
   
    div.text-content{
      max-width: 450px;
      h1 span{
        color: ${props => props.theme.colors.primary}
      }
      p{
        font-size: 1.3rem;
        font-weight: 300;
        padding-top: 28px;
      }

      
    }

    .video-frame{
      width: 100%;
      height: calc( 27vh + 11vw );
      position: relative;

      @media(max-width: 1030px){
        height: calc( 7vh + 11vw );
      }

      @media(max-width: 800px){
        margin-top: 30px; 
        height: calc( 37vh + 11vw );
      }
      @media(max-width: 600px){
        margin-top: 30px; 
        height: calc( 18vh + 11vw );
      }

      &::before{
        content: "";
        width: 50%;
        height: 50%;
        
        position: absolute;
        top: -6px;
        right: -8px;
        
        background: ${props => props.theme.colors.primary}; 
        border-radius: 0 5px 0 0;
      }

      iframe{
        border: 0;

        width: 100%;
        height: 100%;

        position: relative;

        border-radius: 5px;
      }
    }
  }
  .arrow-down{
    display: flex;
    justify-content: center;
    
    margin-top: 15vh;

    svg{
      cursor: pointer;
      width: 40px;
    }
  }

  >svg{
    width: 10%;
    
    position: absolute;
    right: 0;
    bottom: -200px;

    @media(max-width: 800px){
      width: 25%;
      z-index: -1;
    }
  }

`

export const SectionAbout = styled.section`
  margin-top: 60px;

  position: relative;

  .wrapper{
    display: flex;
    gap: 50px;

    @media(max-width: 800px){
      display: block;
    }

    h2{
    font-size: 1.5rem;
    margin-bottom: 20px; 
    }

    p{
      margin-bottom: 50px;
      span{
        color: ${props => props.theme.colors.primary};
      }
    }

    div.text-wrapper{
      margin-top: 30px;
      width: 100%;

      div.block{
        p{
          max-width: 450px;
        }
      }
    }

    .phone-group{
      max-width: 450px;
     
      svg{
        position: absolute;
        left: -30%;
        top: 10%;

        width: 60%;
        height: auto;
        
        z-index:-1;

        @media(max-width: 800px){
          width: 120%;
          left: -50%;
        }
      }
     
      img{
        width: 80%;
      }
   
      @media(max-width: 1050px){
        display: flex;
        justify-content: center;

        margin: 0 auto;
       
        img{
          width: 100%;
        }
      }
    }
  }

`

export const SectionFeedback = styled.section`
  margin: 70px 0;
  position: relative;

  h2{
    padding: 0 10vw;

    @media(max-width: 800px){
      padding: 0 8vw;
    }
  }
  .chart-bg{
    svg{
      position: absolute;
      right: 0;
      bottom: -70%;

      width: 45%;
      height: auto;

      z-index: -1;

      @media(max-width: 800px){
        bottom: -40%;
        width: 70%;
      }
    }
  }
  .wrapper{
    overflow: hidden;
    cursor: grab;

    &.dragging{
      cursor: grabbing;
    }

    &::-webkit-scrollbar{
      display: none;
    }
    
    ul {
      margin-top: 60px; 
      margin-left: 10vw; 
      margin-right: 30px;
      
      list-style: none;
      display: inline-flex;
      gap: 30px;

      li{
        position: relative;

        max-width: 300px;
        img{
          width: auto;
          height:500px;
        }
      }
    }
  }
  
`

export const SectionBuy = styled.section`
  margin: 70px 0;

  div.wrapper{
    display: flex;
    gap: 50px;

    position: relative;
    
    @media(max-width: 800px){
      display: block;
    }

    ul{
      display: flex;
      flex-direction: column;

      gap: 20px;
      list-style: none;

      margin-top: 60px; 
      max-width: 450px;

      li{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 15px;

        svg{
          width: 90px;
        }
      }
    }
    .card{

      display: flex;
      flex-direction: column;
      gap: 20px;

      justify-content: center;
      margin: 0 0 0 auto;
      margin-top: 40px;

      padding:50px;
      max-width: 450px;
      height: auto;

      background: ${props => props.theme.colors.grey};
      border-radius:5px;

      text-align: center;
      font-weight: bold;

      @media(max-width: 800px){
        padding: 50px 25px;
      }

      h2{
        font-size: 2.5rem;
      }
      p span{
        color: ${props => props.theme.colors.primary};
      }

      .btn{
        width: 100%;
        height: 70px;

        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;

        background: ${props => props.theme.colors.primary};
        transition: all ease 200ms;

        &:hover{
          background: #FFE6B7;
        }

        &:active{
          a{
            transform: scale(.98)
          }
        }

        a{
          transition: all 100ms ease;

          display: flex;
          justify-content: center;
          align-items: center;
          
          text-decoration: none;
          color: ${props => props.theme.colors.grey};
          width: 100%;
          height: 100%;
          font-size: 1.5rem;
        }
      }
    }

  }
`

export const SectionFaq = styled.section`
  h2{
    padding-top: 60px;
    margin-bottom:60px;
  }

  ul{
    margin-bottom:60px;  
    list-style: none;
  
    .title{
      cursor: pointer;
      
      display: flex;
      align-items: center;
      gap: 15px;
      
      margin-top: 30px;

      .arrow{

        transition: all 500ms ease;
        svg{
          width: 20px;
          filter: brightness(10);
        }
      }
    }
    
    .content{
      margin-top: 15px;
      overflow: hidden;

      transition: all ease-in-out 400ms;
    }

    li.open .title{
      color: ${props => props.theme.colors.primary};
    }
    li.open .arrow{
      svg{
        filter: none;
      }
      transform: rotateZ(-180deg)
    }
    li.open .content{
      max-height: 500px;
    }
    li.close .content{
      max-height: 0;
    }

  }
`

export const Footer = styled.footer`
  border-top: 3px solid ${props => props.theme.colors.primary};

  text-align: center;

  .row-1{
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 30px 0;

    @media(max-width: 800px){
      
      display: block;
    }    
    .logo{
      display: flex;
      justify-content: center;
      gap: 15px;

      a:hover svg{
        *{
          fill: ${props => props.theme.colors.primary};
        }
      }
      svg{
        width: 30px;
        height: auto;

        *{
        fill: #fff; 
        }
      }


      @media(max-width: 800px){
        justify-content: center;
      }
    }
  }

  .row-2{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    margin-bottom: 30px;

    .developed{
      p{
        text-align: center;

        a{
          text-decoration: none;
          color: ${props => props.theme.colors.font};

          &:hover{
            color: ${props => props.theme.colors.primary};
          }
        }
       
      }
    }
  }
`
