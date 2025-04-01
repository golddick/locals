


export type UserType =   {
  _id: string
  firstname: string,
  lastname: string,
  occupation: string,
  email: string,
  isEmailVerified:boolean,
  bio:string,
  phone:number,
  address:string,
  job_descripton:string,
  imageUrl:string,
  dob:string,
  planTier:string
  last_seen:string
  reg_date:string
  status: "active" | "suspeneded" | "in_active" ,
}

export type CategoryType =   {
  _id: string
  name: string,
  description: string,
  visitors:number

}


export type BusinessType =   {
  _id: string
  name: string,
  category : CategoryType
  phone:string
  address:string
  email:string
  ratings: number  
  description:string
  businessOwner:string
  profileUrl: string[]
  services:ServiceType[]
  status: "active" | "suspeneded" | "in_active" ,
  planTier:string
  Review:string
}


export type ServiceType ={
  _id: string
  name: string,
}


export interface SpecialRequestType {
  _id: string;
  description: string;
  address: string;
  dueDate:Date
  rating:number
  status: "Pending" | "Completed" | "In_Progress" | 'Terminated'
  services:ServiceType[]
  user:UserType
}


export interface PlanSubscriptionType {
  _id: string;
  name: string;
  price: number;
  duration: number;
  features: string[]
 
}


















export type UserInfoType =   {
  id: string
  name: string,
  email: string,
  desc?:string,
  occupation : string,
  status: "ACTIVE" | "SUSPENDED" | "IN_ACTIVE" ,
  reg_date:string
  last_seen:string
  dob? : string,
  address:string,
  contact:string,
  img?:string,
  planTier?:string,
  plans?: PlanType[];
  request?: RequestType[]
  business?: BusinessInfoType[]
}





export type BusinessInfoType =   {
    id: string
    name: string,
    email: string,
    category : string[],
    status: "ACTIVE" | "SUSPENDED" | "IN_ACTIVE" ,
    view: number  ,
    review:number,
    rating:string,
    desc:string,
    address:string,
    contact:string,
    img:string,
    planTier:string,
    plans: PlanType[];
  }
// export type BusinessType =   {
//     id: string
//     name: string,
//     category : string
//     status: "ACTIVE" | "SUSPENDED" | "IN_ACTIVE" 
//     view: number  
//     rating:string
//   }
export type RequestInfoType =   {
  id: string;
  user_name: string,
  user_img:string,
  user_planTier:string,
  review:number,
  email: string;
  service: string;
  sub_date: string;
  due_date:string
  status: "Pending" | "Completed" | "In_Progress"
  desc:string,
  address:string,
  contact:string,
  service_type:string
  request: RequestType[]

  }


  export interface PlanType {
    id: string;
    name: string;
    price: number;
    duration: string;
    start_date: string;
    end_date: string;
    status: "Active" | "Expired"
  }


  export type SubscriptionInfoType = {
    id: string
    plan_name: string,
    subscriber_name:string
    subscriber_img:string
    subscriber_email:string
    subscriber_desc:string
    subscriber_address:string
    subscriber_number:string
    payment_method:string
    start_date: string;
    end_date: string;
    plans:PlanType[]
    status: "Active" | "Expired"


  }


  export interface RequestType {
    id: string;
    service: string;
    sub_date: string;
    due_date:string
    status: "Pending" | "Completed" | "In_Progress"
  }

  const businessData: BusinessInfoType[] = [
    {
      id: "BUS-301",
      name: "Doe Catering Services Technologies",
      email:'jam@gmail.com',
      category: ["IT Services", "Software Development", 'Cuisines', 'Catering', "Fine Dining"],
      status: "ACTIVE",
      view: 1200,
      review: 45,
      rating: "4.8",
      desc: "Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation. Our catering services cater to a wide range of events, from intimate gatherings to grand celebrations. Each dish is crafted by our skilled chefs, ensuring a unique culinary experience that reflects your vision. We prioritize using locally sourced ingredients to enhance flavor and quality. Trust us to deliver not just food, but a memorable dining experience that delights your guests..",
      address: "456 Tech Street, NY",
      contact: "+1 555-9999",
      img: "/bs.png",
      planTier: "Enterprise",
      plans: [
        {
          id: "PLAN-201",
          name: "Enterprise Plan",
          price: 299.99,
          duration: "1 Year",
          start_date: "2023-07-01",
          end_date: "2024-07-01",
          status: "Active",
        },
      ],

    },

    {
      id: "BUS-302",
      name: "Doe Catering Services Technologies",
      email:'jam@gmail.com',
      category: ["IT Services", "Software Development", 'Cuisines', 'Catering', "Fine Dining"],
      status: "SUSPENDED",
      view: 1200,
      review: 45,
      rating: "4.8",
      desc: "Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation. Our catering services cater to a wide range of events, from intimate gatherings to grand celebrations. Each dish is crafted by our skilled chefs, ensuring a unique culinary experience that reflects your vision. We prioritize using locally sourced ingredients to enhance flavor and quality. Trust us to deliver not just food, but a memorable dining experience that delights your guests..",
      address: "456 Tech Street, NY",
      contact: "+1 555-9999",
      img: "/bs.png",
      planTier: "Enterprise",
      plans: [
        {
          id: "PLAN-201",
          name: "Enterprise Plan",
          price: 299.99,
          duration: "1 Year",
          start_date: "2023-07-01",
          end_date: "2024-07-01",
          status: "Active",
        },
      ],

    },

    {
      id: "BUS-303",
      name: "Doe  Technologies",
      email:'jam@gmail.com',
      category: ["IT Services", "Software Development", 'Cuisines', 'Catering', "Fine Dining"],
      status: "IN_ACTIVE",
      view: 1200,
      review: 45,
      rating: "4.8",
      desc: "Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation. Our catering services cater to a wide range of events, from intimate gatherings to grand celebrations. Each dish is crafted by our skilled chefs, ensuring a unique culinary experience that reflects your vision. We prioritize using locally sourced ingredients to enhance flavor and quality. Trust us to deliver not just food, but a memorable dining experience that delights your guests..",
      address: "456 Tech Street, NY",
      contact: "+1 555-9999",
      img: "/bs.png",
      planTier: "Enterprise",
      plans: [
        {
          id: "PLAN-201",
          name: "Enterprise Plan",
          price: 299.99,
          duration: "1 Year",
          start_date: "2023-07-01",
          end_date: "2024-07-01",
          status: "Active",
        },
      ],

    }
];


const singleSub: SubscriptionInfoType =
{
  id: "sub_002",
  plan_name: "Blue Tier",
  subscriber_name: "Bob Smith",
  subscriber_img: "/frameGuy.png",
  subscriber_email: "bob.smith@example.com",
  subscriber_desc:'',
  subscriber_address:'ojo ibadan',
  subscriber_number:'099922882',
  payment_method: "PayPal",
  start_date: "2023-06-10",
  end_date: "2024-06-10",
  plans: [
    {
      id: "PLAN-101",
      name: "Blue Tier",
      price: 99.99,
      duration: "1 Year",
      start_date: "2023-06-01",
      end_date: "2024-06-01",
      status: "Active",
    },
    {
      id: "PLAN-102",
      name: "Gold Plan",
      price: 999.99,
      duration: "1 month",
      start_date: "2024-06-01",
      end_date: "2024-07-01",
      status: "Expired",
    },
  ],
  status: "Expired",

}


   const subscriptionData: SubscriptionInfoType[] = [
    {
      id: "sub_001",
      plan_name: "Blue Tier",
      subscriber_name: "Alice Johnson",
      subscriber_img: "/bs.png",
      subscriber_email: "alice.johnson@example.com",
      subscriber_desc:'',
      subscriber_address:'ojo ibadan',
      subscriber_number:'099922882',
      payment_method: "Credit Card",
      start_date: "2024-01-15",
      end_date: "2025-01-15",
      plans: [
        {
          id: "PLAN-101",
          name: "Premium Plan",
          price: 99.99,
          duration: "1 Year",
          start_date: "2023-06-01",
          end_date: "2024-06-01",
          status: "Active",
        },
        {
          id: "PLAN-102",
          name: "Gold Plan",
          price: 999.99,
          duration: "1 month",
          start_date: "2024-06-01",
          end_date: "2024-07-01",
          status: "Expired",
        },
      ],
      status: "Active",
    },

    {
      id: "sub_002",

      plan_name: "Gold Tier",
      subscriber_name: "Bob Smith",
      subscriber_img: "/frameGuy.png",
      subscriber_email: "bob.smith@example.com",
      subscriber_desc:'Deep cleaning for a 3-bedroom apartment',
      subscriber_address:' ibadan',
      subscriber_number:'09882',
      payment_method: "PayPal",
      start_date: "2023-06-10",
      end_date: "2024-06-10",
      plans: [
        {
          id: "PLAN-101",
          name: "Premium Plan",
          price: 99.99,
          duration: "1 Year",
          start_date: "2023-06-01",
          end_date: "2024-06-01",
          status: "Active",
        },
        {
          id: "PLAN-102",
          name: "Gold Plan",
          price: 999.99,
          duration: "1 month",
          start_date: "2024-06-01",
          end_date: "2024-07-01",
          status: "Expired",
        },
      ],
      status: "Expired",
    
    },
  
  ];
  
  

  const singleBusinessInfo: BusinessInfoType =  
    {
      id: "BUS-301",
      name: "Doe Catering Services Technologies",
      email:'jam@gmail.com',
      category: ["IT Services", "Software Development", 'Cuisines', 'Catering', "Fine Dining"],
      status: "IN_ACTIVE",
      view: 1200,
      review: 45,
      rating: "4.8",
      desc: "Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation. Our catering services cater to a wide range of events, from intimate gatherings to grand celebrations. Each dish is crafted by our skilled chefs, ensuring a unique culinary experience that reflects your vision. We prioritize using locally sourced ingredients to enhance flavor and quality. Trust us to deliver not just food, but a memorable dining experience that delights your guests..",
      address: "456 Tech Street, NY",
      contact: "+1 555-9999",
      img: "/bs.png",
      planTier: "Enterprise",
      plans: [
        {
          id: "PLAN-201",
          name: "Enterprise Plan",
          price: 299.99,
          duration: "1 Year",
          start_date: "2023-07-01",
          end_date: "2024-07-01",
          status: "Active",
        },
      ],

    }


  const singleUserInfo: UserInfoType =     {
    id: "USR-001",
    name: "John Doe",
    email: "john.doe@example.com",
    desc: "Offers exquisite, tailor-made menus for any occasion, combining fresh ingredients with exceptional presentation. Our catering services cater to a wide range of events, from intimate gatherings to grand celebrations. Each dish is crafted by our skilled chefs, ensuring a unique culinary experience that reflects your vision. We prioritize using locally sourced ingredients to enhance flavor and quality. Trust us to deliver not just food, but a memorable dining experience that delights your guests.",
    occupation: "Software Engineer",
    status: "SUSPENDED",
    reg_date: "2023-05-12",
    last_seen: "2024-01-30",
    dob: "1990-08-15",
    address: "123 Main Street, New York, NY",
    contact: "+1 555-1234",
    img: "/frameGuy.png",
    planTier: "Silver Tier",
    plans: [
      {
        id: "PLAN-101",
        name: "Premium Plan",
        price: 99.99,
        duration: "1 Year",
        start_date: "2023-06-01",
        end_date: "2024-06-01",
        status: "Active",
      },
      {
        id: "PLAN-102",
        name: "Gold Plan",
        price: 999.99,
        duration: "1 month",
        start_date: "2024-06-01",
        end_date: "2024-07-01",
        status: "Expired",
      },
    ],
    request: [
      {
        id: "REQ-201",
        service: "Web Development",
        sub_date: "2024-01-15",
        due_date: "2024-02-15",
        status: "In_Progress",
      },
    ],
    business: [
      {
        id: "BUS-301",
        name: "Doe Technologies",
        email:'jam@gmail.com',
        category: ["IT Services", "Software Development"],
        status: "ACTIVE",
        view: 1200,
        review: 45,
        rating: "4.8",
        desc: "Leading provider of innovative software solutions.",
        address: "456 Tech Street, NY",
        contact: "+1 555-9999",
        img: "/bs.png",
        planTier: "Enterprise",
        plans: [
          {
            id: "PLAN-201",
            name: "Enterprise Plan",
            price: 299.99,
            duration: "1 Year",
            start_date: "2023-07-01",
            end_date: "2024-07-01",
            status: "Active",
          },
        ],
      },
    ],
  }
  


  const userInfoData: UserInfoType[] = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john.doe@example.com",
      desc: "Software Engineer specializing in full-stack development.",
      occupation: "Software Engineer",
      status: "ACTIVE",
      reg_date: "2023-05-12",
      last_seen: "2024-01-30",
      dob: "1990-08-15",
      address: "123 Main Street, New York, NY",
      contact: "+1 555-1234",
      img: "/frameGuy.png",
      planTier: "Silver Tier",
      plans: [
        {
          id: "PLAN-101",
          name: "Premium Plan",
          price: 99.99,
          duration: "1 Year",
          start_date: "2023-06-01",
          end_date: "2024-06-01",
          status: "Active",
        },
      ],
      request: [
        {
          id: "REQ-201",
          service: "Web Development",
          sub_date: "2024-01-15",
          due_date: "2024-02-15",
          status: "In_Progress",
        },
      ],
      business: [
        {
          id: "BUS-301",
          name: "Doe Technologies",
          email:'jam@gmail.com',
          category: ["IT Services", "Software Development"],
          status: "ACTIVE",
          view: 1200,
          review: 45,
          rating: "4.8",
          desc: "Leading provider of innovative software solutions.",
          address: "456 Tech Street, NY",
          contact: "+1 555-9999",
          img: "/bs.png",
          planTier: "Enterprise",
          plans: [
            {
              id: "PLAN-201",
              name: "Enterprise Plan",
              price: 299.99,
              duration: "1 Year",
              start_date: "2023-07-01",
              end_date: "2024-07-01",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: "USR-002",
      name: "Alice Smith",
      email: "alice.smith@example.com",
      occupation: "Graphic Designer",
      status: "SUSPENDED",
      reg_date: "2022-11-20",
      last_seen: "2024-01-20",
      dob: "1995-02-10",
      address: "567 Creative Lane, Los Angeles, CA",
      contact: "+1 555-5678",
      img: "",
      planTier: "Basic",
      plans: [
        {
          id: "PLAN-102",
          name: "Basic Plan",
          price: 49.99,
          duration: "6 Months",
          start_date: "2023-09-01",
          end_date: "2024-03-01",
          status: "Expired",
        },
      ],
      request: [],
      business: [],
    },
    {
      id: "USR-003",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      occupation: "Marketing Manager",
      status: "ACTIVE",
      reg_date: "2021-06-15",
      last_seen: "2024-01-28",
      dob: "1988-12-05",
      address: "789 Business Ave, Chicago, IL",
      contact: "+1 555-9876",
      img: "/bs.png",
      planTier: "Enterprise",
      plans: [
        {
          id: "PLAN-103",
          name: "Enterprise Plan",
          price: 199.99,
          duration: "1 Year",
          start_date: "2023-01-01",
          end_date: "2024-01-01",
          status: "Expired",
        },
      ],
      request: [
        {
          id: "REQ-202",
          service: "SEO Optimization",
          sub_date: "2024-02-01",
          due_date: "2024-03-01",
          status: "Pending",
        },
      ],
      business: [
        {
          id: "BUS-302",
          name: "Brown Marketing Agency",
          email:'jam@gmail.com',
          category: ["Marketing", "Advertising"],
          status: "ACTIVE",
          view: 750,
          review: 30,
          rating: "4.5",
          desc: "Helping businesses grow with data-driven marketing.",
          address: "987 Growth St, IL",
          contact: "+1 555-4567",
          img: "/bs.png",
          planTier: "Standard",
          plans: [
            {
              id: "PLAN-202",
              name: "Standard Plan",
              price: 99.99,
              duration: "1 Year",
              start_date: "2023-04-01",
              end_date: "2024-04-01",
              status: "Active",
            },
          ],
        },
      ],
    },
    {
      id: "USR-004",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      occupation: "Freelance Writer",
      status: "IN_ACTIVE",
      reg_date: "2020-03-10",
      last_seen: "2023-12-25",
      dob: "1992-05-22",
      address: "321 Content Street, Seattle, WA",
      contact: "+1 555-4321",
      img: "",
      planTier: "Standard",
      plans: [
        {
          id: "PLAN-104",
          name: "Standard Plan",
          price: 79.99,
          duration: "1 Year",
          start_date: "2023-07-01",
          end_date: "2024-07-01",
          status: "Active",
        },
      ],
      request: [
        {
          id: "REQ-203",
          service: "Content Writing",
          sub_date: "2024-01-10",
          due_date: "2024-01-20",
          status: "Completed",
        },
      ],
      business: [],
    },
  ];

  const requestInfoData: RequestInfoType[] =[
 
    {
     id: "REQ-001",
     user_name: "Elite ",
     user_img: '/bs.png',
     user_planTier: "Premium",
     review: 45,
     email: "customer@example.com",
     service: "Home Cleaning",
     sub_date: "2024-01-25",
     due_date: "2024-01-27",
     status: "In_Progress",
     desc: "Deep cleaning for a 3-bedroom apartment.",
     address: "123 Green Street, New York, NY",
     contact: "+1 555-6789",
     service_type: "Household",
     request: [
       {
         id: "REQ-101",
         service: "Window Cleaning",
         sub_date: "2024-01-20",
         due_date: "2024-01-27",
         status: "In_Progress",
       },
       {
         id: "REQ-102",
         service: "Carpet Cleaning",
         sub_date: "2024-01-22",
         due_date: "2024-01-29",
         status: "Completed",
       },
     ],
   },
   
   
    {
     id: "REQ-002",
     user_name: "Elite Cleaning Co.",
     user_img: '/bs.png',
     user_planTier: "Premium",
     email: "customer@example.com",
     review: 99,
     service: "Home Cleaning",
     sub_date: "2024-01-25",
     due_date: "2024-01-27",
     status: "Completed",
     desc: "Deep cleaning for a 3-bedroom apartment.",
     address: "123 Green Street, New York, NY",
     contact: "+1 555-6789",
     service_type: "Household",
     request: [
       {
         id: "REQ-101",
         service: "Window Cleaning",
         sub_date: "2024-01-20",
         due_date: "2024-01-27",
         status: "In_Progress",
       },
       {
         id: "REQ-102",
         service: "Carpet Cleaning",
         sub_date: "2024-01-22",
         due_date: "2024-01-29",
         status: "Completed",
       },
     ],
   },

    {
     id: "REQ-002",
     user_name: "Elite Cleaning Co.",
     user_img: '/bs.png',
     user_planTier: "Premium",
     email: "customer@example.com",
     review: 99,
     service: "Home Cleaning",
     sub_date: "2024-01-25",
     due_date: "2024-01-27",
     status: "Pending",
     desc: "Deep cleaning for a 3-bedroom apartment.",
     address: "123 Green Street, New York, NY",
     contact: "+1 555-6789",
     service_type: "Household",
     request: [
       {
         id: "REQ-101",
         service: "Window Cleaning",
         sub_date: "2024-01-20",
         due_date: "2024-01-27",
         status: "In_Progress",
       },
       {
         id: "REQ-102",
         service: "Carpet Cleaning",
         sub_date: "2024-01-22",
         due_date: "2024-01-29",
         status: "Completed",
       },
     ],
   }
   
   
    ];

    const SingleRequestInfo: RequestInfoType  =

    {
      id: "REQ-002",
      user_name: "Elite",
      user_img: '/bs.png',
      user_planTier: "Premium",
      email: "customer@example.com",
      review: 5,
      service: "Home Cleaning",
      sub_date: "2024-01-25",
      due_date: "2024-01-27",
      status: "Pending",
      desc: "I need a plumbing service for my kitchenette due to a persistent leak under the sink that has worsened over the past few days. The water is pooling, causing concerns about potential damage and mold. I would appreciate a prompt response as I rely on this space for daily meal preparation. Please provide an estimate for the repair and availability for a visit at your earliest convenience.    .",
      address: "123 Green Street, New York, NY",
      contact: "+1 555-6789",
      service_type: "Household",
      request: [
        {
          id: "REQ-101",
          service: "Window Cleaning",
          sub_date: "2024-01-20",
          due_date: "2024-01-27",
          status: "In_Progress",
        },
        {
          id: "REQ-102",
          service: "Carpet Cleaning",
          sub_date: "2024-01-22",
          due_date: "2024-01-29",
          status: "Completed",
        },
      ],
    }

  export { singleUserInfo, userInfoData, singleBusinessInfo, subscriptionData, businessData, requestInfoData, SingleRequestInfo, singleSub };

  