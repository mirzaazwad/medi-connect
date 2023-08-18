import { useState } from "react"
import { usePagination } from "../../../hooks/usePagination";
import { orders } from "../../../assets/ts/order";

export const useOrder=()=>{
  const [orders,setOrders]=useState<orders[]>([{
    _id:"123",
    userID:"12345",
    pharmacyManagerID:"123",
    date:new Date(),
    prescriptionOrder:undefined,
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash",
},
deliveryInformation:{
  username:"Abu Sinan",
  email:"abu.sinan@gmail.com",
  phone:"01991681338",
  imageURL:"/brokenProfilePicture.jpg"
},
status:"Delivering",
paymentStatus:true
  },
  {
    _id:"1234",
    userID:"12345",
    pharmacyManagerID:"123",
    date:new Date(),
    prescriptionOrder:undefined,
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash",
},
deliveryInformation:{
  username:"Abu Sinan",
  email:"abu.sinan@gmail.com",
  phone:"01991681338",
  imageURL:"/brokenProfilePicture.jpg"
},
status:"Approved",
paymentStatus:true
  },
  {
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    pharmacyManagerID:"123",
    date:new Date(),
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"digital"
},
deliveryInformation:{
  username:"Abu Sinan",
  email:"abu.sinan@gmail.com",
  phone:"01991681338",
  imageURL:"/brokenProfilePicture.jpg"
},
status:"Pending",
paymentStatus:true
  },
  {
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    pharmacyManagerID:"123",
    date:new Date(),
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"Approved",
paymentStatus:true
  },
  {
    _id:"1234",
    userID:"12345",
    prescriptionOrder:{
      _id:"1234",
      prescriptionName:"Azwad's Prescription",
      imageURL:"/brokenProfilePicture.jpg",
      uploadDate:new Date()
    },
    pharmacyManagerID:"123",
    date:new Date(),
    orderMedicines:undefined,
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"Pending",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    date:new Date(),
    prescriptionOrder:undefined,
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    prescriptionOrder:undefined,
    date:new Date(),
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    date:new Date(),
    prescriptionOrder:undefined,
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"cash"
},
deliveryInformation:undefined,
status:"In progress",
paymentStatus:true
  },{
    _id:"1234",
    userID:"12345",
    date:new Date(),
    prescriptionOrder:undefined,
    pharmacyManagerID:"123",
    orderMedicines:[
      {medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
},
{medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
},
{medicineName:"Para",
  genericName:"12",
  description:"12",
  manufacturer:"12",
  price:11,
  prescription:undefined,
  imageURL:"/medicine.avif",
  Category:{
    category:"Anti-Pyretic",
    description:"Helps with fevers",
    _id:"123"
  },
  Type:{
    Name:"Syrup",
    Description:"Edible Medication",
    _id:"1234",
    hasStrips:false
  },
  amount:{
    quantityPcs:10,
    quantityStrips:11,
    quantityBoxes:3
  }
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
},{medicineName:"Para",
genericName:"12",
description:"12",
manufacturer:"12",
price:11,
prescription:undefined,
imageURL:"/medicine.avif",
Category:{
  category:"Anti-Pyretic",
  description:"Helps with fevers",
  _id:"123"
},
Type:{
  Name:"Syrup",
  Description:"Edible Medication",
  _id:"1234",
  hasStrips:false
},
amount:{
  quantityPcs:10,
  quantityStrips:11,
  quantityBoxes:3
}
}],
customerInformation:{
  fullname:"Mirza Azwad",
  phone:"01991681338",
  email:"mirzaazwad8@gmail.com",
  address:"mohammadpur",
  paymentOption:"digital"
},
deliveryInformation:{
  username:"Abu Sinan",
  email:"abu.sinan@gmail.com",
  phone:"01991681338",
  imageURL:"/brokenProfilePicture.jpg"
},
status:"Delivered",
paymentStatus:true
  }]);


  const {displayedarrayComponents,currentPage,totalPages,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}=usePagination(orders,8);
  

  return {displayedarrayComponents,totalPages,currentPage,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}
  
}