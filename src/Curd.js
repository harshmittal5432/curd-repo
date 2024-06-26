import React, { useState, useEffect } from "react";
import axios from "axios";

const Curd = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);
  const [openpopup, setpopup] = useState(false);
  // eslint-disable-next-line
  const [deleteId, setDeleteId] = useState(null);
  const [successdel,setsuccessdel]=useState(false);
  const [successadd,setsuccessadd]=useState(false);
  const [successupdate,setsuccessupdate]=useState(false);

  // This useEffect runs once after the initial render
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts
  const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  const addPost = async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
    });
    setPosts([...posts, res.data]);
    setTitle("");
    setBody("");
    setsuccessadd(true);
  };

  const updatePost = async (id) => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { title, body }
    );
    setPosts(posts.map((post) => (post.id === id ? res.data : post)));
    setTitle("");
    setBody("");
    setEditId(null);
    setsuccessupdate(true);
  };

  const deletePost = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
    setpopup(false);
    setsuccessdel(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updatePost(editId);
    } else {
      addPost();
    }
  };
  const handleDelete = (id) => {
    setDeleteId(id);
    setpopup(true);
  };
  const closePopup = () => {
    setpopup(false);
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditId(post.id);
  };

  const headingStyles = {
    color: "blue",
    textAlign: "center",
  };
  const reset=()=>{
    
    setTitle("");
    setBody("");
    setEditId(null);
    setpopup(false);
    setDeleteId(null);
    setsuccessdel(false);
    setsuccessadd(false);
    setsuccessupdate(false);



  }

  return (
    <div>
      <h1 style={headingStyles}>CRUD App with React and JSONPlaceholder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">{editId ? "Update" : "Add"} Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li type="1" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {openpopup && (
          <div className="popup">
          <div className="popup-content">
            <h3>Are you sure you want to delete this post?</h3>
            <button onClick={()=>deletePost(deleteId)}>Yes</button>
            <button onClick={closePopup}>No</button>
          </div>
        </div>
      )};
      {successdel&& (
          <div className="popup">
          <div className="popup-content">
            <h3>Successfully Deleted</h3>
            <button onClick={reset}>BACK</button>
            
          </div>
        </div>
      )}
       {successadd&& (
          <div className="popup">
          <div className="popup-content">
            <h3>Successfully Added</h3>
            <button onClick={reset}>BACK</button>
            
          </div>
        </div>
      )}
      {successupdate&& (
          <div className="popup">
          <div className="popup-content">
            <h3>Successfully Updated</h3>
            <button onClick={reset}>BACK</button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Curd;
