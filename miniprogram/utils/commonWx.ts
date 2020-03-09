import { promisifyAll, promisify } from "miniprogram-api-promise";
const wxp: WechatMiniprogram.Wx | any = {};
// promisify all wx's api
promisifyAll(wx, wxp);

export default wxp;
// console.log(wxp.getSystemInfoSync());
// wxp.getSystemInfo().then(console.log);
// wxp.showModal().then(wxp.openSetting());

// // compatible usage
// wxp.getSystemInfo({
//   success(res) {
//     console.log(res);
//   }
// });

// // promisify single api
// promisify(wx.getSystemInfo)().then(console.log);
