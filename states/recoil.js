import {atom} from "recoil";



export const userData = atom({

key:"userData",
  default:{
    "email":"",
           "fullname":"Not logged in",
           "balance":0,
           "dp":"user.jpeg",
           "referral":"Log in",
    "phoneNumber":"xxxxxxxxx",
    "transactions":[
     /* {
        icon:"data",
        title:"Data bundle",
        description:"500mb to 07014443155",
        amount:234,
        date:"03/05/2024 2:30pm",
        status: "success",
         tid:"c23gf65al"
      },

      {
        icon:"airtime",
        title:"Airtime",
        description:"₦500 to 09023443155",
        amount:6734,
        date:"03/05/2024 2:30pm",
        status: "error",
        tid:"49gwqopj",
      },

      {
        icon:"hire",
        title:"Hiring",
        description:"Hired us for Website development.",
        amount:87346,
        date:"06/05/2024 2:30pm",
        status: "pending",
        tid:"49gwqopj",
      },*/
    ]
          }

});

export const csrfState = atom({

key:"csrfState",
  default:0,
  
})

export const dataPlansState = atom({

  key:"dataPlansState",
  default:
    {"glo":[
    {
      planName:"500mb",
      price:"",
      duration:"1 month",
      planId:"ab"

    },
    {
      planName:"1gb",
      price:"",
      duration:"1 month",
      planId:"ac"

    },

    {
      planName:"2gb",
      price:"",
      duration:"1 month",
      planId:"ad",
      

    },

    {
      planName:"3gb",
      price:"",
      duration:"1 month",
      planId:"ae"

    },

    {
      planName:"4gb",
      price:"",
      duration:"1 month",
      planId:"af",

    },

    {
      planName:"5gb",
      price:"",
      duration:"1 month",
      planId :"ag"

    },
    ],
     "mtn":[],
     "airtel":[],
     "9mobile":[],
     
    }
    
})


export const a2cState = atom({

  key:"a2cState",
  default:{
    mtn:0.7,
    glo:0.7,
    airtel:0.7,
    "9mobile":0.7,
  }
})

export const merchantState = atom({
  key:"merchantState",
  default:{

    paystack:{
      pk:"pk_test_742980136536f6cf3edb8a53642c030a0a2cd685",
      sk:""
    },
    
  }
});

     export const notificationsState = atom({

        key:"notificationsState",
       default: []/*[
    {
      title: 'New data plan',
      message: 'We now have a good day at work and I will try to get the rest of the day.',
      date:"03/May/2024 , 3:45pm",
    },
    {
      title: 'System update',
      message: 'A new system update is available. Please update to the latest version.',
     date:"23/September/2024 , 6:45am",
    },
  ]*/

      })

