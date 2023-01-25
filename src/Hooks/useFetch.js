import { useEffect, useState } from 'react'

function useFetch(uri, opts) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // allow to abort DOM-request
        const abort = new AbortController()
        const abortSignal = abort.signal;

        // fetch tasks if abort is OK
        const fetchAllTasks = async () => {
            try {
                const res = await fetch(uri, opts)
                const json = await res.json()
                if (!abortSignal.aborted) {
                setResponse(json)
                }
            } catch(e) {
                if (!abortSignal.aborted) {
                    setError(e)
                }
            } 
        }
        fetchAllTasks()
        return () => {
        abort.abort()
        }
    }, [])
    return { response, error }
}
export default useFetch