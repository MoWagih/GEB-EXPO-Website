import expo1 from '../assets/imgs/expo1.jpg'
import expo2 from '../assets/imgs/expo2.jpg'
import expo3 from '../assets/imgs/expo3.png'
import expo4 from '../assets/imgs/expo4.png'

export default function Gallery() {

    const images = [expo1, expo2, expo3, expo4];

  return (
    <div className='bg-[#00000040] shadow-2xl w-full flex flex-col xl:flex-row justify-center items-center gap-4 p-3 pt-6 pb-6 xl:p-10 text-white'>
      <h2 className="text-3xl text-center mb-6">معرض الصور</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Gallery ${index + 1}`} 
            className="shadow-2xs hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  )
}
