import React from 'react';


interface Props {
    title:string;
    image:string;
}
function SectionItem(props:Props) {
    return(
        <div>
            <p> {props.title} ehhehehe</p>
            <img src={props.image}/>
        </div>
    )
}
export default SectionItem;