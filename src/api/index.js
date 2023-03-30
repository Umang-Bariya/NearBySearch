import axios from "axios";






export const getPlacesData = async (type,sw,ne) => {
    try{
        // request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
            bl_latitude: sw.lat,
            tr_latitude:ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '17b747f381msh5689d8bb1af370bp1ef75djsn6d133d3dcb5f',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch(error){
        console.log(error);
    }
}