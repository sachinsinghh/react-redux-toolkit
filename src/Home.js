import { useDispatch, useSelector } from "react-redux";


const Home = () => {
    const total = useSelector(state => state.c);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'increment'})
    }

    const decrement = () => {
        dispatch({type: 'decrement'})
    }

    const incrementByFive = () => {
        dispatch({type: 'incrementByFive',payload: 5})
    }

    return (
        <>
        Total: {total}
        <button onClick={increment} >Increment</button>
        <button onClick={incrementByFive}>Increment  by 5</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Home;