import { configureStore, createSlice  } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'saldo',
  initialState: { balance: 1000},
  reducers: {
    deposito: (state, action) => { state.balance += action.payload; },
    levantamento: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      } else {
      console.log("Saldo insuficiente para o levantamento.");
      }
    }
  }
})

const store = configureStore({ reducer: balanceSlice.reducer });

export const { deposito, levantamento } = balanceSlice.actions;

export default store;
