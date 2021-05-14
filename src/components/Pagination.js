import React from 'react';

const Pagination= () => {
    return ( 
   <>
   <div className="pagination">
       <div className="pagination-sec">
           <button>Previous</button>
            <span>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
            </span>
           <button>Next</button>
           <button>Last</button>
       </div>
   </div>
 </>
   )
}

export default Pagination