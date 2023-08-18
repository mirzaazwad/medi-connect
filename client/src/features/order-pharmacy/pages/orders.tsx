import React, { useState, useEffect } from "react";
import OrderCard from "../components/orderCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import PaginationComponent from "../../../components/pagination";
import { useOrder } from "../hooks/useOrder";
import '../assets/css/orders.css';
import NavbarPharmacy from "../../../partials/navbarPharmacy";

const Orders = () => {
  const {displayedarrayComponents,totalPages,currentPage,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}=useOrder();

  return (
    <div>
      <div className="mb-5">
        <NavbarPharmacy />
      </div>
      <div className="my-orders d-flex justify-content-center w-100">
        <div className="d-flex flex-column custom-width-orders">
          {displayedarrayComponents.map((order) => (
            <OrderCard key={order.index} order={order} />
          ))}
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleNextPageClick={handleNextPageClick} handleFirstPageClick={handleFirstPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick} handleLastPageClick={handleLastPageClick}/>
        </div>
      </div>
      </div>
  );
};

export default Orders;
