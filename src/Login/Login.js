import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import kakaoicon from './LoginImg/kakaoicon.png';
import googleico from './LoginImg/googleicon.png';
import navericon from './LoginImg/navericon.png';
import './LoginCss/Login.css';
import { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login( {setUserInfo, setIsAuth , setTrans, setCs} ) {
  
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  
  const [loginData, setLoginData] = useState({
    username : '',
    password : '',
  });

  const idPwInputHandler = (e) => {
    const { id, value } = e.target;
    setLoginData({
      ...loginData,
      [id]: value,
    });
  };

  const loginBtnClickHandler = (e) => {

    e.preventDefault();

    axiosInstance.post('/login', loginData)
    .then((response) => {
      const jwt = response.headers.authorization;
      console.log("로그인 성공");
      console.log(response.data)
      localStorage.setItem('id', loginData.username);
      sessionStorage.setItem('jwt', jwt);
      // 혹시 값안들어갈때 용도 : setUserInfo({username : response.data.member[0].username, name : response.data.member[0].name, mileage : response.data.member[0].mileage, transactionPoints : response.data.member[0].transactionPoints, phone : response.data.member[0].phone});
      setUserInfo(response.data.member[0]);
      setTrans({member : response.data.member[0]});
      setCs({member : response.data.member[0]});
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("아이디 패스워드를 확인하세요.")
      });
  }
console.log(setCs);
  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ 
          marginTop: 8, 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          }}
        >

    <Typography component="h1" variant="h5"> 로그인 </Typography>

    <Box component="form" noValidate sx={{ mt: 1 }}>
    <TextField margin="normal" required fullWidth id="username"
      label="아이디" name="username" autoComplete="username" autoFocus 
      onChange={idPwInputHandler} value={loginData.username} />

    <TextField margin="normal" required fullWidth label="비밀번호" 
      type="password" id="password" autoComplete="current-password"
      onChange={idPwInputHandler} value={loginData.password} />

    <FormControlLabel control={<Checkbox value="remember" color="primary" />}
      label="아이디 저장" />

    <Button type="submit" fullWidth variant="contained" 
      style={{ backgroundColor: "#9DC8C8" }} sx={{ mt: 3, mb: 1 }} 
      onClick={loginBtnClickHandler}> 로그인 </Button>
              
    <div className='loginBox'>
      <a href="#!" onClick={() => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
      }}>
      <img src={kakaoicon} alt = "kakaoLoginImg"></img></a>
      
      <a href="#!" onClick={() => {
         window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=token&scope=openid%20email%20profile`;
      }}><img src={googleico} alt = "googleLoginImg"></img></a>
      <a href="#!"><img src={navericon} alt = "naverLoginImg"></img></a>
    </div>
    
    <Grid container>
      <Grid item xs>
        <Link href="#" style={{ textDecoration: "none" }} variant="body2"> 아이디 찾기 </Link>
      </Grid>
      <Grid item xs>
        <Link href="#" style={{ textDecoration: "none" }} variant="body2"> 비밀번호 찾기 </Link>
      </Grid>
      <Grid item>
        <Link href="/member-sign" style={{ textDecoration: "none" }} variant="body2"> {"회원가입"} </Link>
      </Grid>
    </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;



