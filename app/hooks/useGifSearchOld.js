import { useState, useEffect } from 'react'
const useGifSearch = (initConfig = {},init='') => {
    const config = {
        initOffset : 0,
        typeSearch : 'gifs',
        limit : 10,
        delay : 1000,
        ...initConfig
    }
    const [ keyToSearch, setKeyToSearch ] = useState(init)
    const [ isSearching, setIsSearching ] = useState(false)
    const [ isSearchingMore, setIsSearchingMore ] = useState(false)
    const [ searchResults, setSearchResults ] = useState([])
    const [ offset, setOffset ] = useState(config.initOffset)

    useEffect(()=>{
        const searcFunction = ()=>{
            if(keyToSearch ===''){
                setIsSearching(true)
                fetch('/api/search-all?offset=0').then(res=>res.json()).then(res=>{
                    setSearchResults(res)
                setOffset(0)
                setIsSearching(false)
                }).catch((err)=>{
                console.error(err)
                setIsSearching(false)
                })
            }else{
                
                setIsSearching(true)
                const search = encodeURI(keyToSearch)
                    fetch(`/api/search-gifs?search=${search}&offset=0&limit=${config.limit}`).then(res=>res.json()).then(res=>{
                        setSearchResults(res)
                    setOffset(0)
                    setIsSearching(false)
                    }).catch((err)=>{
                    console.error(err)
                    setIsSearching(false)
                    })
                }
        }
        const handler = setTimeout(() => {
            searcFunction();
          }, config.delay);
          return () => {
            clearTimeout(handler);
          };
      },[keyToSearch, config.delay, config.limit])
      const searchMoreResult = async (numberOfResults = 10) =>{
        if(keyToSearch.length > 0){
            setIsSearchingMore(true)
            const search = encodeURI(keyToSearch)
            fetch(`/api/search-gifs?search=${search}&offset=${offset+numberOfResults+1}`).then(res=>res.json()).then(res=>{
                setSearchResults(prev=>prev.concat(...res))
                setIsSearchingMore(false)
            }).catch((err)=>{
                setIsSearchingMore(false)
              console.error(err)
            })    
          }
          setOffset(prev=>prev+numberOfResults)
      }  
    return {
        keyToSearch,
        setKeyToSearch,
        isSearching,
        searchResults,
        setOffset,
        searchMoreResult,
        isSearchingMore
    }
}

export default useGifSearch