import react, { useState } from "react";
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
  // const searchArticles = (event) => {
  //   event.preventDefault(); // don't redirect the page
  //   // get value entered into box
  //   const searchValue = event.target.name.value.toLowerCase();
  //   alert(searchValue)
  //   let result = [];
  //   result = blogposts.filter((blogpost) => {
  //     return blogpost.description.search(value) != -1;
  //   });
  //   blogposts = result;
  // };
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container my-12 mx-auto px-3 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="p-8">
          <div className="bg-white flex items-center shadow-xl">
            <form>
              <input
                id="name"
                type="text"
                placeholder="search..."
                autoComplete="name"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </form>
          </div>
        </div>
        <div className="container my-12 mx-auto px-6 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {blogposts.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((blogpost) => (
                <RecipeCard key={blogpost.sys.id} blogpost={blogpost} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
