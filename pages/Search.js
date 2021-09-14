import { createClient  } from 'contentful' 
import Link from 'next/link'
import RecipeCard from '../components/RecipeCard' 

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

export default function Search({blogposts}) {
  return (
    <div className="container my-12 mx-auto px-3 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
    <div className="p-8">
    <div className="bg-white flex items-center rounded-full shadow-xl">
     
    <form action="/" method="get">
       
        <input
            type="text"
            id="header-search"
            placeholder="Search   "
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
  </div>
      <div className="container my-12 mx-auto px-6 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {blogposts.map((blogpost) => (
            <RecipeCard key={blogpost.sys.id} blogpost={blogpost} />
          ))}
        </div>
      </div>
      </div>
      </div>
  );
}
