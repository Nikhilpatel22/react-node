import React,{ useState } from 'react'

export const usePagination=(perPageRedords,totalRecords)=>{

    const totalPages=Math.ceil(totalRecords/perPageRedords);

    // console.log(totalPages)

    const [startPageIndex,setStartPageIndex] = useState(0);
    const [endPageIndex,setEndPageIndex] = useState(perPageRedords-1);
    const [currentPage,setCurrentPage] =useState(1);

    const dispPage = (pageNo) =>{

        currentPage(pageNo);

        let start_page_index = (perPageRedords*pageNo)-perPageRedords;
        let end_page_index = (perPageRedords*pageNo)-1;

        setStartPageIndex(start_page_index);

        if(end_page_index > totalRecords)
        {
            setEndPageIndex(totalRecords-1);
        }else{
            setEndPageIndex(end_page_index);
        }

    }
     return [
         totalPages,
         startPageIndex,
         endPageIndex,
         currentPage,
         dispPage
     ]
}



