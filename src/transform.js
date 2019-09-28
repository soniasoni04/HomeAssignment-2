module.exports.groupAdultsByAgeRange  = function(transform){

    let CheckLengthOfArray

    if(transform.length === 0) return {}
    else 
        {
            CheckLengthOfArray = transform.filter((transform) => {
                 return transform.age > 18
             })
        if(CheckLengthOfArray.length === 0) return {} 
    
        const outPeople = {
            '20 and younger' :  [],
            '21-30' :           [],
            '31-40' :           [],
            '41-50' :           [],
            '51 and older' :    [],
        }
        
        const younger = transform.filter((transform) => {
            if(transform.age <= 20 && transform.age > 18 )
            return transform
        })
        outPeople['20 and younger'] = younger
        
        const Adult1 = transform.filter((transform) => {
            if(transform.age > 20 &&  ptransform.age <= 30)
            return transform
        })
        outPeople['21-30'] = Adult1
        
        const Adult2 = transform.filter((transform) => {
            if(transform.age > 30 &&  transform.age <= 40)
            return transform
        })
        outPeople['31-40'] = Adult2
        
        const Adult3 = transform.filter((transform) => {
            if(transform.age > 40 &&  transform.age <= 50)
            return transform
        })
        outPeople['41-50'] = Adult3
        
        const Adult4 = transform.filter((transform) => {
            if(transform.age > 50)
            return transform
        })
        outPeople['51 and older'] = Adult4
        return outPeople    
    }
}





