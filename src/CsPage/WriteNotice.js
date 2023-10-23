import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { useState } from "react";

function WriteNotice({userInfo}){

  const [notice,setnotice] = useState({
    title : '',
    content : '',
    cnt : '',
    writer : userInfo.id
  });
  const navigate = useNavigate();

  const changeHandler = (e) =>{
    setnotice({
      ...notice,
      [e.target.name] : e.target.value 
    })
  }

  return(
 <div class="form-group">
  <div>
    제목 : <input type="text" name="title" onChange={changeHandler}/><br/>
      내용 : <textarea name="content" onChange={changeHandler}></textarea><br/>
      <button onClick={()=>{
        axiosInstance.post('/notice',notice)
        .then(response=>{
          alert(response.data);
          // navigate('/');
          console.log(response.data);
        }).catch(error=>{
          console.log(error);
          
        })
      }} >작성</button>
  </div>
      </div>
  );
}

export default WriteNotice;