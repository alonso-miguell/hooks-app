import React from "react";

export const ShowIncrement =
    /*
    Even though using Render.memo for the child button it gets called, this is because
    the function reference changes everytime when gets passed in increment
    */
    React.memo(
        ({increment}) => {

            console.log('rendering increment button');
            return (
                <button className="btn btn-primary" onClick={() => increment()}>
                    Increment
                </button>
            )
        });