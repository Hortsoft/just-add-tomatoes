import react, { useState } from "react";
import { createClient } from "contentful";
import Link from "next/link";
import RecipeCard from "../components/RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  
   
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = blogposts.filter((blogpost) => {
      return blogpost.fields.title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
    if (searchWord !== "") {
       setFilteredBlogs(newFilter);
    } else {
     setFilteredBlogs( blogposts);
    }
  };

  return (
    <div className="container my-12 mx-auto px-3 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="p-8">
          <div className="bg-white flex items-center shadow-xl">
            <FontAwesomeIcon icon={faSearch} />
            <input
              id="name"
              type="text"
              placeholder="search articles..."
              autoComplete="name"
              onChange={handleFilter}
            />
          </div>
        </div>
        <div className="container my-12 mx-auto px-6 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
          
            {filteredBlogs.length > 1 ?

              filteredBlogs.map((blogpost) => (
              <RecipeCard key={blogpost.sys.id} blogpost={blogpost} />
            ))
            :
            blogposts.map((blogpost) => (
              <RecipeCard key={blogpost.sys.id} blogpost={blogpost} />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
