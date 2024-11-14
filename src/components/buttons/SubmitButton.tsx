'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'

interface SubmitButtonProps {
  onSubmit: () => Promise<void>;
}

export default function SubmitButton({ onSubmit }: SubmitButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true)
    try {
      await onSubmit()
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      disabled={isSubmitting}
      className={`
        flex gap-2.5 justify-center items-center px-6 py-3.5 mt-3.5 w-full
        text-xl font-medium tracking-normal text-white
        bg-gradient-to-r from-violet-600 to-indigo-600
        rounded-[76px] transition-all duration-300 ease-in-out
        hover:from-violet-700 hover:to-indigo-700
        focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50
        ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg transform hover:scale-105'}
      `}
    >
      <span className="self-stretch my-auto">
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </span>
      <Send className={`w-6 h-6 ${isSubmitting ? 'animate-pulse' : 'animate-bounce'}`} />
    </button>
  )
}