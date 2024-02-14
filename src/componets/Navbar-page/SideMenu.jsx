import React, { useContext } from 'react'
import CrossButton from "../../assets/crossButton.svg"
import Logo from "../../assets/sony-gc-logo.webp"
import { AuthContext } from '../../context/AuthContext'
import { IconContext } from 'react-icons'
import * as Icons from 'react-icons/ai'

const MENU_ITEMS =[
    { name: "HOME", href: "./", current: true,icon:"AiOutlineHome" },
    {name:"Accounts",href:"./accounts",icon:"AiOutlineContacts"},
    {name:"Orders",href:"#",icon:"AiOutlineGift"},
    {name:"Friends",href:"#",icon:"AiOutlineUsergroupAdd"},
    {name:"Winning",href:"#",icon:"AiOutlineStar"},
    {name:"Wallet",href:"#",icon:"AiOutlineWallet"},
    {name:"Refer",href:"#",icon:"AiOutlineShareAlt"},
    {name:"Transactions",href:"#",icon:"AiOutlineTransaction"},
    {name:"Get Help",href:"#",icon:"AiOutlineWechat"}
]

const SideMenu = ({sideMenu,sideMenuToggler}) => {
    const {currentUser} = useContext(AuthContext)
  return (
    <div className={` transition-all duration-300 ${sideMenu?'translate-x-0':'transform -translate-x-full'} sm:hidden bg-opacity-0 z-40 fixed top-0 w-full h-screen`}>
            <div className='flex w-full h-screen bg-opacity-0 text-white'>
                <div className="w-3/4 bg-white ">
                    <div className='w-full bg-secondary p-5  flex space-x-5'>
                        <div className='menu-logo py-5'>
                            <div className='bg-white p-1 w-[90px] h-[90px] flex justify-center items-center rounded-full'>
                            <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className='text-white font-medium flex flex-col items-center justify-center'>
                            <h2>Welcome !</h2>
                            {
                                !currentUser? (<p>Login | Signup</p>):(<p>User Name</p>)
                            }
                            
                        </div>
                    </div>

                    <ul className='text-blue m-5 flex-row space-y-2'>
                        {
                            MENU_ITEMS.map((item,index)=>{
                                const IconComponent = Icons[item.icon]
                                return (
                                    <li className='color-primary cursor-pointer text-medium text-[20px] flex space-x-2' key={index}>
                                        <IconContext.Provider value={{size:"1.2em"}}>
                                            <IconComponent /> <span>{item.name}</span>
                                        </IconContext.Provider>
                                    </li>
                                )
                            })
                        }

                        <li>
                            <a href="#" className='color-primary flex space-x-2'> <span>Logout</span></a>
                        </li>
                    </ul>
                  
                </div>

                <div onClick={sideMenuToggler} className="w-1/4 bg-gray-400 bg-opacity-25 p-5">
                          <button><img src={CrossButton} width={40} alt="" /> </button>
                </div>
            </div>
          </div>
  )
}

export default SideMenu