'use client';

import React from 'react';

// @material-tailwind/react
import {
  Input,
  Typography,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
  Textarea,
  Button,
  Spinner,
} from '@material-tailwind/react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useGetAllCategoriesQuery } from '@/redux/categoryApi';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { getUserInfo } from '@/service/auth.service';
import { imageUpload } from '@/service/action/imageUpload';
import { useCreateLostItemMutation } from '@/redux/lostItemApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { TErrorResponse } from '@/types';

function LostItemPage() {
  const [date, setDate] = React.useState<Date>();
  const router = useRouter();
  const { data, isLoading } = useGetAllCategoriesQuery(undefined);
  const [crateLostItem, { isLoading: lostItemL }] = useCreateLostItemMutation();
  const getUserData = getUserInfo();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full  h-[67vh]">
        <Spinner color="green" className="size-16 " />
      </div>
    );
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    // const modifyObject = { ...data, ...data.image[0], userId: getUserData.id };
    const { url } = await imageUpload(data.image[0]);

    const modifyObject = { ...data, image: url, userId: getUserData.id };

    const { data: res, error } = await crateLostItem(modifyObject);

    if (res?.success) {
      toast(res?.message, {
        className: 'text-green-500 bg-green-50 text-lg',
      });
      reset();
      router.refresh();
    } else {
      toast((error as TErrorResponse)?.data?.message, {
        className: 'text-green-500 bg-green-50 text-lg font-main',
      });
    }
  };

  return (
    <section className="px-8 py-20 container mx-auto">
      <Typography variant="h4" color="green" className="font-main">
        Lost Item Information
      </Typography>
      <Typography variant="small" className="text-[#006400] font-normal mt-1">
        Lost Item your information below.
      </Typography>
      <form className="flex flex-col mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="green"
              className="mb-2 font-medium text-lg">
              Item Category
            </Typography>
            <Select
              {...register('categoryId', {
                required: 'This field is required',
              })}
              onChange={(value) => {
                setValue('categoryId', value);
              }}
              size="lg"
              defaultValue="sle"
              labelProps={{
                className: 'hidden',
              }}
              menuProps={{
                className:
                  'text-base font-semibold text-green-500 bg-[#f5f5f5]',
              }}
              className="w-full text-green-500 placeholder:opacity-100 !border-2 !border-green-500   focus:shadow-lg focus:shadow-green-200/35 font-semibold"
              color="green">
              {data.data.map((item: any) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
            {errors.categoryId && (
              <p className="text-red-400 mt-1">
                {errors.categoryId.message as string}
              </p>
            )}
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="green"
              className="mb-2 font-medium text-lg">
              Location
            </Typography>
            <Input
              {...register('location', { required: 'This field is required' })}
              crossOrigin=""
              size="lg"
              labelProps={{
                className: 'hidden',
              }}
              className="w-full text-green-500 placeholder:opacity-100 !border-2 !border-green-500   focus:shadow-lg focus:shadow-green-200/35 font-semibold"
              color="green"
            />
            {errors.location && (
              <p className="text-red-400 mt-1">
                {errors.location.message as string}
              </p>
            )}
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="green"
              className="mb-2 font-medium text-lg">
              Date
            </Typography>
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  {...register('lostDate', {
                    required: 'This field is required',
                  })}
                  crossOrigin=""
                  size="lg"
                  onChange={() => null}
                  value={date ? format(date, 'PPP') : ''}
                  labelProps={{
                    className: 'hidden',
                  }}
                  className="w-full text-green-500 placeholder:opacity-100 !border-2 !border-green-500   focus:shadow-lg focus:shadow-green-200/35 font-semibold"
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={(date) => {
                    setDate(date);
                    setValue('lostDate', date);
                  }}
                  showOutsideDays
                  className="border-0 font-main"
                  classNames={{
                    caption:
                      'flex justify-center py-2 mb-4 relative items-center',
                    caption_label: 'text-sm !font-medium text-gray-900',
                    nav: 'flex items-center',
                    nav_button:
                      'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
                    nav_button_previous: 'absolute left-1.5',
                    nav_button_next: 'absolute right-1.5',
                    table: 'w-full border-collapse',
                    head_row: 'flex !font-medium text-gray-900',
                    head_cell: 'm-0.5 w-9 !font-normal text-sm',
                    row: 'flex w-full mt-2',
                    cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                    day: 'h-9 w-9 p-0 !font-normal',
                    day_range_end: 'day-range-end',
                    day_selected:
                      'rounded-md bg-green-500 text-white  hover:text-white focus:bg-green-500 focus:text-white',
                    day_today: 'rounded-md bg-gray-200 text-gray-900',
                    day_outside:
                      'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
                    day_disabled: 'text-gray-500 opacity-50',
                    day_hidden: 'invisible',
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.lostDate && (
              <p className="text-red-400 mt-1">
                {errors.lostDate.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="green"
              className="mb-2 font-medium text-lg">
              Contact Number
            </Typography>
            <Input
              {...register('number', {
                required: 'This field is required',
                pattern: {
                  value: /^01\d{9}$/,
                  message:
                    'Phone number must start with "01" and be 11 digits long',
                },
              })}
              type="tel"
              crossOrigin=""
              size="lg"
              labelProps={{
                className: 'hidden',
              }}
              className="w-full text-green-500 placeholder:opacity-100 !border-2 !border-green-500   focus:shadow-lg focus:shadow-green-200/35 font-semibold"
            />
            {errors.number && (
              <p className="text-red-400 mt-1">
                {errors.number.message as string}
              </p>
            )}
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="green"
              className="mb-2 font-semibold text-lg">
              Lost Item Image
            </Typography>
            <label
              htmlFor="dropzone-file"
              className="flex flex-row justify-center items-center space-x-2 w-full  p-1 -center  border-2 border-green-300 border-dashed cursor-pointer rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-green-400">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <p className=" text-green-500 font-medium ">Image</p>
              <input
                {...register('image', { required: 'This field is required' })}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
            {errors.image && (
              <p className="text-red-400 mt-1">
                {errors.image.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <Typography
              variant="small"
              color="green"
              className="mb-2 font-semibold text-lg">
              Description
            </Typography>
            <Textarea
              {...register('description', {
                required: 'This field is required',
              })}
              labelProps={{
                className: 'hidden',
              }}
              label="Message"
              className="w-full text-green-500 placeholder:opacity-100 !border-2 !border-green-500   focus:shadow-lg focus:shadow-green-200/35 font-semibold"
            />
            {errors.description && (
              <p className="text-red-400 mt-1">
                {errors.description.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-end mb-3">
          <Button
            loading={lostItemL}
            className="font-semibold font-main"
            type="submit">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}

export default LostItemPage;
