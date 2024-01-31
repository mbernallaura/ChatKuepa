'use client';
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userValidate } from '@/validations/userValidate';
import { kuepachat } from "./api/api";
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    const router = useRouter();
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(userValidate),
    });

    const onSubmit = (data) => {
        const kuepaData = kuepachat.find((u) => u.name === data.name);
        const id = kuepaData.id;
        console.log(id);
        localStorage.setItem('name', kuepaData.name);
        router.push(`/chat/${id}`);
    };

    return (
        <main className='w-screen h-screen flex flex-col items-center justify-center gap-4 font-openSans bg-blueK'>
            <div className="flex gap-4">
                <div className='flex flex-col bg-greyK p-6'>
                    <span className='font-semibold text-whiteK'>Nombre : pablo</span>
                    <span className='font-semibold text-whiteK'>Contraseña: 1234</span>
                </div>
                <div className='flex flex-col bg-greyK p-6'>
                    <span className='font-semibold text-whiteK'>Nombre : pedro</span>
                    <span className='font-semibold text-whiteK'>Contraseña: 4567</span>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}className='w-[calc(30%)] p-8 flex flex-col justify-center gap-4 rounded-lg bg-whiteK'>
                <span className='font-extrabold text-center text-5xl text-blackE'>Kuepa Ingreso</span>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='font-semibold text-blackE'>Nombre</label>
                    <input className='p-2 rounded-md border-2 border-l-gray-400' type="text" id='name' {...register('name')} />
                    {
                        errors.name?.message && <span className='text-red-400'>{errors.name?.message}</span>
                    }
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='font-semibold text-blackE'>Contraseña</label>
                    <input className='p-2 rounded-md border-2 border-l-gray-400' type="password" id='password' {...register('password')}/>
                    {
                        errors.password?.message && <span className='text-red-400'>{errors.password?.message}</span>
                    }
                </div>
                <div className='flex justify-center gap-4'>
                    {/* <Link href={'/register'}>
                        <button className='font-semibold pt-2 pb-2 pl-8 pr-8 mt-8 rounded-md bg-greyK text-white'>REGISTRARSE</button>
                    </Link> */}
                    <button className='font-semibold pt-2 pb-2 pl-8 pr-8 mt-8 rounded-md bg-orangeK text-white' type='submit'>INGRESAR</button>
                </div>
            </form>
        </main>
    )
}

export default LoginPage;
