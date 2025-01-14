import { useEffect, useState } from "react";
import "./App.css";
import FarmerDashboard from "./pages/farmers/Dashboard";
import WarehouseDashboard from "./pages/warehouse/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
import Warehouse from "./pages/farmers/Warehouse";
import Services from "./pages/farmers/Services";
import Learning from "./pages/common/Learning";
import Calendar from "./pages/common/Calendar";
import WarehouseView from "./pages/farmers/WarehouseView";
import Signup from "./pages/welcome/Signup";
import SetPassword from "./pages/welcome/SetPassword";
import Login from "./pages/welcome/Login";
import ServiceView from "./pages/farmers/ServiceView";
import AddProduction from "./pages/farmers/AddProduction";
import ProductionHistory from "./pages/farmers/ProductionHistory";
import { RxDashboard } from "react-icons/rx";
import { LuWarehouse } from "react-icons/lu";
import {
  MdDesignServices,
  MdDriveFolderUpload,
  MdOutlineAttachMoney
} from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Storage from "./pages/warehouse/Storage";
import AddStorage from "./pages/warehouse/AddStorage";
import { useNavigate } from "react-router-dom";
import WarehouseRegistration from "./pages/welcome/WarehouseRegistration";
import WarehouseProfileAdd from "./pages/welcome/WarehouseProfileAdd";
import WarehouseAddressAdd from "./pages/welcome/WarehouseAddressAdd";
import Dashboard from "./pages/services/Dashboard";
import AddService from "./pages/services/AddService";
import MyServices from "./pages/services/MyServices";
import ServiceDetails from "./pages/services/ServiceDetails";
import Contracts from "./pages/services/Contracts";
import WarehouseDetails from "./pages/warehouse/WarehouseDetails";
import CompanyInfoAdd from "./pages/welcome/CompanyInfoAdd";
import CompanyInfoAddTwo from "./pages/welcome/CompanyInfoAddTwo";
import CompanyDashboard from "./pages/companies/Dashboard";
import Marketplace from "./pages/companies/Marketplace";
import { FaCartShopping } from "react-icons/fa6";
import Purchases from "./pages/companies/Purchases";
import VisitWarehouse from "./pages/companies/VisitWarehouse";
import CreateArticle from "./pages/content-creator/CreateArticle";
import ContentCreatorDashboard from "./pages/content-creator/Dashboard";
import CreateVideo from "./pages/content-creator/CreateVideo";
import Uploads from "./pages/content-creator/Uploads";
import VideoView from "./pages/content-creator/VideoView";
import ArticleView from "./pages/content-creator/ArticleView";
import CommonVideoView from "./pages/common/VideoView";
import CommonArticleView from "./pages/common/ArticleView";
import { useSelector } from "react-redux";

import "@splidejs/splide/css";
import Settings from "./pages/common/Settings";
import SuccessfulPayment from "./pages/farmers/SuccessfulPayment";
import FailedPayment from "./pages/farmers/FailedPayment";
import CompanyPaymentSuccess from "./pages/companies/CompanyPaymentSuccess";
import CompanyPaymentFailure from "./pages/companies/CompanyPaymentFailure";

function Layout() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const routes = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      paths: ["/home", "/add-production", "/production-history", "/settings"],
      path: "/farmer/home"
    },
    {
      name: "Warehouse",
      icon: LuWarehouse,
      paths: ["/warehouse"],
      path: "/farmer/warehouse"
    },
    {
      name: "Services",
      icon: MdDesignServices,
      paths: ["/services"],
      path: "/farmer/services"
    },
    {
      name: "Learning",
      icon: FaBook,
      paths: ["/learning", "/video", "/article"],
      path: "/farmer/learning"
    },
    {
      name: "Calendar",
      icon: FaRegCalendar,
      paths: ["/calendar"],
      path: "/farmer/calendar"
    }
  ];
  const [activateSidebar, setActivateSidebar] = useState(false);

  return (
    <div className="">
      <Sidebar
        routes={routes}
        activateSidebar={activateSidebar}
        setActivateSidebar={setActivateSidebar}
      />
      <div
        className={`${
          activateSidebar
            ? "blur-[2px] h-[100dvh] overflow-hidden"
            : "overflow-x-scroll"
        } noScrollbar xl:ml-[20rem] pb-4 px-4 xl:px-0 xl:mr-8`}
        onClick={() => {
          if (activateSidebar) setActivateSidebar(false);
        }}
      >
        <Navbar setActivateSidebar={setActivateSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

function WarehouseLayout() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const routes = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      paths: ["/home", "/add-storage", "/settings"],
      path: "/warehouse/home"
    },
    {
      name: "Storage",
      icon: LuWarehouse,
      paths: ["/storage"],
      path: "/warehouse/storage"
    },
    {
      name: "Details",
      icon: MdDesignServices,
      paths: ["/warehouse-details"],
      path: "/warehouse/warehouse-details"
    },
    {
      name: "Learning",
      icon: FaBook,
      paths: ["/learning", "/video", "/article"],
      path: "/warehouse/learning"
    },
    {
      name: "Calendar",
      icon: FaRegCalendar,
      paths: ["/calendar"],
      path: "/warehouse/calendar"
    }
  ];
  const [activateSidebar, setActivateSidebar] = useState(false);

  return (
    <div className="">
      <Sidebar
        routes={routes}
        activateSidebar={activateSidebar}
        setActivateSidebar={setActivateSidebar}
      />
      <div
        className={`${
          activateSidebar
            ? "blur-[2px] h-[100dvh] overflow-hidden"
            : "overflow-x-scroll"
        } noScrollbar xl:ml-[20rem] pb-4 px-4 xl:px-0 xl:mr-8`}
        onClick={() => {
          if (activateSidebar) setActivateSidebar(false);
        }}
      >
        <Navbar setActivateSidebar={setActivateSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

function ServiceLayout() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [activateSidebar, setActivateSidebar] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const routes = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      paths: ["/home", "/add-service", "/settings"],
      path: "/service/home"
    },
    {
      name: "My Services",
      icon: LuWarehouse,
      paths: ["/my-services", "/service-details"],
      path: "/service/my-services"
    },
    {
      name: "Contracts",
      icon: MdDesignServices,
      paths: ["/contracts"],
      path: "/service/contracts"
    },
    {
      name: "Learning",
      icon: FaBook,
      paths: ["/learning", "/video", "/article"],
      path: "/service/learning"
    },
    {
      name: "Calendar",
      icon: FaRegCalendar,
      paths: ["/calendar"],
      path: "/service/calendar"
    }
  ];
  return (
    <div className="">
      <Sidebar
        routes={routes}
        activateSidebar={activateSidebar}
        setActivateSidebar={setActivateSidebar}
      />
      <div
        className={`${
          activateSidebar
            ? "blur-[2px] h-[100dvh] overflow-hidden"
            : "overflow-x-scroll"
        } noScrollbar xl:ml-[20rem] pb-4 px-4 xl:px-0 xl:mr-8`}
        onClick={() => {
          if (activateSidebar) setActivateSidebar(false);
        }}
      >
        <Navbar setActivateSidebar={setActivateSidebar} />
        <Outlet />
      </div>
    </div>
  );
}
function CompanyLayout() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const routes = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      paths: ["/home", "/settings"],
      path: "/company/home"
    },
    {
      name: "Marketplace",
      icon: FaCartShopping,
      paths: ["/marketplace", "/warehouse"],
      path: "/company/marketplace"
    },
    {
      name: "Purchases",
      icon: MdOutlineAttachMoney,
      paths: ["/purchases"],
      path: "/company/purchases"
    },
    {
      name: "Learning",
      icon: FaBook,
      paths: ["/learning", "/video", "/article"],
      path: "/company/learning"
    },
    {
      name: "Calendar",
      icon: FaRegCalendar,
      paths: ["/calendar"],
      path: "/company/calendar"
    }
  ];
  const [activateSidebar, setActivateSidebar] = useState(false);
  return (
    <div className="">
      <Sidebar
        routes={routes}
        activateSidebar={activateSidebar}
        setActivateSidebar={setActivateSidebar}
      />
      <div
        className={`${
          activateSidebar
            ? "blur-[2px] h-[100dvh] overflow-hidden"
            : "overflow-x-scroll"
        } noScrollbar sm:ml-[20rem] pb-4 px-4 sm:px-0 sm:mr-8`}
        onClick={() => {
          if (activateSidebar) setActivateSidebar(false);
          // console.log("yes");
        }}
      >
        <Navbar setActivateSidebar={setActivateSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

const ContentCreaterLayout = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const routes = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      paths: ["/home", "/create-article", "/create-video", "/settings"],
      path: "/content-creator/home"
    },
    {
      name: "Uploads",
      icon: MdDriveFolderUpload,
      paths: ["/uploads", "/video-view", "/article-view"],
      path: "/content-creator/uploads"
    },

    {
      name: "Learning",
      icon: FaBook,
      paths: ["/learning", "/video", "/article"],
      path: "/content-creator/learning"
    },
    {
      name: "Calendar",
      icon: FaRegCalendar,
      paths: ["/calendar"],
      path: "/content-creator/calendar"
    }
  ];
  const [activateSidebar, setActivateSidebar] = useState(false);
  return (
    <div className="">
      <Sidebar
        routes={routes}
        activateSidebar={activateSidebar}
        setActivateSidebar={setActivateSidebar}
      />
      <div
        className={`${
          activateSidebar
            ? "blur-[2px] h-[100dvh] overflow-hidden"
            : "overflow-x-scroll"
        } noScrollbar sm:ml-[20rem] pb-4 px-4 sm:px-0 sm:mr-8`}
        onClick={() => {
          if (activateSidebar) setActivateSidebar(false);
          // console.log("yes");
        }}
      >
        <Navbar setActivateSidebar={setActivateSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

function RoleRedirect() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const role = localStorage.getItem("role");
      switch (role) {
        case "FARMER":
          navigate("/farmer/home");
          break;
        case "WAREHOUSE_MANAGER":
          navigate("/warehouse/home");
          break;
        case "SERVICE_PROVIDER":
          navigate("/service/home");
          break;
        case "COMPANY":
          navigate("/company/home");
          break;
        default:
          navigate("/login");
      }
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // remove token from dependencies

  return null; // this component does not render anything
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RoleRedirect />} />
          {/* -----------------FARMER SECTION ----------------------- */}
          <Route path="/farmer" element={<Layout />}>
            <Route index path="/farmer/home" element={<FarmerDashboard />} />
            <Route path="/farmer/add-production" element={<AddProduction />} />
            <Route
              path="/farmer/production-history"
              element={<ProductionHistory />}
            />
            <Route path="/farmer/warehouse" element={<Warehouse />} />
            <Route path="/farmer/services" element={<Services />} />
            <Route path="/farmer/learning" element={<Learning />} />
            <Route path="/farmer/calendar" element={<Calendar />} />
            <Route path="/farmer/video" element={<CommonVideoView />} />
            <Route path="/farmer/article" element={<CommonArticleView />} />
            <Route path="/farmer/warehouse/view" element={<WarehouseView />} />
            <Route path="/farmer/services/view" element={<ServiceView />} />
            <Route path="/farmer/settings" element={<Settings />} />
            <Route
              path="/farmer/payment/success"
              element={<SuccessfulPayment />}
            />
            <Route path="/farmer/payment/failed" element={<FailedPayment />} />
          </Route>
          {/* -----------------WAREHOUSE SECTION ----------------------- */}
          <Route path="/warehouse" element={<WarehouseLayout />}>
            <Route path="/warehouse/home" element={<WarehouseDashboard />} />
            <Route path="/warehouse/storage" element={<Storage />} />
            <Route path="/warehouse/add-storage" element={<AddStorage />} />
            <Route
              path="/warehouse/warehouse-details"
              element={<WarehouseDetails />}
            />
            <Route path="/warehouse/learning" element={<Learning />} />
            <Route path="/warehouse/calendar" element={<Calendar />} />
            <Route path="/warehouse/video" element={<CommonVideoView />} />
            <Route path="/warehouse/article" element={<CommonArticleView />} />
            <Route path="/warehouse/settings" element={<Settings />} />
          </Route>
          {/* -----------------SERVICE SECTION ----------------------- */}
          <Route path="/service" element={<ServiceLayout />}>
            <Route path="/service/home" element={<Dashboard />} />
            <Route path="/service/add-service" element={<AddService />} />
            <Route path="/service/my-services" element={<MyServices />} />
            <Route
              path="/service/service-details"
              element={<ServiceDetails />}
            />
            <Route path="/service/contracts" element={<Contracts />} />
            <Route path="/service/calendar" element={<Calendar />} />
            <Route path="/service/learning" element={<Learning />} />
            <Route path="/service/video" element={<CommonVideoView />} />
            <Route path="/service/article" element={<CommonArticleView />} />
            <Route path="/service/settings" element={<Settings />} />
          </Route>
          {/* -----------------CONTENT CREATOR SECTION ----------------------- */}
          <Route path="/content-creator" element={<ContentCreaterLayout />}>
            <Route
              path="/content-creator/home"
              element={<ContentCreatorDashboard />}
            />
            <Route
              path="/content-creator/create-article"
              element={<CreateArticle />}
            />
            <Route
              path="/content-creator/create-video"
              element={<CreateVideo />}
            />
            <Route path="/content-creator/uploads" element={<Uploads />} />
            <Route path="/content-creator/video-view" element={<VideoView />} />
            <Route
              path="/content-creator/article-view"
              element={<ArticleView />}
            />

            <Route path="/content-creator/calendar" element={<Calendar />} />
            <Route path="/content-creator/learning" element={<Learning />} />
            <Route path="/content-creator/video" element={<CommonVideoView />} />
            <Route path="/content-creator/article" element={<CommonArticleView />} />
            <Route path="/content-creator/settings" element={<Settings />} />
          </Route>
          {/* -----------------COMPANY SECTION ----------------------- */}
          <Route path="/company" element={<CompanyLayout />}>
            <Route path="/company/home" element={<CompanyDashboard />} />
            <Route path="/company/marketplace" element={<Marketplace />} />
            <Route path="/company/purchases" element={<Purchases />} />
            <Route path="/company/warehouse" element={<VisitWarehouse />} />
            <Route path="/company/learning" element={<Learning />} />
            <Route path="/company/video" element={<CommonVideoView />} />
            <Route path="/company/article" element={<CommonArticleView />} />
            <Route path="/company/calendar" element={<Calendar />} />
            <Route path="/company/settings" element={<Settings />} />
            <Route
              path="/company/payment/success"
              element={<CompanyPaymentSuccess />}
            />
            <Route
              path="/company/payment/failure"
              element={<CompanyPaymentFailure />}
            />
          </Route>

          {/* -----------------COMMONS SECTION ----------------------- */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/warehouse-registration"
            element={<WarehouseRegistration />}
          />
          <Route
            path="/warehouse-profile-add"
            element={<WarehouseProfileAdd />}
          />
          <Route
            path="/warehouse-address-add"
            element={<WarehouseAddressAdd />}
          />
          <Route path="/company-info-add" element={<CompanyInfoAdd />} />
          <Route path="/company-profile-add" element={<CompanyInfoAddTwo />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
