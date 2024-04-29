import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';



interface CounterState {
    value: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: 0,
  } satisfies CounterState as CounterState

export const counterSlice = createSlice ({
    name : 'counter',
    initialState,
    reducers: {
      INCREMENT : (state) => {
        state.value += 1
      },
      DECREMENT : (state) => {
        state.value -= 1
      },
      icrementByAmount : (state, action : PayloadAction< { operation: string, value: number}>) => {
        switch (action.payload.operation) {
          case 'addition':
          state.value += action.payload.value;
          break;
          case 'subtraction':
            state.value -= action.payload.value;
          break;
          default:
            break;
        }
      }
    }
})

export const {INCREMENT, DECREMENT, icrementByAmount} = counterSlice.actions
export const selectCount = (state: RootState) => state.value


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const store = createStore(counterSlice.reducer);

export default counterSlice.reducer