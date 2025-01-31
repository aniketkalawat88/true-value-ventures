"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`); // Replace with your backend URL
        // console.log(response.data.blogs)
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("Check Network Connection")
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

    // Delete a blog
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
      if (!confirmDelete) return;
  
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`); // API Call
        setBlogs(blogs.filter((blog) => blog._id !== id)); // Remove from UI
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    };

  return (
    <div className=" p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available.</p>
      ) : (
        <div className="grid gap-6 grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border rounded-lg shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <div>
              <h2 className="text-2xl font-semibold line-clamp-1">{blog.title}</h2>
              <p className="text-gray-600 line-clamp-2">{blog.description}</p>
              <p className="text-sm text-gray-500 mt-2">By - {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>

              {/* Buttons: Update & Delete */}
              <div className="mt-4 grid grid-cols-2 gap-4 ">
                <button
                  onClick={() => router.push(`/admin/update/${blog._id}`)} // Redirect to update page
                  className="px-4 py-2 bg-primary-main text-white rounded hover:bg-primary-main/90"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(blog._id)} // Delete function
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
