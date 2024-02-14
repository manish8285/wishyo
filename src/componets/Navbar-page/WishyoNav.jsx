import React,{ useContext, useEffect, useState } from 'react'
import TopNavbar from './TopNavbar'
import HomeNavbar from './HomeNavbar'
import Logo from "../../assets/sony-gc-logo.webp"
import MenuIcon from "../../assets/menuIcon.svg"
import CartIcon from "../../assets/cartLogo.svg"
import CrossButton from "../../assets/crossButton.svg"
import SideMenu from './SideMenu'
import { AuthContext } from '../../context/AuthContext'
import TopLoginMenu from './TopLoginMenu'
import LoginSignupModal from '../LoginSignupModal'

export const navigation = [
    { name: "HOME", href: "./", current: true,icon:"AiOutlineHome" },
    { name: "About", href: "about", current: false },
    { name: "100X", href: "Hundred", current: false },
    { name: "Buy vouchers", href: "buy_vouchers", current: false },
    { name: "Games", href: "games", current: false },
    { name: "Buy medals", href: "buy_medals", current: false },
  ];

const WishyoNav = () => {
    const {currentUser} = useContext(AuthContext)
    const [isScrolled, setIsScrolled] = useState(false);
    const [sideMenu,setSideMenu] = useState(false)

    const [loginSignup,setLoginSignup] = useState(false)


    const loginSignupClose =()=>setLoginSignup(false)
    const loginSignupOpen=(value)=>setLoginSignup(value)
    const sideMenuToggler=()=>setSideMenu(!sideMenu)

    useEffect(() => {
      console.log("current user wishyo nav component",currentUser)

        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div>
         <div className=''>
      {/* Top Menu */}
      <nav
        className={` w-full bg-secondary-800 fixed top-0 transition-all z-50 duration-300 ${
          isScrolled ? 'transform -translate-y-full' : 'translate-y-0'
        } hidden md:block `}

      >
        <div className='container mx-auto py-2 text-gray-200 font-medium'>
         
          <TopNavbar isScrolled={isScrolled} loginSignupOpen={loginSignupOpen} />
        </div>
      </nav>

      {/* Home Menu */}
      <nav
        className={`w-full px-5 sm:px-0  bg-secondary fixed top-0 transition-all sm:z-50 duration-300 ${
          isScrolled ? 'translate-y-0' : 'sm:translate-y-full sm:mt-[-15px]'
        }`}
      >
        <div className='container mx-auto py-2 text-gray-200 font-medium'>
          <div className='w-full flex justify-between items-center'>
            <div className='flex space-x-1'>
            <img onClick={sideMenuToggler}  className='sm:hidden cursor-pointer' src={MenuIcon} width={30} alt="" />
            <img src={Logo} width={90} alt="" />
            </div>
            <div className='flex'>

            
            <ul className='hidden sm:flex items-center  space-x-10'>
                {
                    navigation.map((item,index)=>(
                      <li key={index} className='nav-item'>
                      <a href={item.href} className="">
                        {item.name}
                      
                      </a>
                    </li>
                    
                    ))
                }
                
                
                <li>
                    
                </li>
            </ul>
            <img className='cursor-pointer' src={CartIcon} width={30} alt="cart" />

            {
              currentUser && (<TopLoginMenu />)
            }
            

          </div>
          </div>
        </div>
      </nav>
    </div>
    
    <SideMenu sideMenu={sideMenu} sideMenuToggler={sideMenuToggler} />
    
          
    <LoginSignupModal loginSignup={loginSignup} loginSignupClose={loginSignupClose} loginSignupOpen={loginSignupOpen} />

        {/* <TopNavbar isScrolled={isScrolled} />
        <HomeNavbar isScrolled={isScrolled} /> */}
    </div>
  )
}

export default WishyoNav