import {useEffect} from "react";

export const Message = () =>{
    useEffect(() => {
        console.log('Message mounted');

        //return part in useEffect executes when:
        // Before unmounting
        // Before re-running the effect (due to dependency changes).
        return () => {
            console.log('Message unmounted');
        }
    }, []);

    return (
        <>
            <h1>User exists already!!</h1>
        </>
    )
}