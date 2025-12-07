import { ThemeProvider } from 'next-themes'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
    >
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {children}
      </div>
    </ThemeProvider>
  )
}