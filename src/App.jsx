import './App.css'
import MyFirstComponent from './components/MyFirstComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import User from './components/User'
import ReactPlayer from 'react-player'


function App() {
  return (
    <>
      <Header title="React Intro" />

      <User userName="Alice" age={30} />
      <User userName="Bob" age={40} />
      <User userName="Charlie" age={50} />

      <MyFirstComponent />

      <ReactPlayer
        src="https://www.youtube.com/watch?v=EvtMTV9mMSc"
        playing={false}
        volume={0.1}
      />

      <Footer>
        <p>Undefined Squad, 2026</p>
      </Footer>

    </>
  )
}

export default App
