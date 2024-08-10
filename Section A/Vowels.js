const FindVowels=(word)=>{
    const Vowels=['a','e','i','o','u','A','E','I','O','U']

    const result=[];

    for(let i=0;i<Vowels.length;i++){
        const char=word[i]

        if(Vowels.includes(char)){
            result.push(char);
        }
    }

    return result;
}

const word="JavaScript"
console.log(FindVowels(word));

