import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Hometable = (props) => {
   const [tableArr, setTableArr] = useState();
   const [tableSortedArr, setTableSortedArr] = useState();

   useEffect(() => {
      getData('');
   }, [])

   useEffect(()=>{
      getData(props.name)
   },[props.name])
   async function getData(search) {
      try {
       var abcd= {
            userId: 1,
            page:1,
         }

         if(search)
         {
            abcd.search=search
         }
         console.log("abcd",abcd);
         const data = await axios({
            method: "get",
            url: "https://atlas.keystonefunding.com/api/contact/list",
            params: abcd
         })
            .then((res) => {
               if (res.status === 200) {
                  setTableArr(res.data.data);
               }
            })
      }
      catch (e) {
         console.log(e);
      }
   }


   //     const jsonArr=[    
   //     {name:"John Christensen", 
   //     staget:"Pre-Approved",
   //     createdDate:'3 days ago ',
   //     loanSenarios:[{
   //             subtitle:'Stone HP 30 100k Cashout',title:'Home Possible ',subData:[{label:'Upfront',value:'450'},{label:'rate',value:'450'},{label:'rate',value:'450'}]
   //     },{  subtitle:'Stone HP 30 100k Cashout',title:'Home Possible ',subData:[{label:'Upfront',value:'450'},{label:'rate',value:'450'},{label:'rate',value:'450'}]},
   //     {  subtitle:'Stone HP 30 100k Cashout',title:'Home Possible ',subData:[{label:'rate',value:'450'},{label:'rate',value:'450'},{label:'rate',value:'450'}]}],
   //     campaigns:[{title:'Home Possible ' },{title:'Home Possible ' }],
   //      browsApp:[{
   //             title:' Stone HP 30 100k Cashout'
   //     }]
   //    } ,  {name:"mike Christensen", 
   //     staget:"Pre-Approved",
   //     createdDate:'5 days ago',
   //     loanSenarios:[{
   //             subtitle:'Stone HP 30 100k Cashout',title:'Home Possible ',subData:[{label:'Upfront',value:'450'},{label:'rate',value:'450'},{label:'rate',value:'450'}]
   //     },{  subtitle:'Stone HP 30 100k Cashout',title:'Home Possible ',subData:[{label:'Upfront',value:'450'},{label:'rate',value:'450'},{label:'rate',value:'450'}]},
   //     {  subtitle:'Stone HP 30 100k Cashout',title:'Home Possible ',subData:[{label:'rate',value:'450'},{label:'rate',value:'450'},{label:'rate',value:'450'}]}],
   //     campaigns:[{title:'Home Possible ' },{title:'Home Possible ' }],
   //      browsApp:[{
   //             title:' Stone HP 30 100k Cashout'
   //     }]
   //    }   

   // ]
   //     useEffect(()=>{

   //       getData('','')

   //     },[])
   //     const getData=(filed,order)=>{
   //       if(order==='ASC'){
   //           setTableArr(jsonArr.sort())
   //       }
   //       if(order==='DESC'){
   //           setTableArr(jsonArr.reverse())
   //       }
   //       setTableArr(jsonArr)
   //     }

   //     const ascSorting=async(field)=>{
   //      let array=  tableArr
   //      array.sort((a, b) => {
   //   return a.name.localeCompare(b.name)
   // });




   //     }
   //     const descSorting=async (field)=>{
   //        let array=  tableArr
   //      array.sort((a, b) => {
   //   return b.name.localeCompare(a.name)
   // });
   //       setTableArr(array)
   //     }

   return (
      <>
         <div className="td-main">
            <div className="tablemain">
               <Table>
                  <tr className="head-td">
                     <th>
                        <div className="thblock">
                           First Name
                  <span>
                              <button>
                                 {/* <button type="button" onClick={()=>{getData('name','ASC')}}> */}
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5L5.5 1L10 5.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                              <button>
                                 {/* <button type="button"  onClick={()=>{getData('name','DESC')}}> */}
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
                              <button>
                                 {/* <button type="button" onClick={()=>{getData('stage','ASC')}}> */}
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5L5.5 1L10 5.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                              <button>
                                 {/* <button type="button" onClick={()=>{getData('stage','DESC')}}> */}
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
                              <button>
                                 {/* <button type="button" onClick={()=>{getData('created','ASC')}} > */}
                                 <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5L5.5 1L10 5.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                              </button>
                              <button>
                                 {/* <button type="button" onClick={()=>{getData('created','DESC')}}> */}
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

                  {tableArr?.map((element, index) => {
                     return (
                        <>
                           <tr>
                              <td>{element.firstName} {element.lastName}</td>
                              <td>{element.stage}</td>
                              <td>{element.createdDate}</td>
                              <td><div className="loan-td">
                                 {element?.loanScenarios?.map((ele, index) => {
                                    console.log("ele", ele);
                                    return (
                                       <>
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
                                       </>
                                    )
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

      </>

   )

}
export default Hometable