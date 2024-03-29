import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateInput({ value, onChange, label, max, className, format }:
    { value: string | Date, onChange: (t: any) => void, label: string, max: Date, className: string , format: string}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    format={format}
                    label={label}
                    value={value}
                    onChange={(newValue) => onChange(newValue)}
                    className={className}
                />
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default DateInput;