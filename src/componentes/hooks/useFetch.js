import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFetch()
    }, [url]);

    const setLoading = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }

    const getFetch = async () =>{
        setLoading()

        const resp = await fetch(url)
        const data = await resp.json([])

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};
