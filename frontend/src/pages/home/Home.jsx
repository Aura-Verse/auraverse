// import React from 'react'
import Feed from '../../components/feeds/Feed';
import LeftSidebar from '../../components/sidebar/LeftSidebar';
import RightSideBar from '../../components/sidebar/RightSideBar';


const Home = () => {
  return (
    <div className='flex'>
      <LeftSidebar />
      <Feed />
      <RightSideBar />

    </div>
  )
}

export default Home