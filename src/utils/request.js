export function request (url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            data:data,
            method:method,
            url: url,
            success: function (res) {
                if (res.statusCode === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data)
                }
            },
            fail:function (err) {
                reject(err)
            }
        })
    })
  }