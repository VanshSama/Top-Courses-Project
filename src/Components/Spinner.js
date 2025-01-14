import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className="flex flex-col items-center space-y-12">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <p className="text-white text-lg font-semibold">Loading...</p>
        </div>
    )
}

export default Spinner;