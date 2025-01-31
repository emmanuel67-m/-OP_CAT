import { useEffect } from "react"
import { Copy } from "lucide-react"
import React from "react"

const Home = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault()
      const targetId = e.target.getAttribute("href")
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  const handleCopyAddress = () => {
    const address = "0x91f68e145d8E45d45bE4365c3766Eb56f6d"
    navigator.clipboard.writeText(address).then(() => {
      alert("Address copied to clipboard!")
    })
  }

  return (
    <main className="bg-[#1A1500] text-white">
      
      <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16 px-6" id="home">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Hi I'm
            <br />
            $OP_CAT
          </h1>
          <p className="mb-6">
            OP_CAT is an opcode which stands for operation code that was part of the original Bitcoin scripting system.
            It took care of concatenating two strings together, but was removed from Bitcoin in 2010 to prevent possible
            stack overflow.
          </p>
          <div className="bg-yellow-500/10 p-4 rounded-lg flex items-center gap-4 mb-6">
            <span className="font-mono">0x91f68e145d8E45d45bE4365c3766Eb56f6d</span>
            <button onClick={handleCopyAddress} className="text-yellow-500" aria-label="Copy address">
              <Copy size={20} />
            </button>
          </div>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg font-bold">BUY $OPCAT</button>
        </div>

        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-01-29%2011.47.18.jpg-Jum7nIEA2WX62sE4tMM57QIqTIowVv.jpeg"
          alt="OP CAT Hero"
          className="w-full h-auto rounded-lg"
        />
      </section>

      <section className="py-24 px-6" id="tokenomics">
        <h2 className="text-3xl font-bold mb-8 text-center">Tokenomics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-yellow-500/10 p-8 rounded-xl text-center">
            <img
              src="https://i.pinimg.com/474x/45/a4/21/45a421fbdae8034a372af754e988a6ef.jpg"
              alt="Burnt Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold">Burnt</h3>
            <p>50% of token supply burned, More deflationary</p>
          </div>
          <div className="bg-yellow-500/10 p-8 rounded-xl text-center">
            <img
              src="https://i.pinimg.com/474x/45/a4/21/45a421fbdae8034a372af754e988a6ef.jpg"
              alt="Distribution Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold">Distribution</h3>
            <p>Fair Process, 0% Dev holding</p>
          </div>
          <div className="bg-yellow-500/10 p-8 rounded-xl text-center">
            <img
              src="https://i.pinimg.com/474x/45/a4/21/45a421fbdae8034a372af754e988a6ef.jpg"
              alt="Marketing Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="font-semibold">Marketing</h3>
            <p>Heavy marketing and collaboration with influencers</p>
          </div>
        </div>
      </section>

    
      <section className="py-24 px-6" id="features">
        <h2 className="text-3xl font-bold mb-8 text-center">Some of our features</h2>
        <ul className="space-y-4">
          <li className="bg-yellow-500/10 p-4 rounded-lg flex items-center gap-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-01-29%2011.47.18.jpg-Jum7nIEA2WX62sE4tMM57QIqTIowVv.jpeg"
              alt="Influencer Icon"
              className="w-12 h-12"
            />
            <span>Influencer Awareness</span>
          </li>
          <li className="bg-yellow-500/10 p-4 rounded-lg flex items-center gap-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-01-29%2011.47.18.jpg-Jum7nIEA2WX62sE4tMM57QIqTIowVv.jpeg"
              alt="Staking Icon"
              className="w-12 h-12"
            />
            <span>Future Staking</span>
          </li>
          <li className="bg-yellow-500/10 p-4 rounded-lg flex items-center gap-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-01-29%2011.47.18.jpg-Jum7nIEA2WX62sE4tMM57QIqTIowVv.jpeg"
              alt="Trending Icon"
              className="w-12 h-12"
            />
            <span>Trending everywhere</span>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home

