
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
        console.log(response.data.member[0]);
        // 혹시 값안들어갈때 용도 : setUserInfo({username : response.data.member[0].username, name : response.data.member[0].name, mileage : response.data.member[0].mileage, transactionPoints : response.data.member[0].transactionPoints, phone : response.data.member[0].phone});
        setUserInfo(response.data.member[0]);
        setTrans({member : response.data.member[0]});
        setCs({member : response.data.member[0]});

        if(jwt) {
          sessionStorage.setItem('jwt', jwt);
          console.log(response.data.member[0]);
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