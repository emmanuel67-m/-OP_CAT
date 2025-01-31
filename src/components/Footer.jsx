import { Twitter, MessageCircle, Disc } from "lucide-react"
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-[#1A1500] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">$OP_CAT</h3>
          <p className="text-gray-400">The deflationary token inspired by the OP_CAT opcode.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="#tokenomics" className="text-gray-400 hover:text-yellow-500">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-400 hover:text-yellow-500">
                Features
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Telegram">
              <MessageCircle size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500" aria-label="Discord">
              <Disc size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 $OP_CAT. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

