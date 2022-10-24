import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter)
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch({type: 'toggle'})
    };

    const incrementHandler = () => {
        dispatch({type: 'increment'})
    }
    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    }

    const increaseHandler = () => {
        dispatch({type: 'increase', amount: 10})
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            { show && <div className={classes.value}>{counter}</div> }
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={incrementHandler}>Increment</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
