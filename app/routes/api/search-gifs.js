import { json } from '@remix-run/node'

export const loader = async({request})=>{
    const urlParams = new URL(request.url)
    const search =  urlParams.searchParams.get("search")
    const offset =  urlParams.searchParams.get("offset")
    const limit =  urlParams.searchParams.get("limit") || 10
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_APP_KEY}&q=${search}&limit=${limit}&offset=${offset}&rating=g&lang=en`)
    const responJson = await response.json()
    const { data } = responJson
    const arrayGifies = data.map(gif=>({    
      id:gif.id,
      image:gif.images.fixed_width_downsampled.url,
      title:gif.title||'title is undefined',
      userAvatar:gif.user?.avatar_url||'/images/user.png',
      username:gif.user?.display_name||'anonimus',
      width:gif.images.fixed_width_downsampled.width,
      height:gif.images.fixed_width_downsampled.height
    }))
    return json(arrayGifies)

}