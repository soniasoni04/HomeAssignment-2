module.exports.groupAdultsByAgeRange  = function(transform){

    let CheckLengthOfArray

    if(transform.length === 0) return {}
    
    else{
        const outPeople = {} 
        CheckLengthOfArray = transform.filter((transform) => {
                 return transform.age >= 18
             })
        if(CheckLengthOfArray.length === 0) return {} 
    
        const younger = transform.filter((transform) => {
            if(transform.age <= 20 && transform.age >=18)
            return transform
        })
        if(younger.length!==0)
        outPeople['20 and younger'] = younger
        
        const Adult1 = transform.filter((transform) => {
            if(transform.age > 20 &&  transform.age <= 30)
            return transform
        })
        if(Adult1.length!==0)
        outPeople['21-30'] = Adult1
        
        const Adult2 = transform.filter((transform) => {
            if(transform.age > 30 &&  transform.age <= 40)
            return transform
        })
        if(Adult2.length!==0)
        outPeople['31-40'] = Adult2
        
        const Adult3 = transform.filter((transform) => {
            if(transform.age > 40 &&  transform.age <= 50)
            return transform
        })
        if(Adult3.length!==0)
        outPeople['41-50'] = Adult3
        
        const Adult4 = transform.filter((transform) => {
            if(transform.age > 50)
            return transform
        })
        if(Adult4.length!==0)
        outPeople['51 and older'] = Adult4

        return outPeople    
    }
}





