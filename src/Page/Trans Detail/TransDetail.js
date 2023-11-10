import { useEffect, useState } from 'react';
import './TransDetail.css';
import axiosInstance from '../../axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const TransDetail = ({ trans, userInfo, setStartTransInfo, startTransInfo, transDetails, setTransDetails }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [transDetail, setTransDetail] = useState({
    id: id,
    title: '',
    content: '',
    game: '',
    server: '',
    member: '',
    price: ''
  });

 
 
  const changeHandler = (e) => {
    setTransDetail({
      ...transDetail,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    axiosInstance.get(`/transDetail/${id}`)
      .then((response) => {
        setTransDetail(response.data);
        setTransDetails(response.data);
        setStartTransInfo(startTransInfo => ({
          ...startTransInfo,
          ...response.data
        }));

      }).catch((error) => {
        console.log(error);
      })
  }, [])

  console.log("trans : " + trans);
  console.log("transDetail : " + transDetail)
  
  const isDisabled = trans.member.username !== transDetail.member.username;


  const startTransHandler = () => {
    axiosInstance.post('/startTrans', {startTransInfo : startTransInfo, sellerId : startTransInfo.member.username, buyerId : userInfo.username, postId : id, transDetail : transDetail})
    .then(response => {
      alert(response.data);
      console.log('구매요청 완료');
      console.log(startTransInfo);
      setStartTransInfo({sellerId : startTransInfo.member.username, buyerId : userInfo.username, postId : id, transDetail : transDetail})
      navigate('/testTrans');
    }).catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="TransDetail">
      <div className='firstLayout'>
        <Card style={{ width: '15rem', height: '212px' }}>
          <Card.Img variant="top" src="../img/samplebronze.png" className='gradeImg' />
          <Card.Body>
            <Card.Title className='grade'>멤버등급</Card.Title>
            <Card.Text>
              {transDetail.member.name}님
            </Card.Text>
          </Card.Body>
        </Card>

        <table className='itemTable'>
          <tbody>
            <tr>
              <th>제목</th>
              <td><input type="text" defaultValue={transDetail.title} className='tableLeft' name='title' onChange={changeHandler} disabled={isDisabled} /></td>
            </tr>
            <tr>
              <th>게임</th>
              <td><input type="text" defaultValue={transDetail.game} className='tableLeft' name='game' onChange={changeHandler} disabled /></td>
            </tr>
            <tr>
              <th className='bottom'>서버</th>
              <td><input type="text" defaultValue={transDetail.server} className='tableLeft' name='server' onChange={changeHandler} disabled /></td>
            </tr>
          </tbody>
        </table>
      </div>
      {
        trans.member.username === transDetail.member.username ?
          <>
            <div className='write'>
              <div className='writeBtn'>
                <button className='updateBtn' onClick={() => {
                  axiosInstance.put('/updateTrans', transDetail)
                    .then(response => {
                      alert(response.data);
                      navigate('/transPost');
                    }).catch(error => {
                      console(error);
                      console(transDetail);
                    })
                }}>수정</button>
                <button className='deleteBtn' onClick={() => {
                  axiosInstance.delete(`/deleteTrans/${id}`)
                    .then(response => {
                      alert(response.data);
                      navigate('/transPost');
                    }).catch(error => {
                      console.log(error);
                    })
                }}>삭제</button>
              </div>
              <p>* 수정하시고 수정버튼 누르시면 됩니다.</p>
            </div>
          </>
          : <div />
      }
      <div className='secondLayout'>
        <h2> · 상세내용</h2>
        <div>
          <textarea defaultValue={transDetail.content} name='content' onChange={changeHandler} disabled={isDisabled}></textarea>
        </div>
      </div>
      <div className='thirdLayout'>
        <h2>결제금액</h2>
        <span>총 결제금액
          <input type='text' defaultValue={transDetail.price.toLocaleString('ko-KR')} className='totalPrice' name='price' onChange={changeHandler} disabled={isDisabled} />원
        </span>
      </div>
      <div className='detailBtn'>
        <button className='cancel' onClick={() => {
          navigate('/transPost');
        }}>취소</button>
       {trans.member.username !== transDetail.member.username && (
      <button className='buy' onClick={startTransHandler}>구매요청</button>
    )}
      </div>
    </div>
  )
}

export default TransDetail;