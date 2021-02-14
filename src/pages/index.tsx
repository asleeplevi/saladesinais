import { useState, MouseEvent, FormEvent } from 'react'
import Head from 'next/head'
import { Container, SectionCall, SectionAbout, SectionFeedback, SectionBuy, SectionFaq, Footer } from '../styles/pages/home'

import axios from 'axios'

import Logo from '../assets/grupo-logo-line.svg'
import LogoBullBear from '../assets/bullbear-logo.svg'
import ArrowDown from '../assets/arrow-down.svg'
import CandlesBg from '../assets/candles-bg.svg'
import ChartBg from '../assets/chart-bg.svg'
import ChartOnlyBg from '../assets/chartonly-bg.svg'
import PhoneMockup from '../assets/phone-mockup.webp'
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
  const [linkRoom, setLinkRoom] = useState<string>()
  const [email, setEmail] = useState('')
  const [submitStatus, setSubmitStatus] = useState('')
  const [submitText, setSubmitText] = useState('Quero ser avisado')
  const [toggleFaq, setToggleFaq] = useState(['close', 'close', 'close', 'close'])
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

  async function handleRegister(event: FormEvent) {
    event.preventDefault()
    setSubmitStatus('')

    // if (email.length < 8) return

    setSubmitText('Cadastrando')
    const response = await axios.post('/api/subscribe', { email })

    if (response.data.data === 'error') {
      setSubmitText('Email inválido')
      return setSubmitStatus('error')
    }
    setSubmitStatus('success')
    setSubmitText('Sucesso!')

    setTimeout(() => {
      setSubmitStatus('link')
      setLinkRoom('https://www.google.com')
      return setSubmitText('Acessar Sala Gratuita')
    }, 1000)
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
              <iframe src="https://fast.wistia.net/embed/iframe/bzzdadowun?videoFoam=true" title=" [Example Video] Wistia Video Essentials" allow="autoplay; fullscreen" scrolling="no" name="wistia_embed" width="100%" height="100%"></iframe>
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
              <form method="post" onSubmit={handleRegister}>
                <h4>Quer ser o primeiro a saber quando a <span>Sala Standard</span> estiver aberta?</h4>
                <p>Deixe o seu email e também receba acesso a nossa sala de sinais <b>gratuita</b></p>
                <input
                  type="email"
                  required
                  className={`${submitStatus}`}
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}/>
                <button className={`btn ${submitStatus}`} type="submit">
                  <a target="_blank" rel="noreferrer" href={linkRoom}>{submitText}</a>
                  <div className={`loading ${submitText}`}></div>
                </button>
              </form>
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
                <h3>Quais médias você usa?</h3>
              </div>
              <p className="content">Uso 6 médias moveis, 200,100,65,50,35,20</p>
            </li>
            <li className={toggleFaq[1]} onClick={ () => toggleFaqItem(1)}>
              <div className="title">
                <div className="arrow">
                  <ArrowDown/>
                </div>
                <h3>O que é esse tela branca com gráfico que sempre ta aberto na hora das operações na IQ?</h3>
              </div>
              <p className="content">Se chama metatrader 5, utilizo por conta da maior precisão das médias, visto que a IQ, tende a fazer mini manipulações que a longo prazo impacta drasticamente a posição real da Media.</p>
            </li>
            <li className={toggleFaq[2]} onClick={ () => toggleFaqItem(2)}>
              <div className="title">
                <div className="arrow">
                  <ArrowDown/>
                </div>
                <h3>Quantos % ao dia você recomenda?</h3>
              </div>
              <p className="content">Recomendo 3 a 5%, pois é bem facil de alcançar essa meta, quanto maior a %, mais risco você coloca seu capital, e dias consecutivos de loss podem afetar sua moral, tornando seus dias de operações um tormento.</p>
            </li>
            <li className={toggleFaq[3]} onClick={ () => toggleFaqItem(3)}>
              <div className="title">
                <div className="arrow">
                  <ArrowDown/>
                </div>
                <h3>Preciso de conhecimento para pegar sinais?</h3>
              </div>
              <p className="content">Não, basta seguir o tutorial que é passado no video que todos recebem assim que entram para a sala de sinal, mas, se você tem breve conhecimento de gráfico, seus ganhos podem ser impulsionados.</p>
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
