"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../../config/constant");
var commonRequest_1 = require("../../utils/commonRequest");
Page({
    data: {
        positionId: "",
        loading: true,
        data: null
    },
    onLoad: function (options) {
        this.setData({ positionId: options.positionId });
        this.loadData();
    },
    loadData: function () {
        var _this = this;
        var url = "/detailpage/info";
        var that = this;
        var params = {
            positionId: that.data.positionId,
            xhsToken: constant_1.xhsToken,
            xhsFrom: "wechat",
            deviceId: "83phgdc1b8"
        };
        commonRequest_1.default({
            url: url,
            method: "POST",
            data: params
        }).then(function (val) {
            console.log(val.data.data);
            _this.setData({ data: val.data.data, loading: false });
        });
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtEQUFpRDtBQUNqRCwyREFBdUQ7QUFDdkQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQUU7UUFDZCxPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFLRCxNQUFNLEVBQUUsVUFBUyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxRQUFRO1FBQVIsaUJBaUJDO1FBaEJDLElBQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFNLE1BQU0sR0FBRztZQUNiLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDaEMsUUFBUSxxQkFBQTtZQUNSLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7UUFDRix1QkFBYyxDQUFDO1lBQ2IsR0FBRyxLQUFBO1lBQ0gsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsT0FBTyxFQUFFLGNBQVksQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLE1BQU0sRUFBRSxjQUFZLENBQUM7SUFLckIsUUFBUSxFQUFFLGNBQVksQ0FBQztJQUt2QixpQkFBaUIsRUFBRSxjQUFZLENBQUM7SUFLaEMsYUFBYSxFQUFFLGNBQVksQ0FBQztDQUs3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9wb3NpdGlvbi9pbmRleC5qc1xuaW1wb3J0IHsgeGhzVG9rZW4gfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbnN0YW50XCI7XG5pbXBvcnQgY29tbW9uUmVzcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblJlcXVlc3RcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgcG9zaXRpb25JZDogXCJcIixcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGRhdGE6IG51bGxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHRoaXMuc2V0RGF0YSh7IHBvc2l0aW9uSWQ6IG9wdGlvbnMucG9zaXRpb25JZCB9KTtcbiAgICB0aGlzLmxvYWREYXRhKCk7XG4gIH0sXG4gIGxvYWREYXRhKCkge1xuICAgIGNvbnN0IHVybCA9IGAvZGV0YWlscGFnZS9pbmZvYDtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBwb3NpdGlvbklkOiB0aGF0LmRhdGEucG9zaXRpb25JZCxcbiAgICAgIHhoc1Rva2VuLFxuICAgICAgeGhzRnJvbTogXCJ3ZWNoYXRcIixcbiAgICAgIGRldmljZUlkOiBcIjgzcGhnZGMxYjhcIlxuICAgIH07XG4gICAgY29tbW9uUmVzcXVlc3Qoe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHBhcmFtc1xuICAgIH0pLnRoZW4odmFsID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHZhbC5kYXRhLmRhdGEpO1xuICAgICAgdGhpcy5zZXREYXRhKHsgZGF0YTogdmFsLmRhdGEuZGF0YSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbigpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbigpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbigpIHt9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbigpIHt9XG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbn0pO1xuIl19