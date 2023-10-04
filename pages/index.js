import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className="grid grid-cols-3 gap-4 px-16 py-8">
        <Card
          image={'/car1.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car2.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car3.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car4.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car5.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car6.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car7.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car8.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car9.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car10.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car11.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car12.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car1.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car2.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car3.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car4.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car5.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
        <Card
          image={'/car6.jpg'}
          carName={'Toyota RAV4'}
          mileage={'6.1'}
          people={4}
          gasType={'Hybrid'}
          price={620}
          year={2020}
        />
      </div>
    </div>
  );
}
