"use client";


import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

const UpdateBlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id; // Get blog ID from URL

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    author: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Fetch the blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${blogId}`);
        setBlog({
          title: response.data.title,
          description: response.data.description,
          author: response.data.author,
          image: response.data.image,
        });
        // console.log(response,"fghk")
        setPreviewImage(response.data.image);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  // Handle input change
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog({ ...blog, image: file });
    setPreviewImage(URL.createObjectURL(file)); // Show preview
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("description", blog.description);
      formData.append("author", blog.author);
      if (blog.image instanceof File) {
        formData.append("image", blog.image); // Only append if a new image is uploaded
      }

      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${blogId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Blog updated successfully!");
      router.push("/admin"); // Redirect to home or blog list page
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog.");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Update Blog</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-lg font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium">Description</label>
            <textarea
              name="description"
              value={blog.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-lg font-medium">Author</label>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-medium">Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
            {previewImage && (
              <img src={previewImage} alt="Preview" className="mt-4 w-full h-64 object-cover rounded-lg" />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full p-3 text-white font-semibold rounded ${updating ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Blog"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateBlogPage;
