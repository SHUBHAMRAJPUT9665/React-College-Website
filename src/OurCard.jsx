import React from 'react'

const OurCard = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

<section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
        <span className='text-blue-400'>OUR</span> BENEFITS </h2>
      <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
        Enhance your workflow with advanced features
      </p>
    </div>
    <div
      className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
      <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
          <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Experinced Mentor</h3>
        <p className="mt-5 text-base text-gray-600">Track and analyze your data with powerful analytics tools. Gain valuable
          insights for better decision-making.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
          <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">College Bus</h3>
        <p className="mt-5 text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quas! Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
          <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-12 text-xl font-bold text-gray-900">Security First</h3>
        <p className="mt-5 text-base text-gray-600">Ensure the safety of your data with top-notch security features. Your
          privacy is our priority.</p>
      </div>

    
    </div>
  </div>
</section>
    </div>
  )
}

export default OurCard
