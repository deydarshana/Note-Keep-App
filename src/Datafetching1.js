import React, {useState, useEffect} from "react";
import axios from "axios";


const Datafetching1 = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idfrombuttonclick, setidfrombuttonclick] = useState(1);

    const handler = () => {
      setidfrombuttonclick(id);
    }

useEffect(() => {
axios
.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
.then((res) => {
  console.log(res);
  setPost(res.data)
})
.catch((error) => {
   console.log(error)
})
},[idfrombuttonclick]);

    return( 
     <div>
     <input type="text" value={id} onChange={(event) => setId(event.target.value)}/>
     <button type="button" onClick={handler}>Fetch Post</button>
     <div>{post.title}</div>
     {/* <ol>
       {posts.map(post => (
          <li key={post.id}>{post.title}</li>
       )
       )}
       </ol> */}
     </div>
    );

}

export default Datafetching1;