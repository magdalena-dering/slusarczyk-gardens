import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = <T>(url: string) => {
  const [responses, setResponses] = useState<T[] | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then(resp => {
        setLoading(false)
        setError(false)
        setResponses(resp.data)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
        setResponses(null)
      })
    return () => {}
  }, [url])

  return [responses, loading, error] as const
}

export default useFetch
