import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/5493515308726" target="_blank" rel="noopener noreferrer"
       className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold text-sm hidden sm:block">¿Necesitás ayuda?</span>
    </a>
  )
}

export default WhatsAppButton
