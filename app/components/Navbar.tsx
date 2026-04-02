import Image from 'next/image'

export default function Navbar() {

    return (
        <div className="bg-default-background transition-colors duration-300 inline-flex flex-row rounded-sm px-6 py-2 items-center border border-neutral-800">

            <ul className='text-xs font-medium tracking-wide text-default-font flex flex-row items-center gap-10'>
                
                {/* Logo */}
                <li className="mr-2"> 
                    <Image src={"/logo.png"} width={28} height={28} alt='logo' priority/> 
                </li>

                <li className="cursor-pointer hover:opacity-80 transition-opacity"> Cases </li>
                <li className="cursor-pointer hover:opacity-80 transition-opacity"> Service </li>
                <li className="cursor-pointer hover:opacity-80 transition-opacity"> Blog </li>
                <li className="cursor-pointer hover:opacity-80 transition-opacity"> About us </li>

                {/* Contact */}
                <li> 
                    <button className="bg-[#ff4d29] text-white px-5 py-2 rounded-xl font-bold hover:brightness-110 transition-all">
                        Contact
                    </button> 
                </li>
            </ul>
        </div>
    )
}