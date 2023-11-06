
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function KakaoLogin( {setIsAuth, setUserInfo, setTrans, userInfo, setCs} ) {


  const URL = window.location.href;
  const match = /code=([^&]+)/.exec(URL);
  const navigate = useNavigate();

  if(match) {
    const code = decodeURIComponent(match[1]);
    
    axiosInstance.post('/oauth/kakao', {code:code})
      .then(response => {
        const jwt = response.headers.authorization;
        console.log(response);
        setUserInfo(response.data.member[0]);
        setTrans(response.data.member[0]);
        setCs(response.data.member[0]);

        if(jwt) {
          sessionStorage.setItem('jwt', jwt);
          setUserInfo(response.data.member[0]);
          console.log(response.data.member[0]);
          console.log(userInfo);
          navigate('/mypage');
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