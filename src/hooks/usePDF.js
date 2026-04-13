import { useState } from 'react'
import html2pdf from 'html2pdf.js'

export const usePDF = () => {
  const [isGenerating, setIsGenerating] = useState(false)

  const downloadPDF = async (filename = 'Curriculum_Vitae.pdf', elementId = 'cv-content') => {
    const element = document.getElementById(elementId)
    if (!element) return

    setIsGenerating(true)

    // Add a class to the body to trigger PDF-specific styles (like light theme)
    document.body.classList.add('pdf-mode')
    
    // Wait a bit for the styles to apply and any layouts to settle
    await new Promise(resolve => setTimeout(resolve, 500))

    const opt = {
      margin: 0, 
      filename: filename,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 3, // Higher scale for ultra-crisp text
        useCORS: true,
        letterRendering: true,
        scrollY: 0,
        windowWidth: 800 // Consistent width for CV layout
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }

    try {
      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('PDF Generation Error:', error)
    } finally {
      // Remove the PDF-specific styles
      document.body.classList.remove('pdf-mode')
      setIsGenerating(false)
    }
  }

  return { downloadPDF, isGenerating }
}
