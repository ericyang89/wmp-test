// miniprogram/pages/position/index.js
import { xhsToken } from "../../config/constant";
import commonResquest from "../../utils/commonRequest";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    positionId: "",
    loading: true,
    data: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({ positionId: options.positionId });
    this.loadData();
  },
  loadData() {
    const url = `/detailpage/info`;
    const that = this;
    const params = {
      positionId: that.data.positionId,
      xhsToken,
      xhsFrom: "wechat",
      deviceId: "83phgdc1b8"
    };
    commonResquest({
      url,
      method: "POST",
      data: params
    }).then(val => {
      console.log(val.data.data);
      this.setData({ data: val.data.data, loading: false });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {}

  /**
   * 用户点击右上角分享
   */
});
