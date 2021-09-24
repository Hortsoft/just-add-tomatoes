import { createClient  } from 'contentful' 

import EventCard from '../components/EventCard'
import FP_Banner from '../components/FP_Banner';

export async function getStaticProps() {

  //const client = createClient ({
  //  space: process.env.CONTENTFUL_SPACE_ID,
  //  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  //})
  
  const client = createClient ({
    space: '8s27tytzwtrj',
    accessToken: 'HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU',
  })

   

  const res = await client.getEntries({ content_type: "event" })

  return {
    props: {
      events: res.items,
      revalidate: 1
    }
  }
}

export default function Events({ events }) {
   
  return (
    <>
   
    <FP_Banner title="Our Events" description="Below are the links of events we are running!"  />
    <div className="container my-12 mx-auto px-3 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
     {events.map( event => (
          <EventCard  key={event.sys.id}  event={event}/> 
  ))}
  </div>
 
    </div>
    </>
  )
}