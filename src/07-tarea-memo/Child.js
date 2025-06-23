import React from 'react'

export const Child =

    React.memo(({numero, incrementar}) => {

            console.log(' (re) drawing child ');

            return (

                <button
                    className="btn btn-primary mr-3"
                    onClick={() => incrementar(numero)}
                >
                    {numero}
                </button>
            )
        }
    );