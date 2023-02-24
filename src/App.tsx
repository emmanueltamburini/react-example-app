import { BasicTypes } from "./typescript/BasicTypes";
import { LiteralObjects } from './typescript/LiteralObjects';
import { Functions } from './typescript/Functions';
import { Counter } from './components/Counter';

const App = () => {
  return (
    <div className='mt-2'>
        <h1>Example react app with typeScrypt</h1>
        <hr />
        <BasicTypes/>
        <hr />
        <LiteralObjects/>
        <hr />
        <Functions/>
        <hr />
        <Counter/>
    </div>
  )
}

export default App;