import React from "react";

const Card = (props) => {
    const {post,onEdit,onDelete}=props;
    const buttonStyles = {
        margin: "5px", // Adjust spacing around buttons
      };
  return (
    <div>
        
      <div className="card">
        <div className="card-header">{post.title.toUpperCase()}</div>
        <div className="card-body">
          <h5 className="card-title">{post.body}</h5>
         
          
          <div style={{ textAlign: "center" }}>
          <button
            onClick={() => onEdit(post)}
            className="btn btn-secondary"
            style={buttonStyles}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="btn btn-danger"
            style={buttonStyles}
          >
            Delete
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
