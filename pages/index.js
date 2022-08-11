import { Button } from '@material-tailwind/react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className=' text-white  bg-teal-500 h-screen  flex justify-center items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-3xl font-bold'>material-tailwind</h1>
        <p>starter</p>

        <Button className='bg-white text-teal-500 w-full rounded-full'>
          Start
        </Button>
      </div>
    </div>
  );
}
