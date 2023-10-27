import { add } from "../reducers/task_slice";
import { useDispatch} from "react-redux";
import { useRef } from "react";

function Input_Task(props)
{
    const taskName = useRef;
    const dispatch = useDispatch();
    const AddTask=()=>{
        dispatch(add(taskName.current.value));
    }
    return(
        <>
        <div>
            <label>Task name:</label>
            <div>
                <input type="text" placeholder="Input task name" ref={taskName}/>
                <button onClick={AddTask} >Add</button>
            </div> 
        </div>
        </>
    )
}
export default Input_Task;