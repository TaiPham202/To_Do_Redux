import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { del } from "../reducers/task_slice";
function ListTaskName()
{
    const dispatch=useDispatch();
    const ListTask=useSelector((state)=>state.task.list) //lay state tu trong task_slice {list:[]}
    const DelTask=(name)=>{
        dispatch(del(name));
    }
    return(
        <>
        <div>
            <h2>List task name:</h2>
            {
                ListTask.map(function(task){
                    return(
                        <>
                           <div>
                                <div>
                                    <p>{task}</p>
                                    <button onClick={()=>DelTask(task)}>X</button>
                                </div>
                            </div>
                        </>
                     
                    );
                })
            }
        </div>
        </>
    )
}
export default ListTaskName