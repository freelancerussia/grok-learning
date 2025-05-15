// import {TodoList} from "../entities/TodoList";

import {Posts} from "../entities/Posts";

function App() {

    function flattenArray(arr:any[]) {
        return arr.reduce((acc, item) => {
            return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
        }, []);
    }
    console.log(flattenArray([1,2,3,[1]]));
  return (
    <>
            {/*<TodoList/>*/}
        <Posts/>
    </>
  )
}



export default App
