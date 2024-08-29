import { createClient } from '@/utils/supabase/server'

const fields = {
  email: 'Email',
  password: 'Password',
  date_of_birth: 'Date of Birth',
  about_me: 'About Me',
  street_1: 'Street 1',
  street_2: 'Street 2',
  city: 'City',
  state: 'State',
  zipcode: 'Zipcode'
}

export default async function DataPage() {
  const supabase = createClient()
  const { data: userData } = await supabase.from('onboarded_users').select()

  return (
    <div className='container p-4'>
      <table className='table-fixed border-collapse border border-slate-500'>
        <tbody>
          <tr>
            {Object.values(fields).map((heading, index) => (
              <th className='border text-left px-4 border-slate-600' key={index}>
                {heading}
              </th>
            ))}
          </tr>
          {userData &&
            userData.map((dataUnit, index) => (
              <tr key={index}>
                {Object.keys(fields).map((field, index) => (
                  <td className='border px-4 py-2' key={index}>
                    {dataUnit[field]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
