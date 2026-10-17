import photos from '../data/photos'

const sizeClasses = {
  tall: 'lg:row-span-2',
  wide: 'sm:col-span-2',
  normal: '',
}

function Gallery() {
  return (
    <section id="gallery" className="max-w-[1200px] mx-auto px-4 py-14 sm:px-6 md:py-20">
      <p className="uppercase tracking-[0.15em] text-[0.8rem] text-stone mb-2">
        Selected work
      </p>
      <h2 className="font-serif text-[1.8rem] leading-tight mb-6 md:text-[2.2rem]">
        Gallery
      </h2>

      <div className="grid grid-cols-1 gap-6 grid-flow-dense sm:grid-cols-2 sm:auto-rows-[280px] lg:grid-cols-3 lg:auto-rows-[320px]">
        {photos.map((photo) => (
          <figure
            key={photo.id}
            className={`flex flex-col min-h-0 bg-white p-3 pb-0 border border-line shadow-soft transition duration-300 hover:shadow-hover hover:-translate-y-1 ${sizeClasses[photo.size]}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-[300px] object-cover sm:h-auto sm:flex-1 sm:min-h-0"
            />
            <figcaption className="py-3 font-serif">
              {photo.title}{' '}
              <span className="text-stone text-xs uppercase tracking-[0.1em]">
                — {photo.location}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery