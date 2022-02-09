import React from "react";


const MyParag =(props) =>{
console.log('paragraph is running');
    return(
        <p>{props.children}</p>
    );
}

export default MyParag;
