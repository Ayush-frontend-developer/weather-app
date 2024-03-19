import Search from "./search.jsx"
import Info from "./info.jsx"
import { useState } from 'react';

function container (){
    let [counry,setcounry] = useState("")

    function update(hello){
        setcounry({...hello})
        
    }
    return <div>

        <Search hello={update}/>
        <Info info={counry}/>

    </div>
}
export default container;