import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './features/CounterSlice';
import {increment, incByAmount, decrease, reset} from './features/CounterSlice';

const Main = () => {

    // let [counter, setCounter] = useState(0);

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    // const addOneHandler = () => {
    //     setCounter(counter + 1)
    // }

    // const addFiveHandler = () => {
    //     setCounter(counter + 5)
    // }

    // const removeOneHandler = () => {
    //     setCounter(counter - 1)
    // }

    // const removeFiveHandler = () => {
    //     setCounter(counter - 5)
    // }

    // const resetHandler = () => {
    //     setCounter(counter = 0)
    // }



    return (

        <div className='wrapper'>
            <h1>Counter App With Redux</h1>
            <div className='circle'>
               <p>{count}</p>
            </div>

            <div className='btns'>
            <button onClick={() => dispatch(decrease(5))}>- 5</button>
            <button onClick={() => dispatch(decrease(1))}>- 1</button>
            <button onClick={() => dispatch(reset(0))}>Reset</button>
            <button onClick={() => dispatch(increment())}>+ 1</button>
            <button onClick={() => dispatch(incByAmount(5))}>+ 5</button>
            </div>
            
        </div>
    );
};

export default Main;