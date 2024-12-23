import Image from "next/image";
import AnimatedContent from "./AnimatedContent";
function HomeHeader() {
  return (
    <div className="relative h-[256px] w-full bg-custom-gradient bg-custom-size object-contain text-white md:h-[230px]">
      <Image
        src={"/assets/images/bgImage.webp"}
        alt={"Blog featured Image"}
        fill
        loading="eager"
        className="absolute -z-50 object-cover"
      />
      <div className="flex flex-col px-[30px] md:flex-row md:justify-between md:px-[60px] md:pt-[120px]">
        <div>
          <h1 className="pt-[20px] text-[25px] font-semibold md:pt-0 md:text-[38px]">
            Techloset Blog
          </h1>
          <p className="pb-[55px]">Keep up with the IT news</p>
        </div>

        <div className="flex flex-col items-center self-center md:self-auto">
          <h3 className="text-[16px] font-bold md:text-[20px]">Share Blogs</h3>
          <AnimatedContent/>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
