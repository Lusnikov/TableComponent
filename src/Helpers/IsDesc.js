export const isDesc = (headerCell,value) =>{
    let isDesc;
    if (headerCell === null){
        isDesc = null;
    } else {
      const valueToSort = headerCell.slice(1)
      if (value === valueToSort){
        isDesc = true
      }
      if (value === headerCell){
        isDesc = false
      }
    }
    return isDesc
}