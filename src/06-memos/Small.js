import React from "react";

//Memo is useful to remember a componenet state without rendering it everytime that the parent component changes
//could be useful when using large and heavy components, otherwise isn't really needed
export const Small =
    React.memo(
        ({value}) => {
            console.log("rendering small component");
            return (
                <small> {value} </small>
            )
        }
    )