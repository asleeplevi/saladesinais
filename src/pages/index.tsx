import { useState, MouseEvent } from 'react'
import Head from 'next/head'

import { Container, SectionCall, SectionAbout, SectionFeedback, SectionBuy, SectionFaq, Footer } from '../styles/pages/home'

import Logo from '../assets/grupo-logo-line.svg'
import LogoBullBear from '../assets/bullbear-logo.svg'
import ArrowDown from '../assets/arrow-down.svg'
import CandlesBg from '../assets/candles-bg.svg'
import ChartBg from '../assets/chart-bg.svg'
import ChartOnlyBg from '../assets/chartonly-bg.svg'
import PhoneMockup from '../assets/phone-mockup.png'
import IconSupport from '../assets/support.svg'
import IconOperations from '../assets/operations.svg'
import IconHit from '../assets/hit.svg'
import IconCalendar from '../assets/calendar.svg'

import Feedback1 from '../assets/feedback/feedback-1.png'
import Feedback2 from '../assets/feedback/feedback-2.png'
import Feedback3 from '../assets/feedback/feedback-3.png'
import Feedback4 from '../assets/feedback/feedback-4.png'
import Feedback5 from '../assets/feedback/feedback-5.png'
import Feedback6 from '../assets/feedback/feedback-6.png'
import Feedback7 from '../assets/feedback/feedback-7.png'

const Home: React.FC = () => {
  const [toggleFaq, setToggleFaq] = useState(['close', 'close', 'close'])
  const scroll = [0, 0, 0]

  function goToAbout() {
    const offset = document.getElementById('about').offsetTop
    window.scrollTo({ top: offset - 50, behavior: 'smooth' })
  }

  function handleMouseDown(event: MouseEvent) {
    const feedbackList = document.getElementById('feedback')
    const startX = event.pageX - feedbackList.offsetLeft
    const scrollLeft = feedbackList.scrollLeft

    feedbackList.classList.add('dragging')

    scroll[0] = 1
    scroll[1] = startX
    scroll[2] = scrollLeft
  }

  function handleMouseUp() {
    const feedbackList = document.getElementById('feedback')
    feedbackList.classList.remove('dragging')

    scroll[0] = 0
  }

  function handleMouseMove(event: MouseEvent) {
    const feedbackList = document.getElementById('feedback')

    if (scroll[0] === 0) {
      return 0
    }
    event.preventDefault()
    const x = event.pageX - feedbackList.offsetLeft
    const walk = (x - scroll[1])
    feedbackList.scrollLeft = scroll[2] - walk
  }

  function toggleFaqItem(position: number) {
    const newState = (toggleFaq[position] === 'open') ? 'close' : 'open'
    toggleFaq[position] = newState
    setToggleFaq([...toggleFaq])
  }

  return (
    <>
    <Head>
      <title>Sala de sinais Standard</title>
    </Head>
    <main>
      <SectionCall>
        <Container>
          <div className="logo-wrapper"><Logo/></div>
          <div className="wrapper">
            <div className="text-content">
              <h1>Você não precisa ser um trader profissional para conseguir <span>lucrar!</span></h1>
              <p>Com a Sala de Sinais <strong>Standard</strong>, você pode conseguir lucro diário no mercado apenas seguindo sinais.</p>
            </div>
            <div className="video-frame">
              <iframe src="https://fast.wistia.net/embed/iframe/6uutq2ty1v?videoFoam=true" title=" [Example Video] Wistia Video Essentials" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
            </div>
          </div>
          <div className="arrow-down" onClick={goToAbout}><ArrowDown/></div>
        </Container>
        <CandlesBg/>
      </SectionCall>
      <SectionAbout id='about'>
        <Container>
          <div className="wrapper">
            <div className="phone-group">
              <ChartBg/>
              <img src={PhoneMockup} alt="" />
            </div>
            <div className="text-wrapper">
              <div className="block">
                <h2>A sala <span>Standard</span></h2>
                <p>Por meio da Sala Standard, nosso grupo privado no Telegram, você vai ter acesso diariamente a sinais de entrada que são fornecidos pelo trader profissional <span>Bretson Oliveira</span>, com mais de 3 anos de experiência com o mercado de Forex e Binário.</p>
              </div>
              <div className="block">
                <h2>Não sabe usar a <span>plataforma?</span></h2>
                <p>Não tem problema! Também oferecemos um mini curso introdutório, onde ensinaremos o básico para que você possa operar seguindo os sinais.</p>
              </div>
              <div className="block">
                <h2>Dá pra começar com <span>pouco dinheiro?</span></h2>
                <p>Sim, você pode começar com apenas R$ 60,00! Nosso objetivo é ajudar você a gerar uma renda extra, sem precisar de meses de estudo.</p>
              </div>
            </div>
          </div>
        </Container>
      </SectionAbout>
      <SectionFeedback>
          <h2>Veja a <span>opinião</span> de nossos alunos</h2>
          <div id="feedback" className="wrapper" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
            <ul>
                <li>
                  <img src={Feedback1} alt="feedback" draggable="false"/>
                </li>
                <li>
                  <img src={Feedback2} alt="feedback" draggable="false"/>
                </li>
                <li>
                  <img src={Feedback3} alt="feedback" draggable="false"/>
                </li>
                <li>
                  <img src={Feedback4} alt="feedback" draggable="false"/>
                </li>
                <li>
                  <img src={Feedback5} alt="feedback" draggable="false"/>
                </li>
                <li>
                  <img src={Feedback6} alt="feedback" draggable="false"/>
                </li>
                <li>
                  <img src={Feedback7} alt="feedback" draggable="false"/>
                </li>
              </ul>
          </div>
          <div className="chart-bg">
            <ChartOnlyBg/>
          </div>
      </SectionFeedback>
      <SectionBuy>
        <Container>
          <h2>Comprando o acesso a sala você <span>recebe</span></h2>
          <div className="wrapper">
            <ul>
              <li>
                <IconSupport/>
                <p><strong>Suporte vitalício!</strong> Alguma dúvida? É só perguntar no grupo que lhe daremos total assistência.</p>
              </li>
              <li>
                <IconOperations/>
                <p><strong>Operações ao vivo 3x na semana,</strong> feitas pelo nosso trader profissional, para você aprender mais!</p>
              </li>
              <li>
                <IconHit/>
                <p><strong>90% de assertividade!</strong> Atualmente o nossos sinais possuem uma altíssima taxa de acerto.</p>
              </li>
              <li>
                <IconCalendar/>
                <p><strong>20 sinais por dia!</strong> Sete dias por semana, fornecidos diretamente pelo nosso trader!</p>
              </li>
            </ul>
            <div className="card">
              <p><span>Mini Curso introdutório</span> + Acesso <span>Vitalício</span> a sala de sinais STANDARD</p>
              <h2>R$ 100,00</h2>
              <div className="btn">
                <a >Comprar agora</a>
              </div>
            </div>
          </div>
        </Container>
      </SectionBuy>
      <SectionFaq>
        <Container>
          <h2>Perguntas frequentes</h2>
          <ul>
            <li className={toggleFaq[0]} onClick={ () => toggleFaqItem(0)}>
              <div className="title">
                <div className="arrow">
                  <ArrowDown/>
                </div>
                <h3>A sala de sinais é pra mim?</h3>
              </div>
              <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient montes nascetur ridiculus. Malesuada fames ac turpis egestas integer eget aliquet. Mi bibendum neque egestas congue quisque egestas.</p>
            </li>
          </ul>
        </Container>
      </SectionFaq>
      <Footer>
        <Container>
        <div className="row-1">
            <div className="logo">
                <a href="https://www.instagram.com/bull.bear_/" rel="noreferrer" target="_blank">
                  <LogoBullBear/>
                </a>
                <a href="https://www.instagram.com/grupomindset_" rel="noreferrer" target="_blank">
                  <Logo/>
                </a>
            </div>

          </div>
          <div className="row-2">
            <div className="copyright">
              <p>© 2021 Grupo Mindset </p>
            </div>
            <div className="developed">
              <p>Desenvolvido por <a href="https://www.onthejourney.com.br" rel="noreferrer" target="_blank">journey</a></p>
            </div>
          </div>
        </Container>
      </Footer>
    </main>
    </>
  )
}

export default Home
