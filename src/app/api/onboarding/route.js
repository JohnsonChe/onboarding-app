import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(req) {
  const supabase = createClient()
  const request = await req.json()
  const isNewUserEnrollment = request.pageNumber === 1

  if (isNewUserEnrollment) {
    const { email, password } = request
    const { data, error } = await supabase
      .from('onboarded_users')
      .insert([{ email, password }])
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(
      { message: 'User added successfully', id: data[0].id },
      { status: 200 }
    )
  } else {
    const updateKeys = [
      'date_of_birth',
      'about_me',
      'street_1',
      'street_2',
      'city',
      'state',
      'zipcode'
    ]
    const filteredObject = Object.entries(request).reduce((acc, [key, value]) => {
      if (updateKeys.includes(key)) {
        acc[key] = value
      }
      return acc
    }, {})

    const { data, error } = await supabase
      .from('onboarded_users')
      .update([filteredObject])
      .eq('id', request.id)
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: 'User updated', id: data[0].id }, { status: 200 })
  }
}
