const assert = require("assert")
const nock = require('nock')

const planets1 = {
  name: "Tatooine", 
  rotation_period: "23", 
  orbital_period: "304", 
  diameter: "10465", 
  climate: "arid", 
  gravity: "1 standard", 
  terrain: "desert", 
  surface_water: "1", 
  population: "200000", 
  residents: [
      "https://swapi.co/api/people/1/", 
      "https://swapi.co/api/people/2/", 
      "https://swapi.co/api/people/4/", 
      "https://swapi.co/api/people/6/", 
      "https://swapi.co/api/people/7/", 
      "https://swapi.co/api/people/8/", 
      "https://swapi.co/api/people/9/", 
      "https://swapi.co/api/people/11/", 
      "https://swapi.co/api/people/43/", 
      "https://swapi.co/api/people/62/"
  ], 
  films: [
      "https://swapi.co/api/films/5/", 
      "https://swapi.co/api/films/4/", 
      "https://swapi.co/api/films/6/", 
      "https://swapi.co/api/films/3/", 
      "https://swapi.co/api/films/1/"
  ], 
  created: "2014-12-09T13:50:49.641000Z", 
  edited: "2014-12-21T20:48:04.175778Z", 
  url: "https://swapi.co/api/planets/1/"
}


describe("Assignment 3 - async", function() {
  afterEach(function() {
    nock.cleanAll()
  });

  it("JS file should exist, and should have a named export", function() {
    const {
      getTatooineResidents,
    } = require("./async-functions")
    assert.strictEqual(
      typeof getTatooineResidents,
      "function",
      "async-functions should export a function called getTatooineResidents"
    )
  })

  it('getTatooineResidents should make a request to https://swapi.co/api/planets/1/', function(done){
    // Intercept request and respond with a fake response
    const api = nock('https://swapi.co/api')
      .get('/planets/1/')
      .reply(200, planets1)

    // require function from file
    const { getTatooineResidents } = require('./async-functions')

    try {
      // call function
      getTatooineResidents()

      // check if request was made to api
      assert.strictEqual(
        api.isDone(),
        true,
        'No request has been made to https://swapi.co/api/planets/1/'
      )
        
      // everything is ok
      done()
    } catch(err){
      // Some error happened, display the output of the error
      done(err)
    }
  })

  it('getTatooineResidents should return a promise', function(done){
    // Intercept request and respond with a fake response
    nock('https://swapi.co/api')
      .get('/planets/1/')
      .reply(200, planets1)

    // require function from file
    const { getTatooineResidents } = require('./async-functions')

    try {
      // call function
      const p1 = getTatooineResidents()
  
      // check if it returns a promise
      assert(p1 instanceof Promise, `getResidents should return a promise, it returned: ${p1}`)

      //everything is ok
      done()
    } catch(err){
      // Some error happened, display the output of the error
      done(err)
    }
  })

  it('getTatooineResidents should return a promise which resolves with an array of urls for the residents of Tatooine', function(done){
    // Intercept request and respond with a fake response
    const api = nock('https://swapi.co/api')
      .get('/planets/1/')
      .reply(200, planets1)

    // require function from file
    const { getTatooineResidents } = require('./async-functions')

    // call the function and request the resolved value of the promise
    getTatooineResidents()
      .then(residents => {
        // check if the promise resolved with an array of resident urls
        assert.deepStrictEqual(
          residents,
          planets1.residents,
          `
          The function should a return promise which resolves with an array of urls for the residents of Tatooine like : 
            [
              ${planets1.residents.map(url => `\n              "${url}"`)} \n
            ] 
          the promise that was returned from you function resolved with: ${residents}`
        )

        // everything is ok
        done()
      })
      // catch errors and display the output
      .catch(done)
  })
})

