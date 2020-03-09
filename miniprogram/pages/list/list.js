"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonRequest_1 = require("../../utils/commonRequest");
var constant_1 = require("../../config/constant");
Page({
    data: {
        laoding: true,
        value: "",
        dataList: []
    },
    onLoad: function (_options) {
        this.selectResult();
    },
    onSearch: function () {
        this.selectResult();
    },
    onChange: function (event) {
        this.setData({
            value: event.detail
        });
    },
    onClick: function () {
        this.selectResult();
    },
    selectResult: function () {
        var _this = this;
        this.setData({ dataList: [], laoding: true });
        var url = "/positions/list";
        var params = {
            pageNum: 1,
            pageSize: 10,
            positionName: this.data.value || "前端",
            jobTypes: [],
            workplaces: [],
            xhsToken: constant_1.xhsToken
        };
        return commonRequest_1.default({
            url: url,
            method: "POST",
            data: params
        })
            .then(function (val) {
            console.log(val.data.data.list);
            _this.setData({ dataList: val.data.data.list, laoding: false });
        })
            .catch(console.log);
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBdUQ7QUFDdkQsa0RBQWlEO0FBSWpELElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsTUFBTSxZQUFDLFFBQVE7UUFNYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELFFBQVEsRUFBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTztRQUVMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUFaLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztRQUM5QixJQUFNLE1BQU0sR0FBRztZQUNiLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNyQyxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxxQkFBQTtTQUNULENBQUM7UUFDRixPQUFPLHVCQUFjLENBQUM7WUFDcEIsR0FBRyxLQUFBO1lBQ0gsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFLRCxPQUFPLEVBQUUsY0FBWSxDQUFDO0lBS3RCLE1BQU0sRUFBRSxjQUFZLENBQUM7SUFLckIsTUFBTSxFQUFFLGNBQVksQ0FBQztJQUtyQixRQUFRLEVBQUUsY0FBWSxDQUFDO0lBS3ZCLGlCQUFpQixFQUFFLGNBQVksQ0FBQztJQUtoQyxhQUFhLEVBQUUsY0FBWSxDQUFDO0NBQzdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21tb25SZXNxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uUmVxdWVzdFwiO1xuaW1wb3J0IHsgeGhzVG9rZW4gfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbnN0YW50XCI7XG5cbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xuLy8gbWluaXByb2dyYW0vcGFnZXMvbGlzdC9saXN0LmpzXG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGxhb2Rpbmc6IHRydWUsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgZGF0YUxpc3Q6IFtdXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoX29wdGlvbnMpIHtcbiAgICAvLyB0aGlzLnNldERhdGEoe1xuICAgIC8vICAgc2VhcmNoOiBzZWFyY2hIZWxwZXIuYmluZCh0aGlzKSxcbiAgICAvLyAgIHNlbGVjdFJlc3VsdDogdGhpcy5zZWxlY3RSZXN1bHQsXG4gICAgLy8gfSk7XG4gICAgLy8gdGhpcy5zZWxlY3RSZXN1bHQoeyBkZXRhaWw6IHsgdGV4dDogJ+WJjeerrycgfSB9KTtcbiAgICB0aGlzLnNlbGVjdFJlc3VsdCgpO1xuICB9LFxuXG4gIG9uU2VhcmNoKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwi5pCc57SiXCIgKyB0aGlzLmRhdGEudmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0UmVzdWx0KCk7XG4gIH0sXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdmFsdWU6IGV2ZW50LmRldGFpbFxuICAgIH0pO1xuICB9LFxuXG4gIG9uQ2xpY2soKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCLmkJzntKJcIiArIHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgdGhpcy5zZWxlY3RSZXN1bHQoKTtcbiAgfSxcblxuICBzZWxlY3RSZXN1bHQoKSB7XG4gICAgdGhpcy5zZXREYXRhKHsgZGF0YUxpc3Q6IFtdLCBsYW9kaW5nOiB0cnVlIH0pO1xuICAgIGNvbnN0IHVybCA9IFwiL3Bvc2l0aW9ucy9saXN0XCI7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgcGFnZU51bTogMSxcbiAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgIHBvc2l0aW9uTmFtZTogdGhpcy5kYXRhLnZhbHVlIHx8IFwi5YmN56uvXCIsXG4gICAgICBqb2JUeXBlczogW10sXG4gICAgICB3b3JrcGxhY2VzOiBbXSxcbiAgICAgIHhoc1Rva2VuXG4gICAgfTtcbiAgICByZXR1cm4gY29tbW9uUmVzcXVlc3Qoe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHBhcmFtc1xuICAgIH0pXG4gICAgICAudGhlbih2YWwgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWwuZGF0YS5kYXRhLmxpc3QpO1xuICAgICAgICB0aGlzLnNldERhdGEoeyBkYXRhTGlzdDogdmFsLmRhdGEuZGF0YS5saXN0LCBsYW9kaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbigpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7fVxufSk7XG4iXX0=