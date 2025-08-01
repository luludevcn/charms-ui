import './App.css'
import { Badge } from './components/Badge'

function App() {

  return (
    <div className='m-auto w-1/2 mt-28'>
      <Badge title={'visiters'} count={20003} leftBg='bg-gray-600' rightBg='bg-red-600' href='http://luludev.cn'></Badge>
    </div>

  )
}

export default App
