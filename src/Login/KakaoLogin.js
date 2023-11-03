
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function KakaoLogin({setIsAuth,setUserInfo, setTrans}) {
  const URL = window.location.href;
  const match = /code=([^&]+)/.exec(URL);
  const navigate = useNavigate();

  if(match) {
    const code = decodeURIComponent(match[1]);
    
    axiosInstance.post('/oauth/kakao', {code:code})
      .then(response => {
        const jwt = response.headers.authorization;
        console.log(response);
        // setIsAuth(true);
        setUserInfo(response.data.member[0]);
        setTrans({member:response.data.member[0]});
        // console.log(response.data.member[0]);
        // console.log(userInfo);
        if(jwt) {
          sessionStorage.setItem('jwt', jwt);
          navigate('/');
        }
        
      }).catch(error => {
        console.log(error);   
      })  
    }

  return (
    <div>

      <h1>로그인 처리중</h1>

    </div>

  );
}

export default KakaoLogin;