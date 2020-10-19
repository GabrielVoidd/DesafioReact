import React from 'react';

const Highlight = ({children,toHighlight}:{[key:string]:any})=>{
const regex = new RegExp(`(${toHighlight})`, 'i');
    return children.split(regex).map((chunk:string)=>{
        if(chunk.toLowerCase() === toHighlight.toLowerCase()){
        return <mark>{chunk}</mark>
        }
        return chunk;
    })
}

export default Highlight;