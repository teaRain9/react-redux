import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import {counterActions} from "../store/counter";

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleView())
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
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
