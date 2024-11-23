import Image from "next/image";

const Hero =() => {
    return (
        <div className="pt=20 pb-12 bg-gray-50">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-xl px-6">

                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                    Learn new skills online with ease
                </h1>
                <p className="text-lg sm:text-xl text-gray-700">
                    Discover a wide range of courses tought by expert instructors.
                </p>

                <div className="flex justify-center lg:justify-start space-x-6 mt-6">
                    <button className="bg-black text-white px-6 py-3 rounded-lg">
                        Start learning now
                    </button>
                    <button className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg">
                        Explore Courses
                    </button>
                </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
                <Image src="/images/image.svg" alt="Hero Image" width={502} height={465}/>
                
                </div>

            </div>

        </div>
    );
};

export default Hero;