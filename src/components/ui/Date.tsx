import {
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const CustomizeDate = ({
  date,
  setDate,
}: {
  date: any;
  setDate: Dispatch<SetStateAction<undefined>>;
}) => {
  return (
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
            onSelect={setDate as any}
            showOutsideDays
            className="border-0 font-main"
            classNames={{
              caption: 'flex justify-center py-2 mb-4 relative items-center',
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
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomizeDate;
