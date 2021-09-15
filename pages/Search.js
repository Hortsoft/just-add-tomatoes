import { createClient } from "contentful";
import Link from "next/link";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  //const client = createClient ({
  //  space: process.env.CONTENTFUL_SPACE_ID,
  //  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  //})

  const client = createClient({
    space: "8s27tytzwtrj",
    accessToken: "HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU",
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogposts: res.items,
      revalidate: 1,
    },
  };
}

export default function Search({ blogposts }) {
  const searchArticles = (event) => {
    event.preventDefault(); // don't redirect the page
    // get value entered into box
    const searchValue = event.target.name.value;
    alert(searchValue)
    //blogposts.filter(blogpost => blogpost.description === searchValue)
  };
  return (
    
    <div className="container my-12 mx-auto px-3 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="p-8">
          <div className="bg-white flex items-center shadow-xl">
            <form onSubmit={searchArticles}>
              <label htmlFor="name">Search test</label>
              <input id="name" type="text" autoComplete="name"   />
              <button
                className="text-sbtOrange bg-sbtBlue border border-solid border-sbtOrange hover:bg-sbtOrange hover:text-white active:bg-sbtOrange font-normal w-40  text-xl px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1   ease-linear transition-all duration-150"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="container my-12 mx-auto px-6 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {blogposts.map( blogpost => (
          <RecipeCard  key={blogpost.sys.id}  blogpost={blogpost}/> 
  ))}
          </div>
        </div>
      </div>
    </div>
  );
}
