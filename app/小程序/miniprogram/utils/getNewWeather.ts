const getWeatherData = (location: string,TP : string) =>{
    return new Promise((resolov,reject) =>{
        wx.request({
        url:'https://devapi.qweather.com/v7/'+TP,
        method:'GET',
        data:{
            location,
            key:'f31f589fa6614cb9b23537e13f517afe'
        },
        success(res){
            resolov(res.data)
        },
        fail(err){
            reject(err)
        },
    })
    }) 
}
module.exports = getWeatherData