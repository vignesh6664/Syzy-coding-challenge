const IntersectionOfArray=(arr1,arr2)=>{
    const result=arr1.filter((filt)=>arr2.includes(filt))
    return result
}

const num1=[1,2,3,4,5,6]
const num2=[1,3,5,7]
console.log(IntersectionOfArray(num1,num2));
