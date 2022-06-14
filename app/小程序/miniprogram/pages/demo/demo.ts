// pages/demo/demo.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mag: 'hello',
        arr: ['h1','h2','h3'],
        user:[
            {
                name:'小A',
                age:18,
            },{
                name:'小B',
                age:17,
            },{
                name:'小C',
                age:16,
            }
        ]

    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.setData({
            mag:'qwe'
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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