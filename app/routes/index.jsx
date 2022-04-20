
import SearchBox from '~/components/SearchBox'
import GifCard from '~/components/GifCard'
import { SkeletonCards } from '~/components/SekeletonCards'
import useGifSearch from "~/hooks/useGifSearch";
export default function Index() {
const {
  keyToSearch,
  setKeyToSearch,
  isSearching,
  searchResults,
  searchMoreResult,
  isSearchingMore,
} = useGifSearch() 
return (<>
  <div className="  flex flex-col items-center justify-center w-full" >
    <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600'>Gify Search</h1>
    <SearchBox  setGifs={setKeyToSearch} titleSearch={'type and have fun'} />
    <hr className="my-6 "/>
  </div>
  <div className="container mx-auto p-2">{        

  isSearching 

    ?<SkeletonCards/>
    :
  <div className="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3  gap-x-2 gap-y-1  ">
 {searchResults?.map(gif=><GifCard 
          key={gif.id} 
          src={gif.image}
          alt={gif.title} 
          username={gif.username}
          useravatar={gif.userAvatar}
        />
      )
}   
    </div>}
    <div className="text-center">{  
      isSearchingMore ? <span>
  Processing...</span>
   : <button className={`text-center text-gray-800 font-bold py-2 px-4 rounded flex-col justify-center    items-center ${ keyToSearch.length>0? '' : 'hidden'} `}
    onClick={searchMoreResult}>
<span>SHOW MORE </span>
</button>}
</div>
    </div>
    </>
)
}
