// import React, { useState, useEffect } from 'react';

// const Pagination = (props) => {
//     const [posts, setPosts] = useState(
//         JSON.parse(localStorage.getItem("myData"))
//     )

//     console.log("posts",posts);

//    const [data,setData]=useState(
//        JSON.parse(localStorage.getItem("myPage"))
//    )
//    console.log(data,data);

//     const [showPerPage, setShowPerPage] = useState(1);

//     const [pagination, setPagination] = useState({
//         start: 0,
//         end: showPerPage
//     })


//     const [counter, setCounter] = useState(1);
//     const [numberOfButtons, setNumberOfButton] = useState(Math.ceil(posts?.length / showPerPage))

//     useEffect(() => {
//         const value = showPerPage * counter;
//         onPaginationChange(value - showPerPage, value);
//     }, [counter])

//     const onPaginationChange = (start, end) => {
//         setPagination({ start: start, end: end });
//     }
//     const onButtonClick = (type) => {
//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(1);

//             } else {
//                 setCounter(counter - 1);

//             }

//         } else if (type === "next") {
//             if (numberOfButtons === counter) {
//                 setCounter(counter);

//             } else {
//                 setCounter(counter + 1);
//             }

//         } else if (type === "last") {

//         }

//     }



//     // {posts.slice(pagination.start, pagination.end).map((element, index) => {


//     return (
//         <>
//             <div className="pagination">
//                 <div className="pagination-sec">
//                     <button onClick={() => onButtonClick("prev")}>Previous</button>
//                     <span>
//                         {
//                             new Array(numberOfButtons).fill("").map((element, index) => {
//                                 return (
//                                     <>
//                                         {/* class={`page-item ${index +1 ===counter} ? "active":null`} */}
//                                         <a href="#" onClick={() => setCounter(index + 1)}>{index + 1}</a>

//                                     </>
//                                 )
//                             })
//                         }

//                         {/* <a href="#">2</a>
//                         <a href="#">3</a>
//                         <a href="#">4</a>
//                         <a href="#">5</a>
//                         <a href="#">6</a>
//                         <a href="#">7</a> */}
//                     </span>
//                     <button onClick={() => onButtonClick("next")}>Next</button>
//                     <button onClick={() => onButtonClick("last")}>Last</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Pagination