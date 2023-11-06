import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function GoogleLogin({setUserInfo, setCs, setTrans}) {
  const URL = window.location.href;
  const match = /access_token=([^&]+)/.exec(URL);
  const navigate = useNavigate();

  if(match) {
    const accessToken = decodeURIComponent(match[1]);

    axiosInstance.post('/oauth/google', {accessToken : accessToken})
      .then(response => {
        const jwt = response.headers.authorization;
        setTrans({member:response.data.member[0]});
        setCs({member:response.data.member[0]});
        if(jwt){
          sessionStorage.setItem('jwt', jwt);
          console.log(response.data.member[0]);
          setUserInfo(response.data.member[0]);
          setCs(response.data.member[0]);
          setTrans(response.data.member[0]);
          navigate('/mypage');
        }

      }).catch(error => {
        alert('로그인 실패');
        console.log(error);
      })


  } else {
    console.log('액세스토큰 오류');
  }
 
  return (
    <>
      <h1>로그인 중입니다.</h1>
    </>
  );
}


export default GoogleLogin;