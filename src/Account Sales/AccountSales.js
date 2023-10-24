import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import './AccountSales.css';
import option from "../mockData/option";
import server from "../mockData/server";

function AccountSales( {userInfo} ) {
  const [account, setAccount] = useState({
    price: '',
    game: '',
    server: '',
    title: '',
    content: '',
    memberid: userInfo.username
  });

  const [gServer, set] =useState(server);
  const [gName, setGName] = useState(option);



  const changeHandler = (e) => {
    setGName({
      ...gName,
      [e.target.id] : e.target.value
    })
  }

  const [selectedOption, setSelectedOption] = useState('ServerSelect');

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };



  return(
    <div className="AccountSales">
      <h1>계정 등록</h1>
      <table>
      
        <tbody>
        <tr>
          <th>판매 가격</th>
          <td><input type="text" name="price" placeholder="판매 가격 입력"/>원</td>
        </tr>
        <tr>
          <th>캐릭터 종류</th>
          <td>
            <span>
    
            <select name="game" onChange={handleSelectChange} value={selectedOption}>
              <option defaultValue={"게임명선택"}>게임명 선택▼</option>
              
              {
                option.map((data) => {
                  
                  return(
                    <option value={data.id}> {data.gameName} </option>
                    
                  )
                })
              }
              
            </select>
  
            &nbsp;
            <select name="server">
              {
                server[`${selectedOption}`].map((data, i) => {
                  return(
                    <option value={i}> {data} </option>
                  )
                })
              }
            </select>
            </span>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td><input type="text" placeholder="제목을 입력하세요"/></td>
        </tr>
        <tr>
          <th>상세설명</th>
          <td><textarea cols="70" rows="10"/></td>
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
      <button>계정 등록하기</button>
    </div>
  );
}

export default AccountSales;