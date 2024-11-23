import Image from 'next/image';

const Achievements = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl font-bold text-black mb-4">Explore Courses by category</h1>
        <p className="text-lg text-gray-700 mb-10">Find the best courses across various categories and start learning today!</p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/ux-design.png" alt="Design logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Design and Development</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/volume.png" alt="Marketing logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Marketing</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/shuffle.png" alt="Development logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Development</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/audio.png" alt="Communication logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Communication</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/link.png" alt="Digital Marketing logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Digital Marketing</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/import-export.png" alt="Self Development logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Self Development</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/briefcase.png" alt="Business logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Business</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/open-book.png" alt="Finance logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Finance</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="w-[50px] h-[50px]">
              <Image src="/images/agenda.png" alt="Consulting logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Consulting</h2>
              <p className="text-sm text-gray-500">50+ courses Available</p>
            </div>
          </div>
        </div>

       
        <div className="mt-10">
          <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black ">
            View All Courses
          </button>
        </div>

        
        <div className="py-20 bg-white mt-20">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Our Achievements</h1>
            <p className="text-lg text-gray-700 mb-10">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem alias sed praesentium libero reprehenderit quia illum, at, iure error sint tempore corporis! Voluptates saepe ipsam tenetur nesciunt iure distinctio facilis itaque labore.
            </p>

            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-black">200+</h2>
                <p className="text-sm text-gray-500">Courses</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-black">50k</h2>
                <p className="text-sm text-gray-500">Mentors</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-black">370k</h2>
                <p className="text-sm text-gray-500">Students</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-black">100+</h2>
                <p className="text-sm text-gray-500">Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
