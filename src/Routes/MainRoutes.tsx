import MainLayout from "../Layout/MainLayout";
import Welcome from "../pages/welcomeScreen";
import Survey from "../pages/survey";
import ThankYou from "../pages/ThankYou";
const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
    { path: "",
      element: <Welcome/> 
    },
    { 
    path: "survey", 
    element: <Survey/> 
    }, 
    { 
        path: "thankyou", 
        element: <ThankYou/> 
        },
          
    ],
  },
];

export default MainRoutes;