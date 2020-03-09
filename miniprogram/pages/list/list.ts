import commonResquest from "../../utils/commonRequest";
import { xhsToken } from "../../config/constant";

// const app = getApp<IAppOption>();
// miniprogram/pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    laoding: true,
    value: "",
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_options) {
    // this.setData({
    //   search: searchHelper.bind(this),
    //   selectResult: this.selectResult,
    // });
    // this.selectResult({ detail: { text: '前端' } });
    this.selectResult();
  },

  onSearch() {
    // console.log("搜索" + this.data.value);
    this.selectResult();
  },
  onChange(event: any) {
    this.setData({
      value: event.detail
    });
  },

  onClick() {
    // console.log("搜索" + this.data.value);
    this.selectResult();
  },

  selectResult() {
    this.setData({ dataList: [], laoding: true });
    const url = "/positions/list";
    const params = {
      pageNum: 1,
      pageSize: 10,
      positionName: this.data.value || "前端",
      jobTypes: [],
      workplaces: [],
      xhsToken
    };
    return commonResquest({
      url,
      method: "POST",
      data: params
    })
      .then(val => {
        console.log(val.data.data.list);
        this.setData({ dataList: val.data.data.list, laoding: false });
      })
      .catch(console.log);
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
});
