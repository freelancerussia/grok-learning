import {useEffect, useState} from "react";


export   function useFetch<T>(url: string, options?:RequestInit):{data: T | null, error: string | null, loading:boolean} {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)
    const [data, setData] = useState<T | null>(null)

    useEffect(()=>{
        const controller = new AbortController()
        const fetchData = async () => {
            setLoading(true)
            try{
                const res = await fetch(url,{
                    ...options,
                    signal: controller.signal
                })
                if(!res.ok){
                    throw new Error(`Could not fetch data from ${url}`)
                }
                const result = await res.json()
                setData(result)
            } catch (error){
                if (error instanceof Error && error.name !== 'AbortError') {
                    setError(error.message); // без этого не работало
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => controller.abort()
    },[url, options])

    return {
        data, loading, error
    }
}