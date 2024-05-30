'use client';

import userRegister from '@/service/action/userRegister';
import { Button, Input, Typography } from '@material-tailwind/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const RegisterPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const router = useRouter();

  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const res = await userRegister(data);

    if (res?.success) {
      toast(res?.message, {
        className: 'text-green-500 bg-green-50 text-lg',
      });
      router.push('login');
    } else {
      toast(res?.message, { className: 'text-green-500 bg-green-50 text-lg' });
    }
  };

  return (
    <>
      <section className="text-center p-8 flex justify-center items-center mt-10 mb-8 md:mb-12 relative">
        <div
          className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]"
          aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-green-700 to-green-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="w-full md:w-1/3">
          <Typography variant="h3" color="green" className="mb-2 w">
            SIGN UP
          </Typography>

          <form
            action="#"
            className="mx-auto max-w-[24rem] text-left"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <Input
                {...register('username')}
                size="lg"
                color="green"
                label="Username"
                crossOrigin=""
              />
            </div>

            <div className="mb-6">
              <Input
                {...register('email')}
                size="lg"
                color="green"
                label="Email"
                type="email"
                crossOrigin=""
              />
            </div>
            <div className="mb-6">
              <Input
                {...register('password')}
                size="lg"
                color="green"
                crossOrigin=""
                label="Password"
                type={passwordShown ? 'text' : 'password'}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5 text-green-300" />
                    ) : (
                      <EyeOffIcon className="h-5 w-5 text-green-300" />
                    )}
                  </i>
                }
              />
            </div>
            <Button
              size="md"
              className="mt-6 text-base"
              fullWidth
              type="submit">
              sign up
            </Button>

            <Typography
              variant="small"
              className="!mt-4 text-center  font-semibold text-green-500">
              I have an account!
              <Link
                href="/login"
                className="font-semibold border-b-2 border-green-300">
                Login Now
              </Link>
            </Typography>
          </form>
        </div>
        <Image
          src="/register.svg"
          width={700}
          height={700}
          alt="login image"
          className="hidden md:block"
        />
      </section>
    </>
  );
};

export default RegisterPage;
