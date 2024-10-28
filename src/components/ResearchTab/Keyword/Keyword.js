import React from 'react'
import Searchbar from '../../Searchbar'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Comp1 from './Comp1'
import './styles.css'
import KeywordDataCard from './KeywordDataCard';


const Keyword = () => {
    const location = useLocation();

    const data1 = Array.from({ length: 40 }, (_, i) => i + 1);
    const data2 = Array(40).fill(10)
    const data4 = Array.from({ length: 4 }, (_, i) => i + 1)

    const cardData1 = {
        title: '678,623',
        subtitle: 'Similar keywords',
        data: [
            { keyword: 'sneakers', value: '118,000' },
            { keyword: 'silver sneakers near me', value: '35,600' },
            { keyword: 'nike sneakers', value: '33,300' },
            { keyword: 'golden goose sneakers', value: '32,400' },
            { keyword: 'veja sneakers', value: '28,300' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
        ],
        footerLink: '#'
    };

    const cardData2 = {
        title: '29,244',
        subtitle: 'Questions',
        data: [
            { keyword: 'How to wash sneakers', value: '1,800' },
            { keyword: 'How to clean sneakers', value: '16,00' },
            { keyword: 'How to clean white sneakers', value: '16,00' },
            { keyword: 'How to start a sneaker business', value: '12,00' },
            { keyword: 'How do you get silver sneakers?', value: '12,00' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
        ],
        footerLink: '#'
    };

    const cardData3 = {
        title: '15,420,717',
        subtitle: 'Also ranks for',
        data: [
            { keyword: 'silver sneakers near me', value: '35,600' },
            { keyword: 'shoes', value: '346,000' },
            { keyword: 'new shoes', value: '7,400' },
            { keyword: 'golden goose sneakers', value: '32,400' },
            { keyword: 'uggs', value: '207,000' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
        ],
        footerLink: '#'
    };

    const cardData4 = {
        title: '23,543',
        subtitle: 'Also buys ads for',
        data: [
            { keyword: 'vans', value: '1,330,000' },
            { keyword: 'adidas', value: '1,600,000' },
            { keyword: 'addidas', value: '217,000' },
            { keyword: 'men’s originals stan smith shoes', value: '420' },
            { keyword: 'veja sneakers', value: '28,300' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
            { keyword: 'Log in to see all results', value: '--' },
        ],
        footerLink: '#'
    };

    return (
        <div>
            <div className="flex text-[14px] items-center gap-2 px-2">
                <Link to="/dashboard/research" className={`px-2 py-1 rounded-md ${location.pathname === '/dashboard/research' ? 'text-[#F3941D] bg-[#2D363D]' : ''}`}>Domain</Link>
                <Link to="/dashboard/research/keyword" className={`px-2 py-1 rounded-md ${location.pathname === '/dashboard/research/keyword' ? 'text-[#F3941D] bg-[#2D363D]' : ''}`}>Keyword</Link>
            </div>
            <div className='my-5'>
                <Searchbar />
            </div>

            <div className='grid grid-cols-5 gap-3 justify-between'>

                <Comp1 data1={data1} data2={data2} data4={data4} />

                <div className='flex flex-col gap-3 col-span-5 md:col-span-3'>

                    <KeywordDataCard {...cardData1} />

                    <KeywordDataCard {...cardData2} />


                    <KeywordDataCard {...cardData3} />

                    <KeywordDataCard {...cardData4} />

                </div>
            </div>
        </div>
    )
}

export default Keyword