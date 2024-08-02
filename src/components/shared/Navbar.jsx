import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropright, IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            {/*  */}
            <div className="bg-black min-h-10 py-3 font">
                <div className="flex items-center uppercase justify-center md:justify-between max-w-[1270px] mx-auto text-white">
                    <p className='hidden md:block'>Available 24/7 at +566 4444 9940</p>
                    <p className=''>Free Delivery on orders over $120. Dont miss.</p>
                    <div className="hidden md:block">
                        <div className="flex ">
                            <div className="flex">
                                <p className=''>🏳️‍🌈</p>
                                <p>English</p>
                            </div>
                            <div className="">
                                <p>USD $</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div class="navbar p-0 max-w-[1280px] mx-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2 shadow uppercase">
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/'}>Home</Link></p>
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/shop'}>Shop</Link></p>
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Products</Link></p>
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Features</Link></p>
                            <div className="relative py-5 px-[15px]">
                                <p className='hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>DEAL ZONE</Link></p>
                                <IoMdArrowDropright className='absolute top-[7px] left-[26%] text-[#ed8f0c] text-2xl'></IoMdArrowDropright>
                                <small className='absolute bg-[#ed8f0c] text-white top-1 left-2 px-2 ml-12 h-4 rounded-sm'>HOT</small>
                            </div>
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Pages</Link></p>
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Blog</Link></p>
                            <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Buy Now</Link></p>
                        </ul>
                    </div>
                    <a class=" text-xl">Vogal</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 uppercase">
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/'}>Home</Link></p>
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/shop'}>Shop</Link></p>
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Products</Link></p>
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Features</Link></p>
                    <div className="relative py-5 px-[15px]">
                        <p className=' hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>DEAL ZONE</Link></p>
                        <IoMdArrowDropright className='absolute top-[7px] left-[44%] text-[#ed8f0c] text-2xl'></IoMdArrowDropright>
                        <small className='absolute bg-[#ed8f0c] text-white top-1 left-[2px] px-2 ml-12 h-4 rounded-sm text-[10px] font-medium'>HOT</small>
                    </div>
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Pages</Link></p>
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Blog</Link></p>
                    <p className='py-5 px-[15px] hover:text-[#4eb370] font-links hover:font-semibold'><Link href={'/#'}>Buy Now</Link></p>
                    </ul>
                </div>
                <div class="navbar-end">
                <div className="flex text-xl">
                    <div className="p-[10px] hover:text-[#4eb370]">
                        <BiSearch ></BiSearch>
                    </div>
                    <div className="p-[10px] hover:text-[#4eb370]">
                        <AiOutlineUser ></AiOutlineUser>
                    </div>
                    <div className="p-[10px] hover:text-[#4eb370]">
                        <FiHeart></FiHeart>
                    </div>
                    <div className="p-[10px] hover:text-[#4eb370]">
                        <FiShoppingCart />
                    </div>
                </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
