import { useState } from "react"
import { Menu, X } from "lucide-react"
import React from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCopyAddress = () => {
    const address = "0x91f68e145d8E45d45bE4365c3766Eb56f6d"
    navigator.clipboard.writeText(address).then(() => {
      alert("Address copied to clipboard!")
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#1A1500] py-6">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pinimg.com/474x/9b/54/4a/9b544a0a12b63687dc34c6a99f8ddb3e.jpg"
            alt="$OP_CAT Logo"
            className="h-10"
          />
          <h2 className="text-white text-2xl font-bold">$OP_CAT</h2>
        </div>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#home" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#tokenomics" className="hover:text-yellow-500">
            Tokenomics
          </a>
          <a href="#about" className="hover:text-yellow-500">
            About
          </a>
          <a href="#features" className="hover:text-yellow-500">
            Features
          </a>
        </div>

        <button className="hidden md:block bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold">Buy Now</button>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1500] py-4">
          <div className="flex flex-col items-center gap-4 text-white">
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
            <a href="#tokenomics" className="hover:text-yellow-500">
              Tokenomics
            </a>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
            <a href="#features" className="hover:text-yellow-500">
              Features
            </a>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold">Buy Now</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

