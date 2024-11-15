import { SOCIAL_ICONS } from '@/constants/constants'
import React from 'react'
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks'

function HomeHeader() {
  return (
    <div className="bg-custom-gradient bg-custom-size h-[256px] w-full object-contain text-white md:h-[230px]">
    <div className="flex flex-col px-[30px] md:flex-row md:justify-between md:px-[60px] md:pt-[120px]">
      <div>
        <h1 className="pt-[20px] text-[25px] font-semibold md:pt-0 md:text-[38px]">
          Techloset Blog
        </h1>
        <p className="pb-[55px]">Keep up with the IT news</p>
      </div>

      <div className="flex flex-col items-center self-center md:self-auto">
        <h3 className="text-[16px] font-bold md:text-[20px]">
          Share Blogs
        </h3>
        <div className="mt-[23px] flex gap-2">
          {SOCIAL_ICONS.map((item, index) => (
            <SocialMediaLinks
              key={index}
              Icon={item.Icon}
              bgAfter={item.bgAfter}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeHeader