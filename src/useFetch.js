import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
          fetch(url, { signal: abortCont.signal }) // fetch data from this endpoint
          .then(res => {
              if(!res.ok){
                  throw Error('could not fetch data resource')
              }
              return res.json() // this is alsoanother fetch
          })
          .then((data) => {
              console.log(data)
              setData(data) // update the blogs state with the array data
              setIsPending(false)
              setError(null)
          })
          .catch(err => {
              if(err.name === 'AbortError'){
                  console.log('fetch aborted')
              }
              else {
                setIsPending(false)
                setError(err.message) 
              }
          }) // catches any error(network) that might occure
        }, 1000) // setTimeout will fire after 1 second
        return () => abortCont.abort()
    }, [url]) // an empty array [] ensures the hook effect runs ONLY once
    return { data, isPending, error }
}

export default useFetch