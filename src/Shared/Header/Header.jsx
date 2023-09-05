import React, { useContext, useState } from 'react';
import { CartContext } from '../../Provider/MyCartProvider';

const Navbar = () => {
    const { product, setProduct } = useContext(CartContext)
    let total = 0
    for (const item of product) {

        total = total + item.price
    }
    const handleRemove = (pd) => {
        const prod = product.filter(item => item.id !== pd.id)
        setProduct(prod)
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="lg:bg-gray-600 bg-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://via.placeholder.com/32"
                                alt="Logo"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">

                            <div
                                className="relative group"
                            >
                                <button
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    onClick={toggleMenu}
                                >
                                    Services
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 inline-block ml-1 -mt-1 transform transition-transform duration-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3zm-1 6a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1zm2 0a1 1 0 011 1v7a1 1 0 11-2 0v-7a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-[350px] px-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div
                                            className="py-1"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <h1 className='text-xl font-semibold'>Total price {total}</h1>
                                            {
                                                product.map(item => <li className='flex items-center gap-5 mt-3'>
                                                    <img className='h-[75px] w-[75px]' src={item.thumbnail} alt="" />
                                                    <h1>{item.title}</h1>
                                                    <button onClick={() => handleRemove(item)}>Delete</button>

                                                </li>)
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-300 hover:text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                        <h1 className='text-xl text-white font-semibold'>Total price {total}</h1>
                        {
                            product.map(item => <li className='flex items-center gap-5 mt-3'>
                                <img className='h-[75px] w-[75px]' src={item.thumbnail} alt="" />
                                <h1 className='text-white'>{item.title}</h1>
                                <button className='text-white' onClick={() => handleRemove(item)}>Delete</button>

                            </li>)
                        }

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;







