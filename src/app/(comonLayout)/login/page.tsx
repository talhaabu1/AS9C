'use client';

import userLogin from '@/service/action/userLogin';
import { Button, Input, Typography } from '@material-tailwind/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useLocalStorage } from 'usehooks-ts';

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [value, setValue, removeValue] = useLocalStorage('token', '');
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setLoading(true);
    const res = await userLogin(data);
    if (res?.success) {
      toast(res?.message, {
        className: 'text-green-500 bg-green-50 text-lg',
      });
      setLoading(false);
      reset();
      router.push('/');
      router.refresh();
      setValue(res?.data?.token);
    } else {
      setLoading(false);
      toast(res?.message, { className: 'text-green-500 bg-green-50 text-lg' });
    }
  };

  return (
    <>
      <section className="text-center p-8 flex justify-center items-center mt-10 mb-8 md:mb-24 relative">
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
        <Image
          src="/login.svg"
          width={800}
          height={800}
          alt="login image"
          className="hidden md:block"
        />
        <div className="w-full md:w-1/3">
          <Typography variant="h3" color="green" className="mb-2 w">
            SIGN IN
          </Typography>

          <form
            className="mx-auto max-w-[24rem] text-left"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <Input
                {...register('userNameOrEmail', {
                  required: 'This field is required',
                })}
                color="green"
                size="lg"
                label="Username Or Email"
                crossOrigin=""
              />
              {errors.userNameOrEmail && (
                <p className="text-red-400 mt-1">
                  {errors.userNameOrEmail.message as string}
                </p>
              )}
            </div>
            <div className="mb-6">
              <Input
                {...register('password', {
                  required: 'This field is required',
                })}
                color="green"
                size="lg"
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
              {errors.password && (
                <p role="alert" className="text-red-400 mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>
            <Button
              type="submit"
              size="md"
              className="mt-6 text-base"
              fullWidth
              loading={isLoading}>
              sign in
            </Button>

            <Typography
              variant="small"
              className="!mt-4 text-center  font-semibold text-green-500">
              Not registered?
              <Link
                href="/register"
                className="font-semibold border-b-2 border-green-300">
                Create account
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
