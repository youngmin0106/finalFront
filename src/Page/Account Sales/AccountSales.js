import { useState } from "react";
import axiosInstance from "../../axiosInstance";
import './AccountSales.css';
import option from "../../mockData/option";
import server from "../../mockData/server";
import { useNavigate } from "react-router-dom";

// 계정 판매(등록) 페이지
function AccountSales( {trans, setTrans} ) {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('ServerSelect');  // 게임서버 담는 state

  const handleSelectChange = (e) => {   // 게임명 선택에 따라 서버가 바뀌는 핸들러
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    changeHandler(e); // selectedOption은 체인지될때마다 바뀌지않고 초기값으로 보이기 때문에 server도 바뀔때마다 바꿔달라는 핸들러 넣음
  };

  const changeHandler = (e) => {
    setTrans({
      ...trans,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div className="AccountSales">
      <div className="title">
        <h1>계정 등록</h1>
      </div>
      <table>
        <tbody>
        <tr>
          <th>판매 가격</th>
          <td className="priceInput">
            <input type="text" name="price" className="t-1" placeholder="판매 가격 입력" onChange={changeHandler}/>원
          </td>
        </tr>
        <tr>
          <th>캐릭터 종류</th>
          <td>
            <span>
            <select name="game" onChange={handleSelectChange} value={selectedOption}>
              <option defaultValue={"게임명선택"} className="t-2-1">게임명 선택▼</option>
              
              {
                option.map((data, i) => {
                  
                  return(
                    <option value={data.id} name="game" className="t-2-1"  onChange={changeHandler} key={i}> {data.gameName} </option>
                    
                  )
                })
              }
              
            </select>
  
            &nbsp;
            <select name="server" onChange={changeHandler}>
            <option defaultValue={"서버선택"} className="t-2-2">서버 선택▼</option>
              {
                server[`${selectedOption}`].map((data, i) => {
                  return(
                    <option value={data} className="t-2-2" key={i}> {data} </option>
                  )
                })
              }
            </select>
            </span>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td><input type="text" placeholder="제목을 입력하세요" name="title" className="t-3" onChange={changeHandler}/></td>
        </tr>
        <tr>
          <th>상세설명</th>
          <td><textarea name="content" className="t-4" onChange={changeHandler}/></td>
        </tr>
        </tbody>
      </table>
      <div className="notice">
      <b>📢NOTICE</b>
      <ol>
        <li>오픈카톡, 계좌, 연락처, 타사이트 유도 문구 기재시 사기거래 위험이 있어 통보없이 물품이 삭제처리됩니다</li>
        <li>물품에 기재한 내용과 실 물품의 내용이 다를시 구매자가 취소할 수 있습니다</li>
        <li>판매가 불가한 물품은 통보없이 삭제처리 될 수 있습니다(EX. 이미 판매된 물품 등등)</li>
        <li>암호코드(판매코드, 구매코드)를 요청하는 구매자는 사기입니다. 마이페이지에서 판매중을 확인하고 계정을 인계해주세요</li>
        <li>물품등록시 회원정보 페이지에 등록된 휴대폰번호, 이름, 이메일 주소를 정확히 확인 후 이용을 부탁드립니다</li>
        <li>물품의 내용, 거래, 결제 등 관련된 모든 책임(민/형사상)은 판/구매자에게 있습니다</li>
        <li>거래 완료시 마이페이지에서 채팅내용 확인이 가능합니다</li>
        <li>상대방에 전자계약서 신청시 구매자가 인수처리 후 카카오톡으로 발송됩니다</li>
      </ol>
      </div>
      <div className="insertbtn">
      <button onClick={() => {
        axiosInstance.post('/insertTrans', trans)
            .then(response => {
              alert(response.data);
              navigate('/transPost'); // 거래게시물로 ㄱㄱ
            }).catch(error => {
              console.log(error);
              alert('로그인 후 작성 가능합니다.');
            })
      }}>계정 등록하기</button>
      </div>
    </div>
  );
}

export default AccountSales;