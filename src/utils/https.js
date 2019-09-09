const https = {
    request( options = {} ){
        const {url, method, data, header} = options;
        wx.showLoading({
            title: '加载中...'
        })
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data,
                method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header, // 设置请求的 header
                success: function(res){
                    // success
                    wx.hideLoading();
                    if(res.statusCode == 404){
                        reject();
                        return false;
                    }else if(res.statusCode != 200){
                        wx.showToast({
                            title: '网络出错，请稍后再试',
                            icon: 'none'
                        })
                        return false;
                    }
                    resolve(res.data);
                },
                fail: function() {
                    // fail
                   wx.hideLoading();
                   reject();
                },
                complete: function() {
                    // complete
                    wx.hideLoading();
                }
            })
        })
    }
}

export default https;