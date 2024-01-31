import Link from 'next/link';
import React from 'react'

const RegisterPage = () => {
    return (
        <main className='w-screen h-screen flex flex-col items-center justify-center gap-4 font-openSans bg-blueK'>
            {/* <div className='flex flex-col bg-blueLight p-6'>
                <span className='font-semibold text-greyLight'>Username : roberto</span>
                <span className='font-semibold text-greyLight'>Password: 1234</span>
            </div> */}

            <form className='w-[calc(30%)] p-8 flex flex-col justify-center gap-4 rounded-lg bg-whiteK'>
                <span className='font-extrabold text-center text-5xl text-blackE'>Kuepa Registro</span>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='font-semibold text-blackE'>Nombre</label>
                    <input className='p-2 rounded-md border-2 border-l-gray-400' type="text" id='name'/>
                    {/* {
                        errors.username?.message && <span className='text-red-400'>{errors.username?.message}</span>
                    } */}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='font-semibold text-blackE'>Contraseña</label>
                    <input className='p-2 rounded-md border-2 border-l-gray-400' type="password" id='password'/>
                    {/* {
                        errors.password?.message && <span className='text-red-400'>{errors.password?.message}</span>
                    } */}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='font-semibold text-blackE'>Comprobar Contraseña</label>
                    <input className='p-2 rounded-md border-2 border-l-gray-400' type="password" id='password'/>
                    {/* {
                        errors.password?.message && <span className='text-red-400'>{errors.password?.message}</span>
                    } */}
                </div>

                <div className='flex justify-center gap-4'>
                    <Link href={'/'}>
                        <button className='font-semibold pt-2 pb-2 pl-8 pr-8 mt-8 rounded-md bg-greyK text-white'>Ya tienes cuenta?</button>
                    </Link>
                    <button className='font-semibold pt-2 pb-2 pl-8 pr-8 mt-8 rounded-md bg-orangeK text-white' type='submit'>REGISTRATE</button>
                </div>
            </form>
        </main>
    )
}

export default RegisterPage;
