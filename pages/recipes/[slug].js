import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";
import Skeleton from "../../components/Skeleton";
import BlogBanner from '../../components/BlogBanner'

const client = createClient({
  // created at top level putside both functions
  space: "8s27tytzwtrj",
  accessToken: "HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU",
});

 // use client object to the get the slug for all of the entries
// added fallback skeleton page
export const getStaticPaths = async () => {
 
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    // return an array of path objects
    paths: paths,
    fallback: true
  };
};

// use getstatic props to get the detail for the single item we need at buidl time. to geerate path based on the page we ar eo n (slug)
export async function getStaticProps({params}) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  })

  // If the blog post does not exist then send user somewhere, say hompegae
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { blogpost: items[0] },
    revalidate: 1
  };
}

export default function RecipeDetails({ blogpost }) {

  // run a check to see if page exists , if not show fall back page

  if ( !blogpost ) return <div><Skeleton /></div>
  // destructure props
  const { title, cookingTime, description, Method, ingredients, thumbnail } = blogpost.fields;

  return (
    <>
    <BlogBanner blogposts={blogpost.fields} />
    <div className="bg-white-50 pt-10">
    <div className="max-w-11xl mx-auto grid grid-cols-12 bg-white-200">
   
    <div className="col-span-2">
      
           <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl"> side stuff</h3>
         
    </div>
    <div   className="col-span-8 bg-white">

      <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
      <p>{description}</p>
       
      <p className="text-sm font-semibold tracking-tight text-black">Takes about {cookingTime}</p>

      <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">Ingredients</h3>
      {ingredients.map(ing => (
          <span key={ing}>{ ing }</span>
        ))}
    </div>
   
    <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">Method</h3>
     {documentToReactComponents(Method)}
     </div>
    <div className="col-span-2">
    
         
        <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl"> side stuff</h3>
        
    
</div>
    </div> 
    </div>
    </>
  );
}
