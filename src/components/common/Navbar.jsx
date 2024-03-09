import React, { useEffect, useState } from 'react'
import { NavbarLinks } from '../../data/navbar-links';
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/apis';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const {token} = useSelector( (state) => state.auth);
    const {user} = useSelector( (state) => state.profile);
    const {totalItems} = useSelector( (state) => state.cart);

    const location = useLocation();

    const [subLinks, setSubLinks] = useState([]);

    const fetchSubLinks = async() =>{
            try{
                const result = await apiConnector('GET', categories.CATEGORIES_API);
                console.log("Printing sublinks are : ", result);
                setSubLinks(result.data.data);
            } catch(err) {
                console.log("Could not fetch the category list");
            }
    }
    useEffect(() =>{
        fetchSubLinks();
    }, [])
    
    const matchRoute = (route) =>{
        return matchPath({path:route}, location.pathname)
    }

  return (
    <div className='flex h-14 items-center border-b-[1px] border-b-richblack-700'>

        <div className='flex mx-auto w-11/12 max-w-maxContent items-center justify-between'>
            
            <Link to = '/'>
                <img src={Logo} loading='lazy' alt="logo" width={160} height={32} />
            </Link>

            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                    NavbarLinks.map((element, index) => (
                         <li key={index}>
                                {
                                    element.title === "Catalog" ? (
                                    <div className='cursor-pointer flex items-center relative gap-2 group'>
                                        <p>{element.title}</p>
                                        <IoIosArrowDown />
                                        <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>

                                            <div className='absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5'>
                                            </div>

                                            {
                                                subLinks.length ? (
                                                    
                                                       subLinks.map((subLink, index) =>(
                                                        <Link className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50' key={index} to={`/catalog/${subLink.name}`}>{subLink.name}</Link>
                                                       )) 
                                        
                                                ) : (<div></div>)
                                            }

                                        </div>
                                    </div>) : (
                                        <Link to={element?.path}><p className={`${matchRoute(element?.path) ? 'text-yellow-25' : 'text-richblack-25'}`}>{element.title}</p></Link>
                                    )
                                }
                            </li>
                    ))}

                </ul>
            </nav>

            {/* Login/Signup/Dashboard */}
            <div className='flex gap-x-4 items-center'>

                {
                    user && user?.accountType != "Instructor" && (
                        <Link to={'/dashboard/cart'} className='relative text-richblack-50'>
                            <AiOutlineShoppingCart size={23}/>
                            {
                                totalItems > 0 && (
                                    <span className='animate-bounce'>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                                token === null && (
                                    <Link to={'login'}>
                                        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>Log in</button>
                                    </Link>
                                )
                            }
                            {
                                token === null && (
                                    <Link to={'signup'}>
                                    <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>Sign up</button>
                                    </Link>
                                )
                            }
                            {
                                token !== null && <ProfileDropDown/>
                            }

            </div>



        </div>

    </div>
  )
}

export default Navbar