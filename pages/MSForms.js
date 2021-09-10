import React  from 'react'
import Iframe from 'react-iframe'

import Banner from '../components/banner'

export default function MSForm() {
    return (
        <>
        <Banner />
        <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 bg-white-200">
       
        <div className="col-span-2">
          
               <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">  </h3>
             
        </div>
        <div   className="col-span-8 bg-white">
<Iframe url="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__ZUPD19UNTVBRkdaUDdHTEJVWktGNVNQQjEzTVZDQy4u&embed=true"
        width="1240px"
        height="1000px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
          </div>
          </div>
    <div className="col-span-2">
    
         
        <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">  </h3>
        
    
</div>
    </div> 
    
    </>
    )
}
