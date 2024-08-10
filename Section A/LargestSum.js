const LargestSum=(arr)=>{
    // removes duplicates by passing set constructor
    const distinctArrValues=[...new Set(arr)];

    // sorting array to desecending value
    const sorted=  distinctArrValues.sort((a,b)=>b-a)

   // console.log(sorted);
    
  
  
    // returns sum of first three values from descending order
    const result=sorted[0]+sorted[1]+sorted[2];
    

    return result;

}

const num=[1,5,8,6,7,9,9,9]

console.log(LargestSum(num))