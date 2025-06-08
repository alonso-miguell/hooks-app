import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [response, setResponse] = useState({
        data: null,
        error: null,
        isLoading: true,
        hasError: false,
    });

    useEffect(() => {
        fetchData();
    },[url])

    const fetchData = async () => {
        setResponse({
            data: null,
            error: null,
            isLoading: true,
            hasError: false,
        });

        const resp= await fetch(url);

        //sleep
        await new Promise(resolve => { setTimeout(resolve, 100)});



        if(!resp.ok){
            setResponse({
                data:null,
                hasError: true,
                isLoading: false,
                error: {
                    message: resp.statusText,
                },
            });

            return;
        }

        const data = await resp.json();
        console.log(data);
        setResponse({
            data: data,
            hasError: false,
            isLoading: false,
            error: null,
        })

    }

    return {
        data: response.data,
        isLoading: response.isLoading,
        hasError: response.hasError,
        error: response.error,
    };

}