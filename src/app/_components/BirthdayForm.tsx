const BirthdayForm = () => {
  return (
    <div className='pb-4'>
      <label className='block text-md font-medium text-gray-900'>Date of Birth</label>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        type='date'
        placeholder='mm/dd/yyyy'
        name='date_of_birth'
      />
    </div>
  )
}

export default BirthdayForm
