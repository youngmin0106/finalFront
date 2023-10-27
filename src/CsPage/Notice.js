// Notice.js

import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import PaginationComponent from "../component/PaginationComponent";
import Search2 from "../component/Search2";


function Notice() {
    const [noticeList, setNoticeList] = useState([]);
    const [isNoticeLoading, setIsNoticeLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        if (isNoticeLoading) {
            loadNoticeList();
        }
    }, [isNoticeLoading]);

    const increaseViews = (postId) => {
        axiosInstance
            .put(`/notice/${postId}/views`)
            .then(() => {
                loadNoticeList();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    const loadNoticeList = () => {
        axiosInstance
        .get("/notice")
        .then((response) => {
            console.log(response.data);
            setNoticeList(response.data);
            setIsNoticeLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setIsNoticeLoading(false);
        });
    };
   
    return (
        <div className="notice">
            <ul className="ulList">
                <h2 style={{ fontSize: "25px" }}>- 공지사항</h2>
                <li>
                    <a href="/cs">공지사항</a>
                </li>
                <li>
                    <a href="/questions">자주묻는질문</a>
                </li>
                <li>
                    <a href="/onetoone">1:1문의</a>
                </li>
            </ul>

            <section className="noti">
                <div className="page-title">
                    <div className="container">
                        <h3>공지사항</h3>
                    </div>
                </div>
                <Search2
                    increaseViews={increaseViews}
                    data={noticeList} 
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                />
                <PaginationComponent
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={noticeList.length}
                    onPageChange={(page) => setCurrentPage(page)}
                />
                </section>
        </div>
    );
}

export default Notice;
