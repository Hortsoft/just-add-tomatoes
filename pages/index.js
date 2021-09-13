import { createClient  } from 'contentful' 

import RecipeCard from '../components/RecipeCard'
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

   

  const res = await client.getEntries({ content_type: "blogPost" })

  return {
    props: {
      blogposts: res.items,
      revalidate: 1
    }
  }
}

export default function Recipes({ blogposts }) {
   
  return (
    <>
   
    <FP_Banner title="Welcome" description="description"  />
    <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
     {blogposts.map( blogpost => (
          <RecipeCard  key={blogpost.sys.id}  blogpost={blogpost}/> 
  ))}
  </div>
 
    </div>
    </>
  )
}