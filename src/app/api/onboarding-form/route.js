import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(req) {
  const supabase = createClient()
  const request = await req.json()

  const { error } = await supabase
    .from('onboarding_form')
    .update([{ components: request }])
    .eq('id', 1)
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Config Updated' }, { status: 200 })
}

export async function GET() {
  const supabase = createClient()
  const { data, error } = await supabase.from('onboarding_form').select('components').single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}
