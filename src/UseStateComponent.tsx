import {useState} from 'react';

function UseStateComponent() {
const [arr, arrSet] = useState<Array<number>>([]);

const [name, nameSet] = useState<string | null>(null);

console.log("I shouldn't be using semicolons there")

return (
<div>
    <div>   
                   </div>
    <div> <button onClick={()=> arrSet([...arr, arr.length + 1])}>
    Add to array
    </button>
    {JSON.stringify(arr)}
    </div>
    <div> <button onClick={()=> nameSet('Dan')}>
    Add to name
    </button>
    {JSON.stringify(name)}
    </div>
</div>);
}
 export default UseStateComponent;