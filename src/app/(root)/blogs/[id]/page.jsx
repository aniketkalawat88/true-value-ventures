"use client"

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HeroSection2 from "../../_components/hero-section2";

const BlogDetail = () => {
  const params = useParams();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
//   console.log(id,"dfgujio")

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${blogId}`);
        console.log(response.data)
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
//   if (!blog) return <p className="text-center text-lg text-red-500">Blog not found</p>;

  return (
    <div className="max-w-7xl mx-auto">
         <HeroSection2
                name={"Blog Details"}
                img={blog?.image}
              />
        <div className="max-w-7xl mx-auto p-6 grid gap-6">
        {/* <img src={blog?.image} alt={blog.title} className="w-full md:h-96 h-54 object-cover rounded-lg mb-6" /> */}
            <h1 className="md:text-3xl text-2xl font-bold mb-4 text-pretty">{blog.title}</h1>
            <p className="md:text-lg text-base text-justify text-gray-700 ">{blog.description}</p>
            <p className="text-primary-main font-bold">By {blog.author}</p>
            <p className="text-primary-main  font-bold"> Date : {new Date(blog.date).toLocaleDateString()}</p>
        {/* <div className="relative ">
            <p className="md:text-lg text-base text-justify text-gray-700 md:overflow-y-scroll md:h-72">{blog.description}</p>
            <div className="flex justify-between mt-4">

            </div> */}

        {/* </div> */}
        </div>

    </div>
  );
};

export default BlogDetail;
