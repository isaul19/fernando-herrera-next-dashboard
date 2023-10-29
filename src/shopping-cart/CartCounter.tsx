"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrementCount,
  incrementCount,
  initCountState,
  updateCountBy,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
}

const getCounter = async () => {
  const data: CounterResponse = await fetch("http://localhost:3000/api/counter").then((res) =>
    res.json()
  );
  return data;
};

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCounter().then(({ count }) => dispatch(updateCountBy(count)));
  }, []);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(decrementCount(1))}
        >
          -1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(incrementCount(1))}
        >
          +1
        </button>
      </div>
    </>
  );
};
