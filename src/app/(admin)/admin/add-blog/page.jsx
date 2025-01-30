"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateProductPage = () => {
  const router = useRouter();

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    author: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setBlog({ ...blog, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("description", blog.description);
    formData.append("author", blog.author);
    if (blog.image) formData.append("image", blog.image);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("blog created successfully!");
      router.push("/admin"); // Redirect to blog list
    } catch (error) {
      console.error("Error creating blog", error);
      alert("Error creating blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Description</label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className={`w-full p-3 text-white font-semibold rounded ${
            loading ? "bg-gray-500" : "bg-primary-main hover:bg-primary-main/90"
          }`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
