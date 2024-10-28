import React from 'react'
import BoardFeature from './BoardFeature'
import FeatureRequestList from './FeaturesRequestList'
import Searchbar from '../Searchbar'
import FeatureRequestForm from './FeatureRequestForm'

const Feedback = () => {
    return (
        <div className="min-h-screen">
            <BoardFeature />
            <FeatureRequestForm/>
            <div className='bg-[#2D363D] rounded-2xl p-[25px]'>
                <div className='flex h-12 mb-[20px] justify-end'>
                    <div className='w-[300px] '>
                        <Searchbar />
                    </div>
                </div>
                <FeatureRequestList />
            </div>
        </div>
    )
}

export default Feedback