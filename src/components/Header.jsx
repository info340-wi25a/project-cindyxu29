import React from 'react';
import ClassButtons from './ClassButtons';
import PoseButtons from './PoseButtons';

export default function Header({ pageType }) {
    // const pageType = page;
    let pageTitle = "";
    let RenderedButtons = null;

    if (pageType === "pose") {
        pageTitle = "Poses in This Class"
        RenderedButtons = PoseButtons;
    } else if (pageType === "class") {
        pageTitle = "Classes"
        RenderedButtons = ClassButtons;
    }

    return (
        <div className="text-black py-5 container-fluid">
            <div className="container">
                <h1>{pageTitle}</h1>
                {<RenderedButtons />}
            </div>
        </div>
    )
}