// 引入SDK核心类，js文件根据自己业务，位置可自行放置
const QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
const qqmapsdk = new QQMapWX({
    key: 'GCDBZ-5HWKK-DXFJY-AR2BX-QPLFZ-STF37'
});
const getWeather =require('../../utils/getNewWeather')
// pages/weather/weather.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        location:'', //当前经纬度
        address:'',//当前的位置信息
        nowWeather:{}, //现在的天气
        forecast:[], //7Day的天气
    },
    //获取当前的位置信息
    getLocation(){
        wx.showLoading({
            title:'加载中...'
        })
        wx.getLocation({
            type: 'gcj02',
            success: res => {
            // console.log(res)
            // 当前的经纬度
            const latitude = res.latitude
            const longitude = res.longitude
            this.setData({
                location:longitude+','+latitude
            })
            // 逆地址解析  经纬度>>>地址
            this.getReverseGeocoder(latitude, longitude)
            //获取实时天气
            this.getNewWeather(longitude+','+latitude,'weather/now')
            //获取7day天气
            this.get7DayWeather(longitude+','+latitude,'weather/7d')
            wx.hideLoading()
            },
           })
    },
    // 逆地址解析
    getReverseGeocoder(latitude: any,longitude: any){
        qqmapsdk.reverseGeocoder({
            location:{
                latitude: latitude,
                longitude: longitude
            },
            success: (res: { result: { address: any } }) =>{
                // console.log(res)
                this.setData({
                    address: res.result.address
                })
            }
        })
    },
    //获取实时天气
    async getNewWeather(location: string,TP: string){
        const res = await getWeather(location,TP)
        // console.log(res)
        const weather = res.now
        const time = res.updateTime.slice(5,16).replace('T',' ')
        this.setData({
            nowWeather:{
                ...weather,
                time,
            }
        })
    },
    //获取7day天气
    async get7DayWeather(location:string,TP:string){
        const res = await getWeather(location,TP)
        console.log(res)
        if(res.code === '200'){
            const daily = res.daily
            daily.map((item: { date: any; fxDate: string | any[]; }) => {
                item.date = item.fxDate.slice(5)
            })
            this.setData({
                forecast: daily
            })
        }
    },
    // 跳转 lifeStyle页面 传参
     goDetail(){
        wx.navigateTo({
            url:'/pages/detail/detail?location=' + this.data.location,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.getLocation()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getLocation()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.getLocation()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
