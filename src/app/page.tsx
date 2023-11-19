'use client';
import Image from 'next/image'
import CitySelector from './dropdown'
import DateTimePicker from './datetime_picker'

export default function Home() {
  return (
    <main className="relative">
      <div className="flex items-center justify-center h-screen bg-grey-500">
        <CitySelector />
        <DateTimePicker />
      </div>
    </main>
  )
}
