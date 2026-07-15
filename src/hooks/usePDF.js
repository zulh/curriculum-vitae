import { useState } from 'react'

/**
 * Triggers the browser's native print dialog, scoped by the `@media print`
 * rules in index.css so ONLY the dedicated print layout (PrintLayout) renders.
 *
 * Printing to PDF this way produces selectable, ATS-parseable, vector text and
 * lets the browser paginate natively — unlike html2canvas, which rasterized the
 * whole page into a heavy, unsearchable image.
 */
export const usePDF = () => {
  const [isGenerating, setIsGenerating] = useState(false)

  const downloadPDF = async (filename = 'Curriculum_Vitae') => {
    setIsGenerating(true)

    // The saved-PDF filename is suggested by document.title in most browsers.
    const previousTitle = document.title
    document.title = filename.replace(/\.pdf$/i, '')

    // Let React flush any pending render before opening the print dialog.
    await new Promise(resolve => setTimeout(resolve, 50))

    try {
      window.print()
    } finally {
      document.title = previousTitle
      setIsGenerating(false)
    }
  }

  return { downloadPDF, isGenerating }
}
