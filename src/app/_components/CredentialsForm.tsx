const CredentialsForm = () => {
  return (
    <div className='grid gap-6 mb-6 grid-cols-1'>
      <small className='text-2xl font-semibold text-gray-500'>Start onboarding here</small>
      <div>
        <label className='block mb-2 text-md font-medium text-gray-900'>Email</label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='email'
          name='email'
        />
      </div>
      <div>
        <label className='block text-md font-medium text-gray-900'>Password</label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='password'
          name='password'
        />
      </div>
      <div>
        <label className='block text-md font-medium text-gray-900'>Confirm Password</label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='password'
          name='confirm-password'
        />
      </div>
    </div>
  )
}

export default CredentialsForm
