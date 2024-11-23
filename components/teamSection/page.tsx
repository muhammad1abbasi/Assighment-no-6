import Image from 'next/image';

const TeamSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl font-bold text-black mb-4">Our Team</h1>
        <p className="text-lg text-gray-700 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor.</p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto mb-4">
              <Image 
                src="/images/james.svg" 
                alt="Team Member 1" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">James Nuduku</h2>
            <p className="text-gray-600 mb-4">Marketing Coordinator</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/global-network.png" alt="Global" width={20} height={20} />
              </a>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto mb-4">
              <Image 
                src="/images/joseph.svg" 
                alt="Team Member 2" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">joseph munyambu</h2>
            <p className="text-gray-600 mb-4">Nursing Assistant</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/global-network.png" alt="Global" width={20} height={20} />
              </a>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto mb-4">
              <Image 
                src="/images/josephKala.svg" 
                alt="Team Member 3" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">joseph Ngumbau</h2>
            <p className="text-gray-600 mb-4">Medical Assistant</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/global-network.png" alt="Global" width={20} height={20} />
              </a>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto mb-4">
              <Image 
                src="/images/eric.svg" 
                alt="Team Member 4" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">Eric Kepkemboi</h2>
            <p className="text-gray-600 mb-4">Web Designer</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/global-network.png" alt="Global" width={20} height={20} />
              </a>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto mb-4">
              <Image 
                src="/images/john.svg" 
                alt="Team Member 5" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">Stephen Kerubo</h2>
            <p className="text-gray-600 mb-4">President of Sales</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/global-network.png" alt="Global" width={20} height={20} />
              </a>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-32 h-32 mx-auto mb-4">
              <Image 
                src="/images/johnbaleckDavil.svg" 
                alt="Team Member 6" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-black mb-2">john leboo</h2>
            <p className="text-gray-600 mb-4">Dog Trainer</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="https://www.website.com" target="_blank" rel="noopener noreferrer">
              <Image src="/images/global-network.png" alt="Global" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
