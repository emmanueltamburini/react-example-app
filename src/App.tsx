import { BasicTypes } from "./typescript/BasicTypes";
import { LiteralObjects } from './typescript/LiteralObjects';
import { Functions } from './typescript/Functions';
import { Counter } from './components/Counter';
import { CounterWithHook } from './components/CounterWithHook';
import { Login } from './components/Login';
import { Users } from './components/Users';

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
        <hr />
        <CounterWithHook/>
        <hr />
        <Login/>
        <hr />
        <Users/>
    </div>
  )
}

export default App;