import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/action";

function Counter({id}){

    const count = useSelector((state) => state.value);

    const dispatch = useDispatch();

    const incrementHandler = (value) =>{
        dispatch(increment(value));
    }

    const decrementHandler = (value) =>{
        dispatch(decrement(value));
    }

    return(
        <>
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count} - {id}</div>
        <div className="flex space-x-3">
            <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={()=>incrementHandler(5)}>Increment</button>
            <button className="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={()=>decrementHandler(2)}>Decrement</button>
        </div>
        </div>
        </>
    )
}

// const mapStateToProps = (state,ownProps) =>{
//     console.log(ownProps);
//     return {
//         count : state.value
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         increment: (value) => dispatch(increment()),
//         decrement: (value) => dispatch(decrement()),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;