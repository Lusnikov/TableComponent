export const  filtration = (object={}, items) =>{
    const test = (Object.keys(object))
    let result = [...items];
    const filtered = result.filter(e => {
        let status = true;
        for (let i=0; i<test.length; i++){
            const debug2 = object[test[i]];
            if (debug2 === null) continue;
        
            const debug = (e[test[i]] === object[test[i]])
            if (debug === false) {
                status = false
                break
            } 
        }
        return status
    })
    return filtered
}