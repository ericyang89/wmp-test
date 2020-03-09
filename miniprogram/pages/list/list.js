"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonRequest_1 = require("../../utils/commonRequest");
var searchHelper_1 = require("./searchHelper");
var constant_1 = require("../../config/constant");
Page({
    data: {
        dataList: []
    },
    onLoad: function (_options) {
        console.log(2222);
        console.log(wx);
        this.setData({
            search: searchHelper_1.default.bind(this),
            selectResult: this.selectResult,
        });
        this.selectResult({ detail: { text: '前端' } });
    },
    hideResult: function () {
        var searchComponent = this.selectComponent('#listSearchBar');
        searchComponent.setData({ result: [] });
    },
    selectResult: function (value) {
        this.hideResult();
        var url = '/positions/list';
        var params = {
            pageNum: 1,
            pageSize: 10,
            positionName: value.detail.text || "前端",
            jobTypes: [],
            workplaces: [],
            xhsToken: constant_1.xhsToken
        };
        return commonRequest_1.default({
            url: url,
            method: 'POST',
            data: params
        }).then(function (val) { return console.log(val); }).catch(console.log);
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBdUQ7QUFDdkQsK0NBQXlDO0FBQ3pDLGtEQUFpRDtBQUlqRCxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsTUFBTSxFQUFFLFVBQVUsUUFBUTtRQUd4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxzQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWhELENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFNLGVBQWUsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZLEVBQUUsVUFBUyxLQUFVO1FBQy9CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQTtRQUM3QixJQUFNLE1BQU0sR0FBRztZQUNiLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEVBQUU7WUFDWixZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUUsSUFBSTtZQUNyQyxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxxQkFBQTtTQUNULENBQUM7UUFDRixPQUFPLHVCQUFjLENBQUM7WUFDcEIsR0FBRyxLQUFBO1lBQ0gsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUMsTUFBTTtTQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUVuRCxDQUFDO0lBS0QsT0FBTyxFQUFFLGNBQVksQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBWSxDQUFDO0lBS3JCLE1BQU0sRUFBRSxjQUFZLENBQUM7SUFLckIsUUFBUSxFQUFFLGNBQVksQ0FBQztJQUt2QixpQkFBaUIsRUFBRSxjQUFZLENBQUM7SUFLaEMsYUFBYSxFQUFFLGNBQVksQ0FBQztJQUs1QixpQkFBaUIsRUFBRSxjQUFZLENBQUM7Q0FDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbW1vblJlc3F1ZXN0IGZyb20gXCIuLi8uLi91dGlscy9jb21tb25SZXF1ZXN0XCI7XG5pbXBvcnQgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoSGVscGVyJ1xuaW1wb3J0IHsgeGhzVG9rZW4gfSBmcm9tICcuLi8uLi9jb25maWcvY29uc3RhbnQnO1xuXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcbi8vIG1pbmlwcm9ncmFtL3BhZ2VzL2xpc3QvbGlzdC5qc1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBkYXRhTGlzdDogW11cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKF9vcHRpb25zKSB7XG4gICAgLy8gY29uc29sZS5sb2coYXBwLmdsb2JhbERhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKF93eENvbmZpZy5lbnZWZXJzaW9uKTtcbiAgICBjb25zb2xlLmxvZygyMjIyKTtcbiAgICBjb25zb2xlLmxvZyh3eCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlYXJjaDogc2VhcmNoSGVscGVyLmJpbmQodGhpcyksXG4gICAgICBzZWxlY3RSZXN1bHQ6IHRoaXMuc2VsZWN0UmVzdWx0LFxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0UmVzdWx0KHsgZGV0YWlsOiB7IHRleHQ6ICfliY3nq68nIH0gfSk7XG4gICAgXG4gIH0sXG4gIGhpZGVSZXN1bHQ6IGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgc2VhcmNoQ29tcG9uZW50ID0gICAgICB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2xpc3RTZWFyY2hCYXInKTtcbiAgICBzZWFyY2hDb21wb25lbnQuc2V0RGF0YSh7IHJlc3VsdDogW10gfSk7XG4gIH0sXG5cbiAgc2VsZWN0UmVzdWx0OiBmdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5oaWRlUmVzdWx0KClcbiAgICBjb25zdCB1cmwgPSAnL3Bvc2l0aW9ucy9saXN0J1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIHBhZ2VOdW06IDEsXG4gICAgICBwYWdlU2l6ZTogMTAsXG4gICAgICBwb3NpdGlvbk5hbWU6IHZhbHVlLmRldGFpbC50ZXh0fHxcIuWJjeerr1wiLFxuICAgICAgam9iVHlwZXM6IFtdLFxuICAgICAgd29ya3BsYWNlczogW10sXG4gICAgICB4aHNUb2tlblxuICAgIH07XG4gICAgcmV0dXJuIGNvbW1vblJlc3F1ZXN0KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTpwYXJhbXNcbiAgICB9KS50aGVuKHZhbD0+Y29uc29sZS5sb2codmFsKSkuY2F0Y2goY29uc29sZS5sb2cpXG4gICAgXG4gIH1cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24oKSB7fSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbigpIHt9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uKCkge30sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge31cbn0pO1xuIl19