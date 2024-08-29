const AddressForm = () => {
  return (
    <div className='grid gap-6 mb-6 grid-cols-1'>
      <h1>Please enter your address</h1>
      <div>
        <label className='block mb-2 text-md font-medium text-gray-900' htmlFor='street_1'>
          Street 1
        </label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='text'
          name='street_1'
        />
      </div>
      <div>
        <label className='block mb-2 text-md font-medium text-gray-900' htmlFor='street_2'>
          Street 2
        </label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='text'
          name='street_2'
        />
      </div>
      <div>
        <label className='block mb-2 text-md font-medium text-gray-900' htmlFor='city'>
          City
        </label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='text'
          name='city'
        />
      </div>
      <div>
        <label className='block mb-2 text-md font-medium text-gray-900' htmlFor='state'>
          State
        </label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='text'
          name='state'
        />
      </div>
      <div>
        <label className='block mb-2 text-md font-medium text-gray-900' htmlFor='zipcode'>
          Zipcode
        </label>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='number'
          name='zipcode'
        />
      </div>
    </div>
  )
}

export default AddressForm
