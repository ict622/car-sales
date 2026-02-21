import Image from 'next/image';

// Helper components for structure (still in one file as requested)
const Header = () => (
  <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <a href="#">AutoLux</a>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#listings" className="hover:text-blue-300">Collection</a>
        <a href="#" className="hover:text-blue-300">About</a>
        <a href="#" className="hover:text-blue-300">Contact</a>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} AutoLux. All Rights Reserved.</p>
    </div>
  </footer>
);

// 1. Define the data structure for a car
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
  imageAlt: string;
}

// 2. Create sample car data
const carsForSale: Car[] = [
  {
    id: 1,
    make: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    price: 115000,
    imageUrl: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
    imageAlt: 'A sleek, black Porsche 911 sports car.',
  },
  {
    id: 2,
    make: 'Ford',
    model: 'Mustang GT',
    year: 2024,
    price: 45000,
    imageUrl: 'https://images.pexels.com/photos/2631489/pexels-photo-2631489.jpeg',
    imageAlt: 'A vibrant blue Ford Mustang GT, an American muscle car.',
  },
  {
    id: 3,
    make: 'Toyota',
    model: 'Supra',
    year: 2022,
    price: 58000,
    imageUrl: 'https://images.pexels.com/photos/3221145/pexels-photo-3221145.jpeg',
    imageAlt: 'A sporty, red Toyota Supra with an aerodynamic design.',
  },
  {
    id: 4,
    make: 'Honda',
    model: 'Civic Type R',
    year: 2023,
    price: 43000,
    imageUrl: 'https://images.pexels.com/photos/754898/pexels-photo-754898.jpeg',
    imageAlt: 'A modern, white Honda Civic Type R hot hatchback.',
  },
];

// 3. The main page component
export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen bg-hero-image bg-cover bg-center flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Find Your Drive
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Experience the pinnacle of automotive excellence. Browse our curated selection of premium vehicles.
            </p>
            <a
              href="#listings"
              className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              View Collection
            </a>
          </div>
        </section>

        {/* Car Listings Section */}
        <section id="listings" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <header className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Collection
            </h2>
            <p className="mt-4 text-md md:text-lg text-gray-600">
              Hand-picked for quality, performance, and style.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {carsForSale.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={car.imageUrl}
                    alt={car.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800">
                    {car.year} {car.make} {car.model}
                  </h3>
                  <div className="mt-4 flex-grow">
                    <span className="text-2xl font-bold text-gray-900">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                      }).format(car.price)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
