"use client"

import {useEffect, useState} from 'react';
import {Inter} from '@next/font/google';
import useSWR from 'swr';

const inter = Inter({subsets: ['latin']});

export default function Home() {
    const [filter, setFilter] = useState('reset');
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);

    const fetcher = url => fetch(url).then(r => r.json());
    const {data: Data, error} = useSWR('https://deprem-api-orhan-hasan-diff.vercel.app/all', fetcher);


    useEffect(() => {
        if (Data) {
            setData(Data);
        }
    }, [Data])

    const refresh = () => {
        setData(null);

        setTimeout(() => {
            setData(Data)
        }, 3000);
    }

    const filtering = (data) => {
        if (filter === 'reset') return data.sort((a, b) => b.timestamp - a.timestamp);

        if (filter === 'i_m') {
            return data.sort((a, b) => b.magnitude - a.magnitude);
        }

        if (filter === 'd_m') {
            return data.sort((a, b) => a.magnitude - b.magnitude);
        }

        if (filter === 'i_d') {
            return data.sort((a, b) => b.depth - a.depth);
        }

        if (filter === 'd_d') {
            return data.sort((a, b) => a.depth - b.depth);
        }
    }

    return (
        <div>
            <nav
                className="eqs relative lg:w-[55%] bg-white px-2 sm:px-4 mt-3 py-2.5 z-20">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" className="flex items-center">
                        <img src={process.env.DOMAIN + "/icon.svg"} className="h-8 mr-4 sm:h-9"
                             alt=""/>
                        <span
                            className="mt-1 lg:text-[22px] self-center text-xl font-semibold whitespace-nowrap">Deprem Bilgi</span>
                    </a>
                    <span className="absolute bottom-3 left-[195px] text-xs underline text-red-600"><a href="https://deprem-api-orhan-hasan-diff.vercel.app/">API</a></span>

                    <div className="flex">
                        <button data-collapse-toggle="navbar-sticky" type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                                aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="absolute right-0 items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <form>
                                <li className="mt-1 text-[18px]">
                                    <input onChange={(e) => setFilter(e.target.value)} className="mr-1" type="radio"
                                           id="i_m" name="filter" value="i_m"/>
                                    <label className="mr-3" htmlFor="i_m">Artan Büyüklük</label>

                                    <input onChange={(e) => setFilter(e.target.value)} className="mr-1" type="radio"
                                           id="d_m" name="filter" value="d_m"/>
                                    <label className="mr-3" htmlFor="d_m">Azalan Büyüklük</label>

                                    <input onChange={(e) => setFilter(e.target.value)} className="mr-1" type="radio"
                                           id="i_d" name="filter" value="i_d"/>
                                    <label className="mr-3" htmlFor="i_d">Artan Derinlik</label>

                                    <input onChange={(e) => setFilter(e.target.value)} className="mr-1" type="radio"
                                           id="d_d" name="filter" value="d_d"/>
                                    <label className="mr-3" htmlFor="d_d">Azalan Derinlik</label>

                                    <input onChange={(e) => setFilter(e.target.value)} className="mr-1" type="radio"
                                           id="reset" name="filter" value="reset"/>
                                    <label className="mr-3" htmlFor="reset">Sıfırla</label>
                                </li>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>

            <hr className="mx-auto mt-2 lg:w-[55%]"/>

            <div className="eqs mt-4 lg:w-[55%] h-full">
                    <div className="flex flex-col">
                        <label htmlFor="search"
                               className="mb-2 text-sm font-medium sr-only">Ara</label>
                        <div className="relative w-[55%] mt-[-10px] mx-auto mb-2">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="text" id="search"
                                   value={search}
                                   onChange={(e) => setSearch(e.target.value)}
                                   className="block w-full outline-none p-4 pl-10 text-sm text-gray-900 rounded-lg "
                                   placeholder={data && data.result && data.result.length + " deprem verisini filtrelemek için deprem üssü yazınız. (Türkçe karakter kullanmayınız)"} required/>
                        </div>

                        <div id="style-3"
                             className="ml-4 max-h-[820px] overflow-y-auto grid md:grid-cols-2 gap-y-4 lg:grid-cols-3">
                            {!data ? (
                                new Array(15).fill(0).map((_, i) => (
                                    <div key={i} role="status"
                                         className="bg-[#ddd] h-58 max-w-sm p-4 rounded md:p-6 ml-3">
                                        <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-3"></div>
                                        <div
                                            className="animate-pulse bg-gray-400 font-medium h-2 rounded-full mb-4"></div>
                                        <hr className="mt-4 mb-4"/>
                                        <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-4"></div>
                                        <div className="animate-pulse bg-gray-400 h-2 rounded-full"></div>
                                        <hr className="mt-4 mb-4"/>
                                        <div className="grid grid-cols-2 flex items-center space-x-3">
                                            <div>
                                                <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-3"></div>
                                                <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-3"></div>
                                                <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-3"></div>
                                            </div>

                                            <div>
                                                <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-3"></div>
                                                <div className="animate-pulse bg-gray-400 h-2 rounded-full mb-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                filtering(data.result)
                                    .filter((eq) => eq.base.toLowerCase().includes(search.toLowerCase())).length === 0
                                    ?
                                    <h1 className="float-left text-center text-2xl">Sonuç bulunamadı.</h1>
                                    :
                                    filtering(data.result)
                                        .filter((eq) => eq.base.toLowerCase().includes(search.toLowerCase()))
                                        .map((eq, i) => (
                                            <div key={i} role="status"
                                                 className="bg-[#ddd] h-58 max-w-sm p-4 rounded md:p-6 ml-3">
                                                <div className="h-2 rounded-full mb-3"><div className="truncate"><span
                                                    className="font-bold">Deprem Üssü:</span> {eq.base}</div></div>
                                                <div className="font-medium h-2 rounded-full mb-4">
                                                    <div className="truncate"><span
                                                        className="font-bold">Konum:</span> {eq.location}</div>
                                                </div>
                                                <hr className="mt-6 mb-2"/>
                                                <div className="h-2 rounded-full mb-4"><span
                                                    className="font-bold">Tarih:</span> {eq.longDate.split('^')[0]}</div>
                                                <div className="h-2 rounded-full"><span
                                                    className="font-bold">Saat:</span> {eq.time}</div>
                                                <hr className="mt-6 mb-2"/>
                                                <div className="grid grid-cols-2 flex items-center space-x-3">
                                                    <div>
                                                        <div className="h-2 rounded-full mb-3"><span
                                                            className="font-bold">Derinlik:</span> {eq.depth} KM
                                                        </div>
                                                        <div className="h-2 rounded-full mb-3"><span
                                                            className="font-bold">Büyüklük:</span> <span className={
                                                            eq.magnitude >= 5 ? "text-red-500" : eq.magnitude >= 4 ? "text-yellow-500" : eq.magnitude >= 3 ? "text-green-500" : "text-blue-500"
                                                        }>
                                                {eq.magnitude}
                                            </span>
                                                        </div>
                                                        {eq.moment ? (
                                                            <div className="h-2 rounded-full mb-3"><span
                                                                className="font-bold">Moment:</span> <span className={
                                                                eq.magnitude >= 5 ? "text-red-500" : eq.magnitude >= 4 ? "text-yellow-500" : eq.magnitude >= 3 ? "text-green-500" : "text-blue-500"
                                                            }>{eq.moment}</span></div>
                                                        ) : <div className="animate-pulse w-28 mt-5 bg-gray-400 h-2"
                                                                 style={{borderRadius: "2px"}}></div>}
                                                    </div>

                                                    <div className="mt-[-16px]">
                                                        <div className="h-2 rounded-full mb-3"><span
                                                            className="font-bold">Enlem:</span> {eq.latitude}</div>
                                                        <div className="h-2 rounded-full mb-3"><span
                                                            className="font-bold">Boylam:</span> {eq.longitude}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
    );
}
