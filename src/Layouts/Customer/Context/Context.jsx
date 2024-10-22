import React, { createContext, useEffect, useState } from 'react'
import {host} from "../../../Config/configure";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
export const CustomerContext = createContext();


export default function Context({children}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [categories,setCategories] = useState([]);
  const [menus,setMenus] = useState([]);
  const [customer,setCustomer] = useState([]);
  const [cart,setCart] = useState([]);
  const [singleMenu,setSingleMenu] = useState([]);
  const [relatedMenus,setRelatedMenus] = useState([]);
  const [orders,setOrders] = useState([]);
  

  const getProfile = () => {
    let token = JSON.parse(localStorage.getItem("customerToken"));
    axios.get(`${host}/customer/getProfile`, { headers: { "auth-token": token } })
      .then((res) => {
        console.log(res.data)
        if (res.data.success) {
          setCustomer(res.data.customer);
        } else {
          setCustomer(null)
        }
      }).catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
 if (localStorage.getItem('customerToken') != null) {
  getProfile();
 } else {
  setCustomer(null)
 }
  },[pathname]);

  const getCategoriesAndProducts = () => {
    axios.get(`${host}/customer/getCategoriesAndProducts`).then((res) => {
      console.log(res.data);
      setCategories(res.data.categories)
      setMenus(res.data.menus)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getSingleMenus = (id)=> {
    axios.get(`${host}/customer/getSingleMenus/${id}`)
    .then((res) => {
      setSingleMenu(res.data.singleMenu);
      setRelatedMenus(res.data.relatedMenus);
      
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const addMenuIntoCart = (id) => {
    let token = JSON.parse(localStorage.getItem("customerToken"));

    axios.post(`${host}/customer/addMenuIntoCart/${id}`,{},
      {
       headers: { "auth-token": token } ,
    })
    .then((res) => {
      // console.log(res.data)
      if (res.data.success) {
        toast.success(res.data.message)
        
      }else{
        toast.error(res.data.message)
      }
      
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const viewCart = () => {
    let token = JSON.parse(localStorage.getItem("customerToken"));

    axios.get(`${host}/customer/viewCart`,
      {
       headers: { "auth-token": token } ,
    })
    .then((res) => {
      // console.log(res.data)
      if (res.data.success) {
        setCart(res.data.cartData)
        
      }else{
        toast.error(res.data.message)
      }
      
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const removeMenuFromCart = (id) => {
    let token = JSON.parse(localStorage.getItem("customerToken"));

    axios.delete(`${host}/customer/removeMenuFromCart/${id}`,
      {
       headers: { "auth-token": token } ,
    })
    .then((res) => {
      // console.log(res.data)
      if (res.data.success) {
        toast.success(res.data.message)
        viewCart()
      }else{
        toast.error(res.data.message)
      }
      
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const updateCartQuantity = (id,quantity) => {
    let token = JSON.parse(localStorage.getItem("customerToken"));

    axios.put(`${host}/customer/updateCartQuantity/${id}`,
      {quantity},
      {
       headers: { "auth-token": token } ,
    })
    .then((res) => {
      // console.log(res.data)
      if (res.data.success) {
        toast.success(res.data.message)
        viewCart();
        
      }else{
        toast.error(res.data.message)
      }
      
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const placeOrder = (data) => {
    let token = JSON.parse(localStorage.getItem("customerToken"));
    axios.post(`${host}/cutomer/placeOrder`,data,
       {
      headers: { "auth-token": token } ,
    })
    .then((res) => {
      console.log(res.data)
      if (res.data.success) {
        setOrders(res.data.orders)
        navigate("/Orders")
      } else {
        toast.error(res.data.message)
      }
    } )
  }

  const getOrders = (data) => {
    let token = JSON.parse(localStorage.getItem("customerToken"));
    axios.get(`${host}/cutomer/getOrders`,data,
       {
      headers: { "auth-token": token } ,
    })
    .then((res) => {
      console.log(res.data)
      if (res.data.success) {
        setOrders(res.data.orders)
        
      } else {
        toast.error(res.data.message)
      }
    } )
  }
  
  
  return (
   
      <CustomerContext.Provider 
      value={{
      navigate,
      categories,
      menus,
      customer,
      setCustomer,
      getCategoriesAndProducts,
      host,
      getSingleMenus,
      relatedMenus,
      singleMenu,
      addMenuIntoCart,
      viewCart,
      removeMenuFromCart,
      updateCartQuantity,
      cart,
      placeOrder,
      orders,
      getOrders
      
      
      }}>
        {children}
      </CustomerContext.Provider>
  )
}
