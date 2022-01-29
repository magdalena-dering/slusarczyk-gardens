import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = <T>(url: string) => {
  const [responses, setResponses] = useState<T[] | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await axios(url)
        setResponses(res.data)
        setLoading(false)
      } catch {
        setError(true)
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return [responses, loading, error] as const
}

export default useFetch
