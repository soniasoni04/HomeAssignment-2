module.exports.getTatooineResidents =  async () => {
    const superagent = require('superagent')
    superagent.get('https://swapi.co/api/planets/1/')
    .then(res => {
        console.log(res.body.residents[0])
        return(res.body.residents)
    })

}