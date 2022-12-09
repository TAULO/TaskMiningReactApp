import { useEffect, useState } from 'react'

function useFetch(uri, opts) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal;
        const fetchAllTasks = async () => {
        setLoading(true)
        try {
            const res = await fetch(uri, opts)
            const json = await res.json()
            if (!signal.aborted) {
            setResponse(json)
            }
        } catch(e) {
            if (!signal.aborted) {
            setError(e)
            }
        } finally {
            if (!signal.aborted) {
            setLoading(false)
            }
        }
        }
        fetchAllTasks()
        return () => {
        abortController.abort()
        }
    }, [])
    return { response, error, loading }
}
export default useFetch