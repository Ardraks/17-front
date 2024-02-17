import { Link } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = () => {
    return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/Posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        A beach is a narrow, gently sloping strip of land that lies along
        A beach is a narrow, gently sloping strip of land that lies along the edge 
        of an ocean, lake, or river. Materials such as sand, pebbles, rocks, and 
        seashell fragments cover beaches. Most beach materials are the products
         of weathering and erosion.
         the edge of an ocean, lake, or river. Materials such as sand, 
         pebbles, rocks, and seashell fragments cover beaches. Most beach materials 
         are the products of weathering and erosion.
          <br />
          <br />
          A beach is a narrow, gently sloping strip of land that lies along
        A beach is a narrow, gently sloping strip of land that lies along the edge 
        of an ocean, lake, or river. Materials such as sand, pebbles, rocks, and 
        seashell fragments cover beaches. Most beach materials are the products
         of weathering and erosion.
         the edge of an ocean, lake, or river. Materials such as sand, 
         pebbles, rocks, and seashell fragments cover beaches. Most beach materials 
         are the products of weathering and erosion.
        </p>
      </div>
    </div>
  );
}


export default SinglePost