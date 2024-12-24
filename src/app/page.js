import Image from 'next/image';
import COVER_IMAGE from '../assets/simba-login.png';
import LOGO_IMAGE from '../assets/baznas-logo.png';
import GOOGLE_ICON from '../assets/google-icon.svg';

export default function Home() {
  return (

    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Side with Cover Image */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-red-200 hidden md:block"> {/* Hide entire div on mobile */}
        <Image
          src={COVER_IMAGE}
          alt="Simba login background image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-5 flex flex-col">
          <h1 className="text-white font-normal">© 2023 Arif "Rohriat" Abriyanto</h1>
        </div>
      </div>

      {/* Right Side with Login Form */}
      <div className="flex flex-col items-center w-full md:w-1/2 h-full p-8">
        <div className="flex flex-col">

          <div className="flex flex-col items-center">
            <Image src={LOGO_IMAGE} alt="baznas logo" className="w-[107px] mb-5 pt-5" />
          </div>
          <div className="flex flex-col mt-10 pt-36">
            <h1 className="text-4xl font-black text-[#215635]">SIMBA</h1>
            <h2 className="text-2xl font-bold pt-14">Masuk</h2>
            <p className="font-normal text-gray-500 mt-2">
              Selamat datang kembali! <br />
              Silahkan login menggunakan akun Google Anda.
            </p>
          </div>
          <button className="mt-8 flex items-center justify-center border border-gray-400 bg-white text-gray-800 font-semibold py-3 px-6 rounded-2xl shadow hover:bg-gray-100 transition duration-200">
            <Image src={GOOGLE_ICON} alt="Google Icon" width={20} height={20} className="mr-3" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}