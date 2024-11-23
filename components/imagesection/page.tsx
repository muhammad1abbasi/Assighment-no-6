import Image from "next/image";


const ImageSection = () => {
  return (
    <div className="py-20 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center lg:text-left">
                Trusted by 2000+ companies <br /> worlwide
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:space-x-4 gap-4">
                <div className="w-[123.8px] h-[38.52px] mx-auto lg:mx-0">
                <Image src="/images/logo1.svg" alt="photo1" width={123.8} height={38.52} className="object-cover rounded-lg"/>
                </div>
                <div className="w-[123.8px] h-[38.52px] mx-auto lg:mx-0">
                <Image src="/images/logo2.svg" alt="photo1" width={123.8} height={38.52} className="object-cover rounded-lg"/>
                </div>
                <div className="w-[123.8px] h-[38.52px] mx-auto lg:mx-0">
                <Image src="/images/logo3.svg" alt="photo1" width={123.8} height={38.52} className="object-cover rounded-lg"/>
                </div>
                <div className="w-[123.8px] h-[38.52px] mx-auto lg:mx-0">
                <Image src="/images/logo4.svg" alt="photo1" width={123.8} height={38.52} className="object-cover rounded-lg"/>
                </div>
                <div className="w-[123.8px] h-[38.52px] mx-auto lg:mx-0">
                <Image src="/images/logo5.svg" alt="photo1" width={123.8} height={38.52} className="object-cover rounded-lg"/>
                </div>
                <div className="w-[123.8px] h-[38.52px] mx-auto lg:mx-0">
                <Image src="/images/logo6.svg" alt="photo1" width={123.8} height={38.52} className="object-cover rounded-lg"/>
                </div>
                
            </div>
            
        </div>
        
      
    </div>
  );
};

export default ImageSection;
