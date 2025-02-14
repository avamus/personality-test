"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, ChevronRight, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PersonalityTest() {
  const router = useRouter()

  const handleRedirect = () => {
    const randomPages = ["/about", "/contact", "/services", "/blog", "/faq"]
    const randomPage = randomPages[Math.floor(Math.random() * randomPages.length)]
    router.push(randomPage)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#7b26ee] via-[#5b06be] to-[#3b0080] p-4">
      <Card className="relative w-full max-w-5xl min-h-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 ease-out">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#5b06be] via-[#7b26ee] to-[#9b46fe]"></div>

        <div className="absolute top-4 right-4 text-gray-400">
          <Clock size={24} />
        </div>

        <div className="absolute bottom-4 left-4 text-gray-400">
          <Brain size={24} />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-10 md:p-16 bg-white">
          <h1 className="mb-2 text-4xl md:text-5xl font-bold tracking-tight text-center">
            <span className="text-gray-900">Real Estate Investor</span>{" "}
            <span className="text-[#5b06be]">Personality Test</span>
          </h1>
          <p className="mt-6 mb-8 text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Discover your ideal real estate investing path with our personality assessment. Find strategies that align
            with your natural strengths and maximize your returns.
          </p>

          <div className="flex flex-col items-center">
            <Button
              size="lg"
              onClick={handleRedirect}
              className="bg-[#5b06be] text-white hover:bg-[#4a05a0] transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(91,6,190,0.3)] hover:shadow-[0_0_25px_rgba(91,6,190,0.5)] flex items-center"
              variant="default"
            >
              <span>Start Your Journey</span>
              <ChevronRight className="ml-2" size={20} />
            </Button>
            <p className="mt-6 text-sm font-semibold text-gray-700 flex items-center transition-all duration-300 group">
              <Clock
                size={18}
                className="mr-2 text-[#5b06be] group-hover:scale-110 transition-transform duration-300"
              />
              <span>
                Please allocate <span className="font-bold text-[#5b06be]">30 minutes</span> for this test
              </span>
            </p>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#9b46fe] rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#3b0080] rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        </div>
      </Card>
    </div>
  )
}

