import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { host } from "../../../Config/configure";
import { toast } from "react-toastify";
export const AdminContext = createContext();


export default function Context({ children }) {
  const [singleMenu,setSingleMenu] = useState(null)
  let navigate = useNavigate()
  const [activePath, setActivePath] = useState(null);
  const { pathname } = useLocation();
  const [admin, setAdmin] = useState(null)
  const [categories, setcategories] = useState([])
  const [menus, setMenus] = useState([])
  const [orders, setOrders] = useState([])
  
  const getProfile = () => {

    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.get(`${host}/admin/getProfile`, { headers: { "auth-token": token } })
      .then((res) => {
        console.log(res.data)
        if (res.data.success) {
          setAdmin(res.data.admin);
        } else {
          setAdmin(null)
        }
      }).catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {
    setActivePath(pathname);
    if (pathname=="/Admin/Insertform") {
      setActivePath("/Admin/Menus");
      
    }
    if (pathname == `/Admin/updateMenu/${singleMenu?._id}` ) {
      setActivePath("/Admin/Menus");
    }
    if (localStorage.getItem("adminToken") == null) {
      navigate("/Admin")
    } else {
      getProfile();
    }
  }, [pathname]);

  const adminLogin = (formInfo) => {
    axios.post(`${host}/admin/login`, formInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // password is storing inside localStorage
          localStorage.setItem("adminToken", JSON.stringify(res.data.token));
          toast.success(res.data.message)
          navigate("/Admin/Dashboard")
        } else {
          toast.error(res.data.message)
        }

      }).catch((error) => {
        console.log(error)
      });
  }
  const adminLogout = () => {
    localStorage.removeItem("adminToken")
    toast.error("Loged out successfully")
    navigate("/Admin/");
  }

  const getCategories = () => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.get(`${host}/admin/getCategories`, { headers: { "auth-token": token } })
      .then((res) => {
        console.log(res.data)
        setcategories(res.data.categories)
      }).catch((error) => {
        console.log(error)
      });
  }

  const insertCategories = (data) => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.post(`${host}/admin/insertCategories`, data, { headers: { "auth-token": token } })
      .then((res) => {
        // console.log(res.data)
        if (res.data.success) {
          toast.success(res.data.message)
          getCategories()
        } else {
          toast.error(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  const updateCategories = (id,data) => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.put(`${host}/admin/updateCategories/${id}`, data, { headers: { "auth-token": token } })
      .then((res) => {
        // console.log(res.data)
        if (res.data.success) {
          toast.success(res.data.message)
          getCategories()
        } else {
          toast.error(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  const getMenus = () => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.get(`${host}/admin/getMenus`, { headers: { "auth-token": token } })
      .then((res) => {
        console.log(res.data)
        setcategories(res.data.categories)
        setMenus(res.data.menus)
      }).catch((error) => {
        console.log(error)
      });
  }

  const getSingleMenus = (id) => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.get(`${host}/admin/getSingleMenus/${id}`, { headers: { "auth-token": token } })
      .then((res) => {
        console.log(res.data)
        setSingleMenu(res.data.menu)
      }).catch((error) => {
        console.log(error)
      });
  }

  const insertMenu = (data) => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.post(`${host}/admin/insertMenu`, data, { headers: { "auth-token": token } })
      .then((res) => {
        // console.log(res.data)
        if (res.data.success) {
          toast.success(res.data.message)
          // getMenus();
          navigate("/Admin/Menus");
        } else {
          toast.error(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      });
  }  

  const updateMenu = (id,data) => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.put(`${host}/admin/updateMenu/${id}`, data, { headers: { "auth-token": token } })
      .then((res) => {
        // console.log(res.data)
        if (res.data.success) {
          toast.success(res.data.message)
          // getMenus();
          navigate("/Admin/Menus");
        } else {
          toast.error(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  const getOrders = () => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.get(`${host}/admin/getOrders`,  { headers: { "auth-token": token } })
      .then((res) => {
        // console.log(res.data)
        if (res.data.success) {
         setOrders(res.data.orders)
          // getMenus();
          // navigate("/Admin/Menus");
        } else {
          toast.error(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  const updateOrderStatus = (id,data) => {
    let token = JSON.parse(localStorage.getItem("adminToken"));
    axios.get(`${host}/admin/updateOrderStatus/${id}`,data,  { headers: { "auth-token": token } })
      .then((res) => {
        // console.log(res.data)
        if (res.data.success) {
        
         getOrders();
         toast.success(res.data.message)
          
        } else {
          toast.error(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  return (
    <AdminContext.Provider value={{
      activePath,
      adminLogin,
      adminLogout,
      admin,
      updateCategories,
      insertCategories,
      getCategories,
      categories,
      host,
      getMenus,
      insertMenu,
      updateMenu,
      menus,
      getSingleMenus,
      singleMenu,
      setSingleMenu,
      getOrders,
      orders,
      updateOrderStatus
    }}>
      {children}
    </AdminContext.Provider>
  );
}
