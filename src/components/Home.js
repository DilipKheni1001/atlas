import React, { useState } from 'react';
import Hometable from './Hometable';
import Pagination from './Pagination';
import Header from './Header'

const Home = () => {

    const [headers, setHeaders] = useState("");
    const handleProps = (e) => {
        setHeaders(e);
    }

    // const handleData=()=>{
    //     console.log("datas");
    // }
   
    return (
        <>
            <Header value={handleProps} />
            <div className="maindiv">
                <Hometable name={headers}  />
                {/* <Pagination /> */}
            </div>
        </>

    )

}
export default Home