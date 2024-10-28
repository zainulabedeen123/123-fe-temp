import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import logo from '../images/logo.png';
import { MdDashboard, MdOutlineWifiTethering, MdPayments, MdLiveHelp, MdLogout } from "react-icons/md";
import { BsPersonCheckFill, BsFillPersonPlusFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoIosAddCircle, IoMdDownload, IoMdSettings } from "react-icons/io";
import { PiSlideshowFill, PiCardsFill } from "react-icons/pi";
import { TbBellPlusFilled } from "react-icons/tb";
import { AiFillAppstore } from "react-icons/ai";
import Searchbar from './Searchbar';
import { Select, SelectItem } from '@nextui-org/react';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];
    const [autoImport, setAutoImport] = useState(false);
    const [autoUpdate, setAutoUpdate] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [userRole, setUserRole] = useState('user'); // roles: 'admin', 'owner', 'user'

    const [selectedLanguage, setSelectedLanguage] = useState('EN');

    const routeNames = {
        '': 'My Dashboard',
        'dashboard': 'My Dashboard',
        'competitors': 'Competitors',
        'repricing': 'Repricing',
        'report': 'Report',
        'addnew': 'Add New',
        'catalog': 'My Catalogs',
        'myproduct': 'My Product',
        'alert': 'Alerts',
        'apps': 'Apps',
        'settings': 'Settings',
        'manageuser': 'Manage User',
        'organization': 'Manage Users',
        'payment': 'Payments',
        'helpcenter': 'Help Center',
        'suggestfeature': 'Suggest a Feature'
    };

    const [currentRouteName, setCurrentRouteName] = useState(routeNames[pathname] || 'My Dashboard');
    const manageUsersLink = userRole === 'owner' ? '/organization/owner/dashboard' : '/organization/admin/dashboard';

    const handleRoleChange = (value) => {
        setUserRole(value);
    };

    useEffect(() => {
        setCurrentRouteName(routeNames[pathname] || 'My Dashboard');
        console.log(userRole)
    }, [userRole, pathname])

    useEffect(() => {
        setSidebarOpen(false)
    }, [location])


    return (
        <div className='flex h-screen w-screen  overflow-hidden'>

            <div className='z-50'>
                <div className={`h-[80%] rounded-b-[20px] md:rounded-none md:h-full fixed lg:static lg:flex lg:flex-col inset-y-0 right-0 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-[#2D363D] lg:translate-x-0 w-[222px] md:w-[310px] pb-14 shadow-[0_4px_20px_20px_rgba(30,37,43,0.5)] mb-[24px] md:mb-0 `}>
                    <div className="flex items-center justify-between bg-[#2D363D] z-10 sticky px-4 pt-8">
                        <img src={logo} alt="Logo" className='md:w-[159px] md:h-[30px] md:mx-auto w-[120px] h-[20px] mt-[15px] md:mt-0 ' />
                        <button className="absolute top-5 right-[10px] md:static lg:hidden text-white" onClick={() => setSidebarOpen(false)}>
                            <IoClose size={24} />
                        </button>
                    </div>
                    {/* Will need to fix h-[90%] to some better logic later */}
                    <div className="px-[10px] md:px-5 overflow-y-scroll h-[90%] mt-5 scrollbar">

                        {(userRole === 'admin' || userRole === 'owner') ?
                            <>
                                <p className='mb-5 text-[20px] px-2 font-semibold mt-8'>Profile</p>

                                <Link to={'/manageuser'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'manageuser' && 'active'}`}><BsFillPersonPlusFill size={18} /> <p>Manage Profile</p></Link>
                                <Link to={'/settings'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'settings' && 'active'}`}><IoMdSettings size={18} /> <p>Settings</p></Link>
                                <Link to={'/suggestfeature'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'suggestfeature' && 'active'}`}><MdOutlineWifiTethering size={18} /> <p>Suggest a Feature</p></Link>
                                <Link to={'/helpcenter'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'helpcenter' && 'active'}`}><MdLiveHelp size={18} /> <p>Help Center</p></Link>

                                <p className='mb-5 text-[20px] px-2 font-semibold mt-8'>Admin</p>

                                <Link to={manageUsersLink} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'organization' && 'active'}`}><BsFillPersonPlusFill size={18} /> <p>Manage Users</p></Link>
                                <Link to={'/apps'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'apps' && 'active'}`}><AiFillAppstore size={18} /> <p>Apps</p></Link>
                                {(userRole === 'owner') &&
                                    <>
                                        <Link to={'/payment'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'payment' && 'active'}`}><MdPayments size={18} /> <p>Payments</p></Link>
                                    </>
                                }
                            </>
                            :
                            <>

                                <p className='mb-5 text-[20px] px-2 font-semibold'>Account</p>
                                <Link to={'/'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${(pathname === '' || pathname === 'dashboard') && 'active'}`}><MdDashboard size={18} /> <p>Dashboard</p></Link>
                                <Link to={'/competitors'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'competitors' && 'active'}`}><BsPersonCheckFill size={18} /> <p>Competitors</p></Link>
                                <Link to={'/repricing'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'repricing' && 'active'}`}><FaTag size={18} /> <p>Repricing</p></Link>
                                <Link to={'/report'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'report' && 'active'}`}><SiGoogledocs size={18} /> <p>Report</p></Link>


                                <p className='mb-5 text-[20px] px-2 font-semibold mt-8'>Product</p>
                                <Link to={'/addnew'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'addnew' && 'active'}`}><IoIosAddCircle size={18} /> <p>Add New</p></Link>
                                <Link to={'/catalog'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'catalog' && 'active'}`}><PiSlideshowFill size={18} /> <p>My Catalogs</p></Link>
                                <Link to={'/myproduct'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'myproduct' && 'active'}`}><PiCardsFill size={18} /> <p>My Product</p></Link>
                                <Link to={'/alert'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'alert' && 'active'}`}><TbBellPlusFilled size={18} /> <p>Alerts</p></Link>
                                <Link className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md`}>
                                    <IoMdDownload size={18} />
                                    <p className='flex justify-between items-center flex-1'>
                                        <span>Auto Import</span>
                                        <label className="inline-flex items-center cursor-pointer" onClick={(e) => setAutoImport(!autoImport)}>
                                            <input type="checkbox" value="" className="sr-only peer" checked={autoImport} />
                                            <div className="relative w-8 h-4 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-white peer-checked:after:translate-x-[116%] rtl:peer-checked:after:-translate-x-[1130%] peer-checked:after:border-[#2d363d] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d363d] after:border-[#2d363d] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#fb0078]"></div>
                                        </label>
                                    </p>
                                </Link>
                                <Link className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md`}>
                                    <MdOutlineWifiTethering size={18} />
                                    <p className='flex justify-between items-center flex-1'>
                                        <span>Auto Update</span>
                                        <label className="inline-flex items-center cursor-pointer" onClick={() => setAutoUpdate(!autoUpdate)}>
                                            <input type="checkbox" value="" className="sr-only peer" checked={autoUpdate} />
                                            <div className="relative w-8 h-4 bg-white rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-white peer-checked:after:translate-x-[116%] rtl:peer-checked:after:-translate-x-[110%] peer-checked:after:border-[#2d363d] after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#2d363d] after:border-[#2d363d] after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#fb0078]"></div>
                                        </label>
                                    </p>
                                </Link>

                                <p className='mb-5 text-[20px] px-2 font-semibold mt-8'>Profile</p>
                                {/* <Link to={'/apps'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'apps' && 'active'}`}><AiFillAppstore size={18} /> <p>Apps</p></Link> */}
                                <Link to={'/manageuser'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'manageuser' && 'active'}`}><BsFillPersonPlusFill size={18} /> <p>Manage Profile</p></Link>
                                <Link to={'/settings'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'settings' && 'active'}`}><IoMdSettings size={18} /> <p>Settings</p></Link>
                                {/* <Link to={'/payment'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'payment' && 'active'}`}><MdPayments size={18} /> <p>Payments</p></Link> */}
                                <Link to={'/helpcenter'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'helpcenter' && 'active'}`}><MdLiveHelp size={18} /> <p>Help Center</p></Link>
                                <Link to={'/suggestfeature'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md ${pathname === 'suggestfeature' && 'active'}`}><MdOutlineWifiTethering size={18} /> <p>Suggest a Feature</p></Link>
                            </>
                        }
                        <Link to={'/login'} className={`flex text-[14px] items-center hover:cursor-pointer space-x-2 py-2 px-4 rounded-md`}><MdLogout size={18} /> <p>Logout</p></Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col flex-1 pb-10 overflow-scroll scrollbar'>
                <div className="lg:px-20 w-full md:h-14 bg-[#2D363D] md:flex md:items-center md:justify-between gap-3 fixed top-0 right-0 2xl:mx-3 z-30 shadow-xl grid grid-cols-12 pt-[25px] px-[18px] py-[20px]">
                    <div className="flex lg:ml-[300px] items-center space-x-4   justify-between col-span-12 mb-[38px] md:mb-0">
                        <p className='text-[20px] font-medium ml-2 whitespace-nowrap'>{currentRouteName}</p>
                        <button className="md:hidden text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            {sidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                        </button>
                    </div>
                    <div className="md:flex md:items-center md:justify-end space-x-10 col-span-12">

                        <div className='flex w-full'>
                            <Searchbar />
                            <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                        </div>

                        <div className="lg:flex items-center space-x-2 hidden">
                            {/* This is Temporary for developement and verification only. Remove Select for final product and uncomment the inline div. */}
                            <Select
                                selectedKeys={[userRole]}
                                onSelectionChange={(key) => handleRoleChange(Array.from(key)[0])}
                                selectorIcon={<></>}
                                classNames={{
                                    base: "w-10",
                                    trigger: " p-1 rounded-full bg-pink-600 text-white text-center h-10 w-10 flex items-center justify-center",
                                    listbox: "bg-[#2D363D]",
                                    popoverContent: "bg-[#2D363D] text-[#a3a3a3] min-w-[150px]",
                                    innerWrapper: "text-[#ffffff] flex items-center justify-center h-full w-full ",
                                    value: "font-semi ml-2 text-white text-[20px]"
                                }}
                                aria-label="User Role"
                                renderValue={() => userRole.charAt(0).toUpperCase()}
                            >
                                <SelectItem key="user">User</SelectItem>
                                <SelectItem key="admin">Admin</SelectItem>
                                <SelectItem key="owner">Owner</SelectItem>
                            </Select>

                            {/* <div className="inline-block ring-2 rounded-full bg-pink-600 text-white text-center ring-pink-600 h-6 w-6">J</div> */}
                            <p className='whitespace-nowrap'>John Doe</p>
                        </div>

                        <button className="lg:hidden hidden md:block text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            {sidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                        </button>

                    </div>
                </div>
                <div className='mt-44 md:mt-20 md:mb-10 md:p-2 lg:mx-[5%] mx-[15px]'>
                    <Outlet context={{ userRole }} />
                </div>
            </div>

        </div>
    )
}

export default Navbar