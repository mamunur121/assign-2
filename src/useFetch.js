import * as React from 'react'

const API = 'http://localhost:9000'

export default function useFetch (path, method, data='') {
    const [response, setResponse] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(true)
        setResponse(null)

        const abortController = new AbortController()
        const signal = abortController.signal

        fetch(`${API}${path}`, {
            method,
            ...(data ? { data } : {}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(({ data }) => data ? data : null)
            .then((data) => {
                if (!signal.aborted) {
                    setResponse(data)
                    setLoading(false)
                }
            })
            .catch((error) => console.warn('Uh-oh.', error))

        return () => abortController.abort()
    }, [path, method, data])

    return { response, loading }
}
