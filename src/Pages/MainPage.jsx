import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { getOrders } from "../utils/_requests";
import "./MainPage.scss";

function MainPage(props) {
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(5);
  const [isFetching, setIsFetching] = useState(true);

  const [searchParams, setSearchParams] = useState({
    currentPage: 1,
    pagesize: 10,
    code: "",
    key: "price",
    value: "asc",
  });

  const fetchOrders = async () => {
    if (searchParams.pagesize !== 0) {
      const fetchedOrders = await getOrders(
        searchParams.currentPage,
        searchParams.pagesize,
        searchParams.key,
        searchParams.value,
        searchParams.code
      );

      if (fetchedOrders) {
        setOrders(fetchedOrders.data.dataObjects);
        setTotalPages(
          Math.ceil(fetchedOrders.data.count / searchParams.pagesize)
        );
      }
      fetchedOrders?.statusText === "OK"
        ? setIsFetching(false)
        : setIsFetching("error");
    }
  };

  useEffect(() => {
    setIsFetching(true);
    fetchOrders();
  }, [searchParams]);

  return (
    <div className="MainPage">
      <h1>Created by Muhammad</h1>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        totalPages={totalPages}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Код</th>
            <th>Название</th>
            <th>Валюта</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {isFetching === "error" ? (
            <tr>
              <th className="error-text">Server didnt response{'('}</th>
            </tr>
          ) : isFetching ? (
            searchParams.pagesize !== 0 ? (
              orders.map((order, index) => (
                <tr key={order.code}>
                  <th>{order.researchId}</th>
                  <th>{order.name}</th>
                  <th>{order.currencyName}</th>
                  <th>{order.price}</th>
                </tr>
              ))
            ) : null
          ) : (
            <tr className="preloader">
              <th className="loader"></th>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        totalPages={totalPages}
      />
    </div>
  );
}

export default MainPage;
