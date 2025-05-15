import {useEffect, useState} from "react";


export   function useFetch<T>(url: string):{data: T | null, error: string | null, loading:boolean} {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const [data, setData] = useState<T | null>(null)

    useEffect(()=>{
        // const controller = new AbortController()
        const fetchData = async () => {
            setLoading(true)
            try{
                const res = await fetch(url,)
                if(!res.ok){
                    throw new Error(`Could not fetch data from ${url}`)
                }
                const result = await res.json()
                setData(result)
            } catch (error){
                setError(error instanceof Error ? error.message : 'Unknown error')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        // return () => controller.abort()
    },[url])

    return {
        data, loading, error
    }
}