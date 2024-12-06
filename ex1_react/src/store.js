import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { configureStore, createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



// ex3 - Multibanco
const balanceSlice = createSlice({
  name: 'saldo',
  initialState: { balance: 1000 },
  reducers: {
    deposito: (state, action) => {
      state.balance += action.payload;
    },
    levantamento: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      } else {
        console.log('Saldo insuficiente para o levantamento.');
      }
    },
  },
});

export const { deposito, levantamento } = balanceSlice.actions;

// ex4 - Cat API
// const API_KEY = 'live_3TDC3LdCExFrC4B0Cr8XWKgvJWOdKM9RnIRNmy2av0TViFBi9mt2qMym0bKK6cae';
// const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

// export const fetchCats = createAsyncThunk(
//   'cats/fetchCats',
//   async ({ limit, page, order }, thunkAPI) => {
//     try {
//       const response = await axios.get(BASE_URL, {
//         params: { limit, page, order, api_key: API_KEY },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// const catsSlice = createSlice({
//   name: 'cats',
//   initialState: {
//     cats: [],
//     status: 'idle', // idle | loading | succeeded | failed
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCats.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCats.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.cats = action.payload;
//       })
//       .addCase(fetchCats.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// // Configuração da Store
// const store = configureStore({
//   reducer: {
//     saldo: balanceSlice.reducer,
//     cats: catsSlice.reducer,
//   },
// });


// ex5 - RTK Query
// Configuração RTK Query para o Cat API

const API_KEY = 'live_3TDC3LdCExFrC4B0Cr8XWKgvJWOdKM9RnIRNmy2av0TViFBi9mt2qMym0bKK6cae';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1' }),
  endpoints: (builder) => ({
    fetchCats: builder.query({
      query: ({ limit, page, order }) => ({
        url: 'images/search',
        params: { limit, page, order, api_key: API_KEY },
      }),
    }),
  }),
});

export const { useFetchCatsQuery } = catApi;

// Atualizar a store para incluir o reducer e middleware do RTK Query
const store = configureStore({
  reducer: {
    saldo: balanceSlice.reducer,
    [catApi.reducerPath]: catApi.reducer, // Adiciona o reducer RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware), // Adiciona o middleware RTK Query
});

export default store;
