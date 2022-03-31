import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
   const {id} = useParams();
   const [details, setDetails] = useState({})

   useEffect(()=>{
      let url = `https://api.coingecko.com/api/v3/coins/${id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data))
   },[id])
   console.log(details);
   return (
      <div className='px-4 h-[65vh] pt-20 pb-24 mx-auto mx-w-7xl md:px-8'>
         <div className="grid h-full grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-stretch">
            <div>
               <h1 className='text-3xl'>General Info:</h1>
               <hr />
               <h2>{details.market_cap_rank}</h2>
               <h2>{details.country_origin ? details.country_origin : 'Not found'}</h2>

            </div>
            <div className='flex justify-center items-center'>
               <img src={details.image?.large} alt="" />
            </div>
         </div>
      </div>
   );
};

export default CoinDetails;