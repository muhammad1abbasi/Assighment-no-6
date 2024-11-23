import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white text-black py-12">
      
      <div className="max-w-screen-xl mx-auto px-6 mb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-4 space-y-4 lg:space-y-0">
          
          <h1 className="text-3xl font-bold">Subscribe to our newsletter</h1>

          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-700 bg-white text-black placeholder-black w-full sm:w-auto"
            />
            <button className="px-6 py-2 bg-white text-black rounded-lg border-2 border-black w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        
        <p className="text-start text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
          
          <div className="lg:w-1/4 text-center">
            <h1 className="text-xl font-semibold mb-2">Ddsgnr</h1>
          </div>

          
          <div className="flex flex-col lg:gap-48 lg:flex-row lg:space-x-10 lg:w-3/4 space-y-8 lg:space-y-0 ">
            
            <div className="">
              <h1 className="text-xl font-semibold mb-2">Courses</h1>
              <p className="text-black mb-2">Business</p>
              <p className="text-black mb-2">Development</p>
              <p className="text-black mb-2">Technology</p>
              <p className="text-black mb-2">Design</p>
              <p className="text-black mb-2">Programming</p>
            </div>

            
            <div className="">
              <h1 className="text-xl font-semibold mb-2">Resources</h1>
              <p className="text-black mb-2">Career</p>
              <p className="text-black mb-2">Resume</p>
              <p className="text-black mb-2">Learning</p>
              <p className="text-black mb-2">Interview Preparation</p>
              <p className="text-black mb-2">Job</p>
            </div>

            
            <div className="">
              <h1 className="text-xl font-semibold mb-2">About Us</h1>
              <p className="text-black mb-2">Contact</p>
              <p className="text-black mb-2">Help/Support</p>
              <p className="text-black mb-2">FAQ</p>
              <p className="text-black mb-2">Terms</p>
              <p className="text-black mb-2">Partners</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-b border-black my-8"></div>

      
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0 lg:items-center">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-3/4">
            <p className="text-black">2023 Ddsgnr.ALL right reserved.</p>
            <p className="text-black">Privacy Policy.</p>
            <p className="text-black">Terms of Services.</p>
            <p className="text-black">Cookies Settings.</p>
          </div>

          
          <div className="flex justify-center lg:justify-end space-x-6">
            <a href="#" className="text-black hover:text-blue-600">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="text-black hover:text-pink-500">
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="text-black hover:text-blue-400">
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="text-black hover:text-blue-700">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
