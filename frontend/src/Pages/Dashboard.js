import React, { useState } from 'react'
import Navbar from "../component/Navbar.js"
import Itemtable from '../component/Itemtable.js';
import { Link } from 'react-router-dom';
import Contact from '../component/Contact.js';
// import { Link } from 'react-router-dom'
export default function Dashboard() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact" },
        { name: "Dashboard", link: "/dashboard" },
    ];

    const [history, sethistory] = useState(false);
    const [contact, setContact] = useState(false);
    const [customerList, secustomerList] = useState(false);
    const [itemList, setitemList] = useState(false);
    const [recent, setrecent] = useState(false);
    const [invoice, setnvoice] = useState(false);

    return (
        <>
            <div className='md:h-20 h-12'>
                <Navbar links={links} />
            </div>
            <div className='flex flex-row mb-2 '>
                <div className='md:w-1/4 w-2/4 bg-gray-200 border-2 p-4' >
                    <table className='place-items-center w-full text-lime-700 capitalize md:text-xl font-medium tracking-wide'>
                        <tr className='hover:uppercase border-b-2 hover:bg-gray-300 border-slate-500 h-20 rounded-3xl flex items-center justify-center  cursor-pointer'>
                            DashBoard
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2  hover:bg-gray-300 border-slate-500 h-20 rounded-3xl flex items-center justify-center  cursor-pointer' >
                            History
                        </tr>
                        <tr className=' hover:uppercase mt-4 border-b-2 hover:bg-gray-300 border-slate-500 h-20 rounded-3xl flex items-center justify-center  cursor-pointer' >
                            Customer List
                        </tr>
                        <tr className=' hover:uppercase mt-4 border-b-2 hover:bg-gray-300 border-slate-500 h-20 rounded-3xl flex items-center justify-center cursor-pointer'>
                            <Link to="/" onClick={() => {
                                setContact(false)
                                setitemList(true)
                            }}>
                                Item List
                            </Link>
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2 hover:bg-gray-300  border-slate-500 h-20 rounded-3xl flex items-center justify-center  cursor-pointer'>
                            Recent
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2 hover:bg-gray-300 border-slate-500 h-20 rounded-3xl flex items-center justify-center  cursor-pointer'>
                            Invoice
                        </tr>
                        <tr className='hover:uppercase mt-4 border-b-2 hover:bg-gray-300  border-slate-500 h-20 rounded-3xlflex items-center justify-center  cursor-pointer'>
                            <Link to="/" onClick={() => {
                                setitemList(false)
                                setContact(true)
                            }}>
                                Contact
                            </Link>
                        </tr>
                        <tr className='hover:uppercase mt-4 h-20 flex  hover:bg-gray-300 items-center rounded-3xl justify-center  cursor-pointer'>

                        </tr>

                    </table>
                </div>
                <div className='md:w-3/4 w-2/4'>


                    {itemList ? <Itemtable /> : contact ? <Contact /> : null}


                </div>
            </div>
        </>
    )
}
