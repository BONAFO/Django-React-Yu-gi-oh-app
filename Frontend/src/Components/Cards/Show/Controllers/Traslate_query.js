

export const get_queries =()=>{
    let raw_queries = window.location.href;
    let start_queries ={};

    raw_queries = raw_queries.replace(window.origin,"");
    raw_queries = raw_queries.replace(window.location.pathname,"");
    raw_queries = raw_queries.replace("?","");
    raw_queries = raw_queries.split("&")
    raw_queries = raw_queries.map(q => q.split("="));
    raw_queries.map(q => {
        if(q[0] !== ""){
            start_queries[q[0]] = q[1].trim()
        }
    })

return start_queries
}


