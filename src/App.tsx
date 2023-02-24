import { BasicTypes } from "./typescript/BasicTypes";
import { LiteralObjects } from './typescript/LiteralObjects';
import { Functions } from './typescript/Functions';

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
    </div>
  )
}

export default App;