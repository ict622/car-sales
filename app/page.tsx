import Image from 'next/image';

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
    <main className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Premium Cars for Sale
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find your next dream car from our exclusive collection.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {carsForSale.map((car) => (
            // This is the "Car Card" component, built directly in the loop
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
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
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">
                  {car.year} {car.make} {car.model}
                </h2>
                <div className="mt-4">
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
      </div>
    </main>
  );
}
