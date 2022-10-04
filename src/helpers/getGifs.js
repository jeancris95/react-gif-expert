export const getGifs =async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=4RQQZUwdYgSyJkd8WQUBMAP08Y1mV3FX&q=${ category } &limit=20`
    const respuesta=  await fetch(url);
    const { data }= await respuesta.json();
    const gifs =data.map(img => ({
            id:img.id,
            titulo:img.title,
            url:img.images.downsized_medium.url
     })
    );
    return gifs;
}