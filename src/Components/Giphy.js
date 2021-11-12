import React, {useEffect,useState} from "react";
import axios from "axios";

const Giphy = () => {  

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          const results = await axios("https://api.giphy.com/v1/gifs/trending", {
            params: {
              api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
              limit: 1000
            }
        });
        console.log(results);
        setData(results.data.data);

        setIsLoading(false);
    };
    fetchData();
}, []);
const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    return currentItems.map(el => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };   
    
export default Giphy