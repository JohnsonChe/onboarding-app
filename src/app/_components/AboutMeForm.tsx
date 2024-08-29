const AboutMe = () => {
  return (
    <div className='pb-4'>
      <label className='block text-md font-medium text-gray-900'>About Me</label>
      <textarea
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        name='about_me'></textarea>
    </div>
  )
}

export default AboutMe
