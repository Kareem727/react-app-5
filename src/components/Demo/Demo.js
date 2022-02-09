
import React from "react";
import MyParag from "./paragraph";

const DemoOutput =(props) =>{
    console.log('Demo is running');
    return(
            <MyParag>{props.showwwwww ? "It works ☺" : "Open the Console"}</MyParag>
        );
}
 
export default React.memo(DemoOutput) ;
