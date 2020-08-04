async function Get(props){
    try{
        const response = await fetch(props)
        const json = await response.json();
        return json
    }catch(error){
        console.log(error);
    }
    
}

export default Get;