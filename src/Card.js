import React,{useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Card = (props) => {
  const { post, onEdit, onDelete } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    
    
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{post.title.toUpperCase()}</h5>
        {isExpanded? (<>
      <p className="card-text">{post.body}</p>
      <span className="text-primary" style={{ cursor: 'pointer' }} onClick={toggleReadMore}>
        Show Less
      </span>
      </>
    ):(<>
    <p className="card-text">
        {post.body.split("\n").slice(0, 1).join("\n")}...</p>
        <span className="text-primary" style={{ cursor: 'pointer' }} onClick={toggleReadMore}>
          Read More
        </span>
        </>)}

        
        <div className="d-flex justify-content-center">
                  <i className="fas fa-edit text-primary mr-3 mx-2" style={{cursor: 'pointer', fontSize: '2.5em'}} onClick={() => onEdit(post)}></i>
                  <i className="fas fa-trash-alt text-danger mx-2" style={{cursor: 'pointer', fontSize: '2.5em'}} onClick={() => onDelete(post.id)}></i>
                </div>
       
      </div>
    </div>
    
  
  );
};

export default Card;
