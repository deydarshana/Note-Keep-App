import React, {useState, useEffect} from 'react';

const Titleuseffect = () => {
    const [num, setNum] = useState(0);
    


    useEffect(() => {
       document.title = `I clicked ${num} times`;
       console.log("I am clicked");
    },[num]);

    return (
        <>

        <button onClick={() => {setNum(num+1)}}>Clicked {num}</button>
        
        </>

    ); 
}

export default Titleuseffect;