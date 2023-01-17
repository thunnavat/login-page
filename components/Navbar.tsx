import Image from 'next/image'

const Navbar = () => {
  return(
    <div>
      <div className="grid grid-rows-3 md:grid-flow-col border-b border-[#282D3B]">
        <div className="grid justify-items-center row-span-3 border-b md:border-r border-[#282D3B] pt-2">
          <Image src="images\logo.svg" alt="logo" width={152} height={128} />
        </div>
        <div className="flex justify-between items-center row-span-2 md:col-span-5 border-b border-[#282D3B] px-12">
          <div className="text-[#EC2F2F]">MARKETPLACE_</div>
          <div className="flex items-center">
            <Image src="images\pointer.svg" alt="back" width={36} height={28} />
            <button className="invisible md:visible rounded-[18px] bg-[#EC2F2F] filter drop-shadow-redDrop shadow-innerWhite text-[#F9F9F9] px-14 py-3 ml-8" >BACK</button>
          </div>
        </div>
        <div className="md:flex text-[#98A0B5]">
          <div className="border-b md:border-r border-[#282D3B] px-12 py-4">NAKA MARKET</div>
          <div className="border-b md:border-r border-[#282D3B] px-12 py-4">P2P MARKET</div>
          <div className="border-b md:border-r border-[#282D3B] px-12 py-4">NAKAVERSE MAP</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar