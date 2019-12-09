const rp = require('request-promise')

module.exports = async function(city = ''){
    if(!city){
        throw new Error('The city cannot be empty')
        return
    }
    const KEY = '9fda879e3d301ffe70810c4770370a64'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'
    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true
    }
    try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9
    //console.log(data)
    return {
        weather: `${data.name}: ${celsius.toFixed(0)}`,
        error: null
    }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    }
    
    
}

