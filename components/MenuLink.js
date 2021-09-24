import { createClient } from "contentful";
import Link from 'next/link' 

// contenful link
export async function getStaticProps() {
  const client = createClient({
    space: "8s27tytzwtrj",
    accessToken: "HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU",
  });
  // Empty array in useState!
  const [data, setData] = useState([]);

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogposts: res.items,
      revalidate: 1,
    },
  };
}
export default function MenuLink({ blogposts }) {
   
  return (
    <>
    <div className=" mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
    {blogposts.map((blogpost) => (
      <Link id={blogpost.sys.id} href={"/recipes/" + slug}>
        <a className="block px-3 py-2 hover:bg-gray-200"> {title}</a>
      </Link>
    ))}
    </div>
    </ >
  )
}

