import axios from "axios";

//This has been altered to break
function fetchShow() {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        
        return res; 
      });
  };

  export default fetchShow;