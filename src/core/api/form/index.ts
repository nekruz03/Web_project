import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IFormData {
    fio: string;
    phone: string;
    company: string;
    email: string;
    description_by_customer: string;
    request_product: {
        product_id: number;
        count: number;
    }[];
}

export interface IFormState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IFormState = {
    status: 'idle',
    error: null,
};

export const submitForm = createAsyncThunk('form/submitForm', async (formData: IFormData) => {
    const response = await axios.post('http://localhost:8000/api/v1/request_for_product/', formData);

    return response.data;
});

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export default formSlice.reducer;
