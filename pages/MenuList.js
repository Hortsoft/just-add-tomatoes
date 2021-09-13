import { createClient } from "contentful";
import MenuLink from "../components/MenuLink";

export async function getStaticProps() {
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

export default function MenuList({ blogposts }) {
  return (
    <div x-data="{ dropdownOpen: true }" class="relative my-32">
  
    <div x-show="dropdownOpen" className="fixed inset-0 h-full w-full z-10">
      <div
        x-show="dropdownOpen"
        className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
      >
        {blogposts.map((blogpost) => (
          <MenuLink key={blogpost.sys.id} blogpost={blogpost} />
        ))}
      </div>
      </div>
    </div>
  );
}
