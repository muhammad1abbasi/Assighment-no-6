import Image from 'next/image';

const CoursesSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title and Description */}
        <h1 className="text-4xl font-bold text-black mb-4">Courses</h1>
        <p className="text-lg text-gray-700 mb-10">Your ultimate guide to learning</p>

        {/* Flexed List for Categories (Popular, Recommended, Best Price) */}
        <div className="flex justify-center space-x-8 mb-10">
          <ul className="list-none">
            <li className="text-xl font-semibold text-black">Popular</li>
          </ul>
          <ul className="list-none">
            <li className="text-xl font-semibold text-black">Recommended</li>
          </ul>
          <ul className="list-none">
            <li className="text-xl font-semibold text-black">Best Price</li>
          </ul>
        </div>

        {/* Images Grid with Course Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-[250px] mb-4">
              <Image
                src="/images/design.svg"
                alt="Course 1"
                width={400}
                height={200}
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-left">Design</h3>
            <h1 className="text-xl font-medium text-gray-700 mb-2 text-left">UX/UI Design 201</h1>
            <p className="text-gray-600 mb-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor.</p>
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black ">
                Enroll Now
              </button>
              <span className="text-xl font-semibold text-black">$400</span>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-[250px] mb-4">
              <Image
                src="/images/programming.svg"
                alt="Course 2"
                width={400}
                height={200}
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-left">Programming</h3>
            <h1 className="text-xl font-medium text-gray-700 mb-2 text-left">Introduction to Python</h1>
            <p className="text-gray-600 mb-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor.</p>
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black">
                Enroll Now
              </button>
              <span className="text-xl font-semibold text-black">$400</span>
            </div>
          </div>

          {/* Course 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-[250px] mb-4">
              <Image
                src="/images/bussines.svg"
                alt="Course 3"
                width={400}
                height={200}
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-left">Business</h3>
            <h1 className="text-xl font-medium text-gray-700 mb-2 text-left">Data Analysis for Beginners</h1>
            <p className="text-gray-600 mb-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor.</p>
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black">
                Enroll Now
              </button>
              <span className="text-xl font-semibold text-black">$400</span>
            </div>
          </div>

          {/* Course 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-[250px] mb-4">
              <Image
                src="/images/art.svg"
                alt="Course 4"
                width={400}
                height={200}
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-left">Art</h3>
            <h1 className="text-xl font-medium text-gray-700 mb-2 text-left">Art Specialization</h1>
            <p className="text-gray-600 mb-4 text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eos .</p>
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black">
                Enroll Now
              </button>
              <span className="text-xl font-semibold text-black">$400</span>
            </div>
          </div>

          {/* Course 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-[250px] mb-4">
              <Image
                src="/images/law.svg"
                alt="Course 5"
                width={400}
                height={200}
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-left">Law</h3>
            <h1 className="text-xl font-medium text-gray-700 mb-2 text-left">Rule of Law</h1>
            <p className="text-gray-600 mb-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor.</p>
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black ">
                Enroll Now
              </button>
              <span className="text-xl font-semibold text-black">$400</span>
            </div>
          </div>

          {/* Course 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-[250px] mb-4">
              <Image
                src="/images/tech.svg"
                alt="Course 6"
                width={400}
                height={200}
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2 text-left">Tech</h3>
            <h1 className="text-xl font-medium text-gray-700 mb-2 text-left">Introduction to webflow</h1>
            <p className="text-gray-600 mb-4 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor.</p>
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 text-lg font-semibold text-black bg-white border-2 border-black">
                Enroll Now
              </button>
              <span className="text-xl font-semibold text-black">$400</span>
            </div>
          </div>
        </div>

        {/* View All Courses Button */}
        <div className="mt-12">
          <button className="px-8 py-4 text-lg font-semibold text-black bg-white border-2 border-black">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
