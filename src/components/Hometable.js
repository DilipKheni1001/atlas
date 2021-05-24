import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import "../style.css";
import ReactPaginate from 'react-paginate';


const Hometable = (props) => {
   const [tableArr, setTableArr] = useState();
   const [tableTotal,setTableTotal]= useState();
   const [pageCount,setPageCount]= useState();
   const [currentPage, setcurrentPage] = useState(1);
   const [itemsPerPage, setitemsPerPage] = useState(50);
   const [pageNumberLimit, setpageNumberLimit] = useState(5);
   const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
   const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
   setcurrentPage(Number(event.target.id));
 };

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 
 const pages = [];
  for (let i = 1; i <= Math.ceil(tableTotal?.length/ itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

const handleNextbtn = () => {
   if (Math.ceil(tableTotal?.length/ itemsPerPage) === currentPage) {
      setcurrentPage(currentPage);
   } else {setcurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
     setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
     setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
   }
}
 };

 const handlePrevbtn = () => {
   if (currentPage === 1) {
      setcurrentPage(1)
} else {
      setcurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit == 0) {
     setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
     setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
   }
 }
 };

 let pageIncrementBtn = null;
 if (pages.length > maxPageNumberLimit) {
   pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
 }

 let pageDecrementBtn = null;
 if (minPageNumberLimit >= 1) {
   pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
 }

 const handlePageClick = (data) => {
   let selected = data.selected;
   setcurrentPage(selected + 1);
 }

 useEffect(() => {
   getData('');
}, [currentPage,props.name])

async function getData() {
   try {
       var result = {
         userId: 1,
         page:1
       }
      if(currentPage)
      {
         result.page=currentPage
      }
      if(props.name)
      {
         if(currentPage)
         {
            result.page=currentPage
         }
         result.search=props.name
      }
     console.log("result",result);
      const data = await axios({
         method: "get",
         url: "https://atlas.keystonefunding.com/api/contact/list",
         params: result
      }).then((res) => {
            if (res.status === 200) {
               console.log("data--",res.data);
               setTableArr(res.data.data);
               setPageCount(Math.ceil(res.data.totalResults / itemsPerPage));
               setTableTotal(res.data.totalResults);
              }
         })
   }
   catch (e) {
      console.log(e);
   }
}

        useEffect(()=>{
          getmyData('','')
         },[])
       const getmyData=(filed,order)=>{
         
         if(order==='ASC'){
         //   let latestArr=[...tableArr]
         //  setTableArr(latestArr.reverse())
          const myData = [].concat(tableArr)
               .sort((a, b) => a[filed] > b[filed] ? 1 : -1)
               .map(item=> {
                  return item;
               });
               setTableArr(myData);
               console.log("Sorting Asc Data--",myData);
         }
         if(order==='DESC'){
            //  let latestArr=[...tableArr]
            //  setTableArr(latestArr.reverse())
             const myData = [].concat(tableArr)
               .sort((a, b) => a[filed] < b[filed] ? 1 : -1)
               .map(item=> {
                  return item;
               });
               setTableArr(myData);
               console.log("Sorting Desc Data--",myData);
         }
          
                  
                  // <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
               // );
       }
      

   //     const ascSorting=async(field)=>{
   //      let array=  tableArr;
   //      array.sort((a, b) => {
   //   return a.name.localeCompare(b.name)
   //      }
   // }




       
   //     const descSorting=async (field)=>{
   //        let array=  tableArr;
   //      array.sort((a, b) => {
   //   return b.name.localeCompare(a.name);
   //      }
   // }
       
 
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
                             <button type="button" onClick={()=>{getmyData('firstName','ASC')}}>
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5L5.5 1L10 5.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                             
                                 <button type="button"  onClick={()=>{getmyData('firstName','DESC')}}>
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5.5 5.5L10 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                           </span>
                        </div>   
                     </th>
                     <th>
                        <div className="thblock">
                           Stage
                  <span>
                              
                                 <button type="button" onClick={()=>{getmyData('stage','ASC')}}>
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5L5.5 1L10 5.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                           
                                 <button type="button" onClick={()=>{getmyData('stage','DESC')}}>
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5.5 5.5L10 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                           </span>
                        </div>
                     </th>
                     <th className="cre-1">
                        <div className="thblock">
                           Created
                  <span>
                              
                                 <button type="button" onClick={()=>{getmyData('createdDate','ASC')}} >
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5L5.5 1L10 5.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                              
                                 <button type="button" onClick={()=>{getmyData('createdDate','DESC')}}>
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5.5 5.5L10 1" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                           </span>
                        </div>
                     </th>
                     <th className="loan-1">
                        <div className="thblock">
                           Loan Scenarios
               </div>
                     </th>
                     <th className="loan-2">
                        <div className="thblock">
                           Campaigns
               </div>
                     </th>
                     <th>
                        <div className="thblock">
                           Borrower Apps
               </div>
                     </th>
                  </tr>

                  {tableArr?.slice(indexOfFirstItem, indexOfLastItem)?.map((element, index) => {
                     return (
                        <>
                           <tr>
                              <td>{element.firstName} {element.lastName}</td>
                              <td>{element.stage}</td>
                              <td>{element.createdDate}</td>
                              <td><div className="loan-td">
                                 {/* {element?.loanScenarios?.map((ele, index) => {
                                   return (
                                       <> */}
                                          <div className="loan-box">
                                             <div className="box-l">
                                             Stone HP 30 100k Cashout
                                               
                                             </div>
                                             <div className="hp-main">
                                                <div className="hp-box">
                                                <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                                       {/* </>
                                    )
                                 })} */}
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
                     )
                  })}



                  {/* //   { tableArr && tableArr.map((item) => { */}
                  {/* //       return (<tr> */}
                  {/* //          <td>
                              //             <div className="profile">
                              //                <div className="protb-img"></div>
                              //                <p>{item.name}</p>
                              //             </div>
                              //          </td>
                              //          <td>{item.staget}</td>
                              //          <td>{item.createdDate}</td>
                              //          <td>
                              //             <div className="loan-td">
                              //                { */}
                  {/* //                   item.loanSenarios.map((loanItem) => { */}
                  {/* //                      return (<div className="loan-box">
                              //                         <div className="box-l">
                              //                            {loanItem.title}
                              //                         </div>

                              //                         <div className="hp-main">
                              //                            <div className="hp-box">
                              //                               <h5>{loanItem.subtitle}</h5>
                              //                               <div className="row hp-sub">
                              //                                  {loanItem.subData.map((subdata) => { */}
                  {/* //                                     return (<div className="col-md-3">
                              //                                        <p>{subdata.label}</p>
                              //                                        <h4>{subdata.value}</h4>
                              //                                     </div>)
                              //                                  })}

                                                               /* <div className="col-md-3">
                                 <p>Upfront costs</p>}
                                 <h4>$1,234</h4>
                              </div>
                              <div className="col-md-3">
                                 <p>Mo. payment</p>
                                 <h4>1.234,56</h4>
                              </div>
                              <div className="col-md-3">
                                 <p>Mo. payment</p>
                                 <h4>1.234,56</h4>
                              </div> */}
                  {/* //                </div>
                                             //             </div>
                                             //          </div>
                                             //       </div>) */}
                  {/* //    })
                                             // } */}

                  {/* <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  </div>*/}
                  {/* //    </div>
                                       // </td>
                                       // <td>
                                       //    <div className="loan-td">
                                       //       {item.campaigns.map((campaignsData) => { */}
                  {/* //          return (<div className="campa-box">
                                       //             <div className="box-l">
                                       //                {campaignsData.title}
                                       //             </div>
                                       //          </div>)
                                       //       })} */}

                  {/* <div className="campa-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  // </div> */}
                  {/* //                         </div>
                  //                      </td>
                  //                      <td>
                  //                         <div className="loan-td">
                  //                            {item.browsApp.map((browsData) => { */}
                  {/* //                               return (<div className="apps-box">
                  //                                  <div className="box-l">
                  //                                     {browsData.title}
                  //                                  </div>
                  //                               </div>)
                  //                            })}

                  //                         </div>
                  //                      </td>
                  //                   </tr>)
                  //                })
                  //             } */}


                  {/* <tr>
            <td>
               <div className="profile">
                  <div className="protb-img"></div>
                  <p>John Christensen</p>
               </div>
            </td>
            <td>Pre-Approved</td>
            <td>5 days ago</td>
            <td>
               <div  className="loan-td">
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
               <div  className="loan-td">
                  <div className="apps-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  </div>
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <div className="profile">
                  <div className="protb-img"></div>
                  <p>John Christensen</p>
               </div>
            </td>
            <td>Pre-Approved</td>
            <td>5 days ago</td>
            <td>
               <div  className="loan-td">
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
               </div>
            </td>
            <td>
               <div  className="loan-td">
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
               <div  className="loan-td">
                  <div className="apps-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  </div>
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <div className="profile">
                  <div className="protb-img"></div>
                  <p>John Christensen</p>
               </div>
            </td>
            <td>Pre-Approved</td>
            <td>5 days ago</td>
            <td>
               <div  className="loan-td">
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
               </div>
            </td>
            <td>
               <div  className="loan-td">
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
               <div  className="loan-td">
                  <div className="apps-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  </div>
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <div className="profile">
                  <div className="protb-img"></div>
                  <p>John Christensen</p>
               </div>
            </td>
            <td>Pre-Approved</td>
            <td>5 days ago</td>
            <td>
               <div  className="loan-td">
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
               </div>
            </td>
            <td>
               <div  className="loan-td">
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
               <div  className="loan-td">
                  <div className="apps-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  </div>
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <div className="profile">
                  <div className="protb-img"></div>
                  <p>John Christensen</p>
               </div>
            </td>
            <td>Pre-Approved</td>
            <td>5 days ago</td>
            <td>
               <div  className="loan-td">
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
               </div>
            </td>
            <td>
               <div  className="loan-td">
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
               <div  className="loan-td">
                  <div className="apps-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  </div>
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <div className="profile">
                  <div className="protb-img"></div>
                  <p>John Christensen</p>
               </div>
            </td>
            <td>Pre-Approved</td>
            <td>5 days ago</td>
            <td>
               <div  className="loan-td">
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                     <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
                  <div className="loan-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                      <div className="hp-main">
                        <div className="hp-box">
                           <h5>Home Possible 30yr 100K 2.000% Cashout</h5>
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
               </div>
            </td>
            <td>
               <div  className="loan-td">
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
               <div  className="loan-td">
                  <div className="apps-box">
                     <div className="box-l">
                        Stone HP 30 100k Cashout
                     </div>
                  </div>
               </div>
            </td> 
         </tr> */}
                  {/* </tr> */}

                 
               </Table>

            </div>
         </div>
         <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
        {/* <div className="pagination">
             <ul className="pageNumbers" >
            <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
        </ul>
      </div>
       */}
      </>
      )
   }
export default Hometable