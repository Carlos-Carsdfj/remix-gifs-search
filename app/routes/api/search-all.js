const { json } = require("@remix-run/node")

export const loader = async({request})=>{
    const url = new URL(request.url);
    const search =  url.searchParams.get("search")
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_APP_KEY}&limit=20&offset=0`)
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
    return json(
        arrayGifies
    )
}