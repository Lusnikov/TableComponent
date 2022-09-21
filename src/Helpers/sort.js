
export const compare = ( a, b, key) =>{
        if ( a[key] < b[key]){
            return -1;
          }
        if ( a[key] > b[key] ){
        return 1;
        } 
      return 0;
}

export const sortItems = (items, key) =>{
    if (!key) {
  
      return items
    }
    const items2 = JSON.parse(JSON.stringify(items));
    if (key.includes('-')) {return items2.sort((a,b) => compare(a,b, key.replace('-', ''))).reverse()}
    return items2.sort((a,b) => compare(a,b, key))
}