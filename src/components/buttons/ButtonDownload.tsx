'use client'

import React, { useState } from 'react'
import { Download } from 'lucide-react'

interface CVDownloadButtonProps {
  cvUrl: string;
  fileName?: string;
}

export default function CVDownloadButton({ cvUrl, fileName = "mi-cv.pdf" }: CVDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState<boolean>(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // Simular un retraso en la descarga
    setTimeout(() => {
      const link: HTMLAnchorElement = document.createElement("a")
      link.href = cvUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setIsDownloading(false)
    }, 1500) // Simula 1.5 segundos de descarga
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`
        relative overflow-hidden px-6 py-3 rounded-full
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white font-semibold text-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
        ${isDownloading ? 'cursor-not-allowed opacity-75' : 'hover:from-purple-600 hover:to-indigo-700'}
      `}
    >
      <span className="flex items-center justify-center">
        <Download className={`mr-2 h-5 w-5 ${isDownloading ? 'animate-bounce' : 'animate-pulse'}`} />
        {isDownloading ? 'Descargando...' : 'Descargar CV'}
      </span>
      <span 
        className={`
          absolute inset-0 flex items-center justify-center w-full h-full
          transition-all duration-300 ease-in-out transform
          ${isDownloading ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}
      >
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </span>
    </button>
  )
}