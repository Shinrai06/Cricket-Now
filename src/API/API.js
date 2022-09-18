const API_KEY = "532e9015-edf9-41a9-903d-961d96b2d0f3";

export const getMatches = ()=> {
    const url = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;

    return fetch(url)
                .then((res) => {
                    return res.json();
                })
                .catch((err)=>console.log("Error: ", err));
}

export const getMatchesDetail=(id)=>{
    const url = `https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`
    
    return fetch(url)
            .then(res => res.json())
            .catch(err => console.log(err))
}