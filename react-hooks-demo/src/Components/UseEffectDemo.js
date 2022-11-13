import React, {useEffect,useState} from 'react';


const colors={
    sea: '#a2ccb6',
    sand: '#fceeb5',
    peach: '#ee786e'
}


function Page (){
    const [color, setColor] =useState(colors.sand);
    useEffect(()=>{
        document.body.style.background=color
    },[color])

    return(
        <div>
        <select value={color} onChange={(e)=>setColor(e.target.value)}>
            {Object.entries(colors).map(
                ([name,value])=>(
                    
                    <option key={`color--${name}`} value={value}>
                        {name}
                    </option>
                )
            )}
        </select>
        <h2>{color}</h2>
        </div>
    )

}

export default Page;
