new Vue({
	el:'#app',
	vuetify: new Vuetify(),
      data: () => ({
            lists:[
                  {title:'HOME',link:'#'},
                  {title:'SERVICES',link:'#'},
                  {title:'PORTFOLIO',link:'#'},
                  {title:'BLOG',link:'#'},
                  {title:'CONTACT',link:'#'},
                ],
                show:false,  
                images:['https://sun9-47.userapi.com/c855728/v855728398/e64d1/hlMSP96YuAo.jpg','https://sun9-3.userapi.com/c855728/v855728398/e64db/pU41pjmcUM4.jpg','https://sun9-57.userapi.com/c855728/v855728398/e64e5/GnCQXJMch08.jpg','https://sun9-52.userapi.com/c855728/v855728398/e64ef/ix5U_QrZ0f0.jpg','https://sun9-9.userapi.com/c855728/v855728398/e64f8/jikSTSjWAnY.jpg','https://sun9-42.userapi.com/c855728/v855728398/e6515/PUR3AnPy6n0.jpg'],
                achievement:[
                  {number:48,name:'VIDEO GAMES'},
                  {number:7,name:'AWARDS WON'},
                  {number:23,name:'PICTURES TAKEN'},
                  {number:19,name:'VIDEO TUTORIALS'}
                ]
            }),
      mounted: function () {
      this.show = true;
      }
})