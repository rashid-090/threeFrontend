import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimeInput({ value, onChange, className }:
    { value: string, onChange: (e: any) => void, className: string }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker format='DD-MM-YYYY hh:mm A' onChange={onChange} className={className} />
            </DemoContainer>
        </LocalizationProvider>
    );
}