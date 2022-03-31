import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
   const { id } = useParams();
   const [details, setDetails] = useState({});
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      let url = `https://api.coingecko.com/api/v3/coins/${id}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setDetails(data);
            setLoading(false);
         });
   }, [id]);

   return (
      <>
         {loading ? (
            <Spinner></Spinner>
         ) : (
            <div className="px-4 h-[90vh] pt-20 pb-24 mx-auto mx-w-7xl md:px-8">
               <div className="grid h-full grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-stretch">
                  <div className="order-2 md:order-1">
                     <h1 className="text-3xl">General Info:</h1>
                     <hr />
                     <h2>{details.market_cap_rank}</h2>
                     <h2>
                        {details.country_origin
                           ? details.country_origin
                           : "Not found"}
                     </h2>
                     <hr />
                     <h1 className="text-3xl">Scores:</h1>
                     <p>{details.community_score}</p>
                     <p>{details.developer_score}</p>
                  </div>
                  <div className="flex justify-center items-center order-1 md:order-2">
                     <img src={details.image?.large} alt="" />
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default CoinDetails;
