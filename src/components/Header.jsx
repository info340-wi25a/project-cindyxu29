import React from 'react';
import ClassButtons from './ClassButtons';
import PoseButtons from './PoseButtons';

export default function Header(props) {
    // String is either "pose" or "class", changes rendering
    const pageType = props.pageType; 
    const pageTitle = "";
    const renderedButtons = null;
    if (pageType === "pose") {
        pageTitle = "Poses in This Class"
        renderedButtons = PoseButtons;
    } else if (pageType === "class") {
        pageTitle = "Classes"
        renderedButtons = ClassButtons;
    } 


    return (
        <div class="text-black py-5 container-fluid">
            <div class="container">
                <h1>{ pageTitle }</h1>
                {/* <!-- Button to trigger modal --> */}
                { renderedButtons }
            </div>
        </div>
    )
}