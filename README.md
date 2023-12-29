  const [filtersearch,setfiltersearch]=useState([])


<button onClick={()=> {const filtersearch=videos?.filter((sea)=>sea.snippet.title.toLowerCase().includes(searchquery.toLowerCase()))
        setfiltersearch(filtersearch) }}>
         