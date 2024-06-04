import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";


export type Product = {
    id: string;
    price: string;
    spec: {
        cpu: string;
        gen: number;
        ram: string;
        hdd: string;
    };
}

const initialState: Product[] = [
    {
        id: "1",
        price: '25000',
        spec: {
            cpu: 'i3',
            gen: 13,
            ram: '8 GB DDR4',
            hdd: '1TB'
        }
    }
]

const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    // reducers: {
    //     addLaptop: (state, action) => {
    //         state.push(action.payload)
    //     },
    reducers: {
        addLaptop: {
            reducer: (state, action: PayloadAction<Product>) => {
                state.push(action.payload)
            },
            prepare: (price: string, cpu: string, gen: number, ram: string, hdd: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        price,
                        spec: {
                            cpu,
                            gen,
                            ram,
                            hdd,
                        }
                    }
                }
            }
        }
    }
})

export const laptopSliceSelector = (store: any) => store.laptopSlice;
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;