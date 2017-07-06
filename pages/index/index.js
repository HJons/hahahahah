//index.js

Page({

  


  data:{    
    a:18,
    lo: 113.324520,
    la: 23.099994,            

  },
    onReady: function () {
  
    var self = this;

    wx.getLocation({
      success: function (res) {

        self.setData({
          lo: res.longitude,
          la: res.latitude
        });      
      },

   
    })
    var t = this;
    wx.getSystemInfo({
      success: function(res) {
        var all = [
         
          {
            id: 1,
            iconPath: '/images/dayuan.png',
            position: {
              left: res.windowWidth / 2 - 225,
              top: res.windowHeight - 250,
              width: 450,
              height: 450
            },

            clickable: true
          },
          {
            id: 2,
            iconPath: '/images/saoyisao.png',
            position: {
              left: res.windowWidth/2-75,
              top: res.windowHeight-180,
              width: 150,
              height: 150
            },

            clickable: true
          },
          {
            id: 3,
            iconPath: '/images/gerenzhongxin.png',
            position: {
              left: 20,
              top: res.windowHeight-80,
              width: 25,
              height: 25
            },

            clickable: true
          },
          {
            id: 4,
            iconPath: '/images/huodongzhongxin.png',
            position: {
              left: res.windowWidth-45,
              top: res.windowHeight - 80,
              width: 25,
              height: 25
            },

            clickable: true
          },
          {
            id: 5,
            iconPath: '/images/xiala.png',
            position: {
              left: res.windowWidth / 2 - 25,
              top: res.windowHeight - 240,
              width: 50,
              height: 24
            },

            clickable: true
          },
          {
            id: 6,
            iconPath: '/images/mubiaodingwei.png',
            position: {
              left: res.windowWidth- 100,
              top: res.windowHeight - 500,
              width: 50,
              height: 50
            },

            clickable: true
          },
          {
            id: 7,
            iconPath: '/images/weixiu.png',
            position: {
              left: res.windowWidth - 100,
              top: res.windowHeight - 400,
              width: 50,
              height: 50
            },

            clickable: true
          },
          
        ];
        t.setData({
          controls: all
        });


      },
    })



  },
    controltap(e) {
      console.log(e.controlId)
       },

    hhhh(e) {

      wx.navigateTo({
        url: '/pages/warn/warn',
      })
    }

});