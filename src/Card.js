import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Card = (props) => {
  const { post, onEdit, onDelete } = props;
  const buttonStyles = {
    margin: "5px", // Adjust spacing around buttons
  };
  return (
    /*
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
    </div>*/
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{post.title.toUpperCase()}</h5>
   
        <p className="card-text">
        {post.body}
        </p>
        <div className="d-flex justify-content-center">
                  <i className="fas fa-edit text-primary mr-3 mx-2" style={{cursor: 'pointer', fontSize: '2.5em'}} onClick={() => onEdit(post)}></i>
                  <i className="fas fa-trash-alt text-danger mx-2" style={{cursor: 'pointer', fontSize: '2.5em'}} onClick={() => onDelete(post.id)}></i>
                </div>
       
      </div>
    </div>
  );
};

export default Card;
