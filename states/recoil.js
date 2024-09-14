import {atom} from "recoil";



export const userData = atom({

key:"userData",
  default:{
    "email":"user@gmail.com",
           "fullname":"Abel Mayowa Babalola",
           "balance":1,
           "dp":"user.jpeg",
           "referral":"zx37abG",
    "phoneNumber":"09060421393",
    "transactions":[
      {
        icon:"a2c",
        title:"Data bundle",
        description:"500mb to 07014443155",
        amount:234,
        date:"03/05/2024 2:30pm",
        status: "success"
      },

      {
        icon:"bulkSMS",
        title:"Airtime",
        description:"500 naira to 09023443155",
        amount:6734,
        date:"03/05/2024 2:30pm",
        status: "error"
      },
    ]
          }
  
});

export const csrfState = atom({

key:"csrfState",
  default:null,
  
})

export const dataPlansState = atom({

  key:"dataPlansState",
  default:
    {"glo":[
    {
      planName:"500mb",
      price:100,
      duration:"1 month",
      planId:"ab"

    },
    {
      planName:"1gb",
      price:300,
      duration:"1 month",
      planId:"ac"

    },

    {
      planName:"2gb",
      price:500,
      duration:"1 month",
      planId:"ad",
      

    },

    {
      planName:"3gb",
      price:800,
      duration:"1 month",
      planId:"ae"

    },

    {
      planName:"4gb",
      price:1000,
      duration:"1 month",
      planId:"af",

    },

    {
      planName:"5gb",
      price:3000,
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
  default: {
    mtn:0.6,
    glo:0.6,
    airtel:0.65,
    "9mobile":0.5,
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
})

