import { Badge } from './components/Badge'
import { Recount } from './components/Recount'

function App() {

  const recountText = `Counter-Strike 2 (CS2) is a first-person shooter video game developed by 
  Valve Corporation which is a part of the Counter-Strike series. 
  It was announced to the public on March 22, 2023 with an tentative full release for Summer 2023
   and a limited test beginning the same day. It was officially released on September 27, 2023.`
  return (
    <div className='m-auto w-1/2 mt-28'>
      <h1 className='text-3xl font-bold mb-4'>Charms UI</h1>
      <p className='text-gray-600 mb-6'>A collection of reusable React components.</p>
      <Badge title={'visiters'} count={20003} leftBg='bg-gray-600' rightBg='bg-red-600' href='http://luludev.cn'></Badge>
      <br></br>
      <Recount text={recountText} speed={50}
        delay={1000}
        onTypingStart={() => console.log('Typing started')}
        onTypingEnd={() => console.log('Typing ended')}
        className='text-xl font-bold font-mono'
        style={{ color: '#8b82f6' }}></Recount>

    </div>

  )
}

export default App
