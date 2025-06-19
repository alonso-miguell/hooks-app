import {useEffect, useState} from "react";
const localCache={};

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
        if(localCache[url]){
            setResponse({
                data: localCache[url],
                hasError: false,
                isLoading: false,
                error: null,
            });

            console.log("using cache")
            return;
        }

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
        });

        localCache[url] = data;

    }

    return {
        data: response.data,
        isLoading: response.isLoading,
        hasError: response.hasError,
        error: response.error,
    };

}