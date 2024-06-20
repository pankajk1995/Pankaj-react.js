import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useSearchParams } from "react-router-dom";
import { GetproductData } from "../Redux/Product/action";

const Productdata = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data, totalpage } = useSelector(
    (store) => store.ProductReducer
  );

  const [search, setsearch] = useSearchParams();
  console.log(totalpage);
  // for pagination state

  const [page, setpage] = useState(1);
  // for searching

  const [find, setfind] = useState("");
  useEffect(() => {
    let paramobj = {
      params: {
        category: search.getAll("category"),
        _sort: "price",
        _order: search.get("sort"),
        _limit: 6,
        _page: page,
        q: find,
      },
    };
    let id = setTimeout(() => {
      dispatch(GetproductData(paramobj));
    }, 1000);
    //clear time use for prevent refresh
    return () => {
      console.log("clean up");
      clearTimeout(id);
    };
  }, [search, page, find]);

  // Delete part
  const handledelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/${id}`)
      .then((res) => {
        dispatch(GetproductData({}));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // update

  return isLoading ? (
    <h1>Loading..</h1>
  ) : isError ? (
    <h1>Some thing went wrong</h1>
  ) : (
    <div>
      <div>
        <input
          value={find}
          onChange={(e) => setfind(e.target.value)}
          type="text"
          placeholder="search here"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "15px",
          marginTop: "15px",
          backgroundColor:"grey"
        }}
      >
        {data.length > 0 &&
          data.map((el) => (
            <div key={el.id} style={{ border: "2px solid green" }}>
              <div
                style={{
                  textAlign: "center",
                  boxshadow:
                    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }}
              >
                {<img src={el.image} alt="" height={200} width={200} style={{marginTop:"12px",backgroundColor:"transparent"}}/>}
                <h3 style={{ color: "green" }}>{el.category}</h3>
                <marquee>
                  <p>💲:{el.price}</p>
                </marquee>
                <p>{el.description}</p>
                <div style={{ padding: "5px", margin: "3px" }}>
                  <button
                    onClick={() => handledelete(el.id)}
                    style={{
                      height: "35px",
                      color: "red",
                      backgroundColor: "black",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${el.id}`}>
                    <button
                      style={{
                        height: "35px",
                        color: "red",
                        backgroundColor: "black",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                  <Link to={`/editall/${el.id}`}>
                    <button
                      style={{
                        height: "35px",
                        color: "red",
                        backgroundColor: "black",
                        cursor: "pointer",
                      }}
                    >
                      Edit all data
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div style={{ marginTop: "25px", textAlign: "center" }}>
        <button
          style={{
            height: "35px",
            color: "yellow",
            backgroundColor: "black",
            cursor: "pointer",
          }}
          disabled={page == 1}
          onClick={() => setpage(page - 1)}
        >
          Pre
        </button>
        <button
          style={{
            height: "35px",
            color: "yellow",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
        <button
          style={{
            height: "35px",
            color: "yellow",
            backgroundColor: "black",
            cursor: "pointer",
          }}
          disabled={page == Math.ceil(totalpage / 5)}
          onClick={() => setpage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Productdata;
