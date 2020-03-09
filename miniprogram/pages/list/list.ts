import commonResquest from "../../utils/commonRequest";
import searchHelper from './searchHelper'
import { xhsToken } from '../../config/constant';

// const app = getApp<IAppOption>();
// miniprogram/pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (_options) {
    // console.log(app.globalData);
    // console.log(_wxConfig.envVersion);
    console.log(2222);
    console.log(wx);
    this.setData({
      search: searchHelper.bind(this),
      selectResult: this.selectResult,
    });
    this.selectResult({ detail: { text: '前端' } });
    
  },
  hideResult: function(){
    const searchComponent =      this.selectComponent('#listSearchBar');
    searchComponent.setData({ result: [] });
  },

  selectResult: function(value: any) {
    this.hideResult()
    const url = '/positions/list'
    const params = {
      pageNum: 1,
      pageSize: 10,
      positionName: value.detail.text||"前端",
      jobTypes: [],
      workplaces: [],
      xhsToken
    };
    return commonResquest({
      url,
      method: 'POST',
      data:params
    }).then(val=>console.log(val)).catch(console.log)
    
  }

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
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
