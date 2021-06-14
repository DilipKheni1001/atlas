import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Hometable = (props) => {
  const [tableArr, setTableArr] = useState();
  const [tableTotal, setTableTotal] = useState();
  const [pageCount, setPageCount] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(50);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePageClick = (data) => {
    let selected = data.selected;
    setcurrentPage(selected + 1);
  };

  useEffect(() => {
    getData("");
  }, [currentPage, props.name]);

  async function getData() {
    try {
      var result = {
        userId: 1,
        page: 1,
      };
      if (currentPage) {
        result.page = currentPage;
      }
      if (props.name) {
        if (currentPage) {
          result.page = currentPage;
        }
        result.search = props.name;
      }

      const data = await axios({
        method: "get",
        url: "https://atlas.keystonefunding.com/api/contact/list",
        params: result,
      }).then((res) => {
        if (res.status === 200) {
          setTableArr(res.data.data);
          setPageCount(Math.ceil(res.data.totalResults / itemsPerPage));
          setTableTotal(res.data.totalResults);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getmyData("", "");
  }, []);
  const getmyData = (filed, order) => {
    if (order === "ASC") {
      const myData = []
        .concat(tableArr)
        .sort((a, b) => {
          if (filed === "firstName+lastName") {
            return `${a.firstName} ${a.lastName}` >
              `${b.firstName} ${b.lastName}`
              ? 1
              : -1;
          }
          return a[filed] > b[filed] ? 1 : -1;
        })
        .map((item) => {
          return item;
        });
      setTableArr(myData);
    }
    if (order === "DESC") {
      const myData = []
        .concat(tableArr)
        .sort((a, b) => {
          if (filed === "firstName+lastName") {
            return `${a.firstName} ${a.lastName}` >
              `${b.firstName} ${b.lastName}`
              ? 1
              : -1;
          }
          return a[filed] < b[filed] ? 1 : -1;
        })
        .map((item) => {
          return item;
        });
      setTableArr(myData);
    }
  };
  console.log("tableArr", tableArr);
  return (
    <>
      <div className="td-main">
        <div className="tablemain">
          <Table>
            <tr className="head-td">
              <th>
                <div className="thblock">
                  Name
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        getmyData("firstName+lastName", "ASC");
                      }}
                    >
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5L5.5 1L10 5.5"
                          stroke="#CCCCCC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        getmyData("firstName+lastName", "DESC");
                      }}
                    >
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5.5 5.5L10 1"
                          stroke="#CCCCCC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </th>
              <th>
                <div className="thblock">
                  Stage
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        getmyData("stage", "ASC");
                      }}
                    >
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5L5.5 1L10 5.5"
                          stroke="#CCCCCC"
                          strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        getmyData("stage", "DESC");
                      }}
                    >
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5.5 5.5L10 1"
                          stroke="#CCCCCC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </th>
              <th className="cre-1">
                <div className="thblock">
                  Created
                  <span>
                    <button
                      type="button"
                      onClick={() => {
                        getmyData("createdDate", "ASC");
                      }}
                    >
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5L5.5 1L10 5.5"
                          stroke="#CCCCCC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        getmyData("createdDate", "DESC");
                      }}
                    >
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5.5 5.5L10 1"
                          stroke="#CCCCCC"
                          strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </th>
              <th className="loan-1">
                <div className="thblock">Loan Scenarios</div>
              </th>
              <th className="loan-2">
                <div className="thblock">Campaigns</div>
              </th>
              <th>
                <div className="thblock">Borrower Apps</div>
              </th>
            </tr>

            {tableArr
              ?.slice(indexOfFirstItem, indexOfLastItem)
              ?.map((element, index) => {
                return (
                  <>
                    <tr>
                      <td>
                        {element.firstName} {element.lastName}
                      </td>
                      <td>{element.stage}</td>
                      <td>{element.createdDate}</td>
                      <td>
                        <div className="loan-td">
                          {element?.loanScenarios?.map((ele, index) => {
                            return (
                              <>
                                <div className="loan-box">
                                  <div className="box-l">
                                    Stone HP 30 100k Cashout
                                  </div>
                                  <div className="hp-main">
                                    <div className="hp-box">
                                      <h5>
                                        Home Possible 30yr 100K 2.000% Cashout
                                      </h5>
                                      <div className="row hp-sub">
                                        <div className="col-md-3">
                                          <p>Rate</p>
                                          <h4>2.750%</h4>
                                        </div>
                                        <div className="col-md-3">
                                          <p>Upfront costs</p>
                                          <h4>$1,234</h4>
                                        </div>
                                        <div className="col-md-3">
                                          <p>Mo. payment</p>
                                          <h4>1.234,56</h4>
                                        </div>
                                        <div className="col-md-3">
                                          <p>Mo. payment</p>
                                          <h4>1.234,56</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </td>

                      <td>
                        <div className="loan-td">
                          <div className="campa-box">
                            <div className="box-l">
                              Stone HP 30 100k Cashout
                            </div>
                          </div>
                          <div className="campa-box">
                            <div className="box-l">
                              Stone HP 30 100k Cashout
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="loan-td">
                          <div className="apps-box">
                            <div className="box-l">
                              Stone HP 30 100k Cashout
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
          </Table>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};
export default Hometable;
