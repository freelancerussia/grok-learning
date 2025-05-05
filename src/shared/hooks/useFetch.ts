import {useState} from "react";


export   function useFetch<T>(url: string):{data: T | null, error: string | null, loading:boolean} {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const [data, setData] = useState<T | null>(null)
    setLoading(true)

     fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false))

    return {
        data, loading, error
    }
}