"use client";
import React from "react";
import { useDragList } from "react-draglist-ipo";

const initialItems = [
  { id: 0, text: "Wahyu" },
  { id: 1, text: "Agus" },
  { id: 2, text: "Arifin" },
];

export default function App() {
  const { items, getItemProps } = useDragList({
    initialItems,
  });

  const COLOR = (n: number) => {
    switch (n) {
      case 1:
        return "bg-red-600 hover:bg-red-800"
      case 2:
        return "bg-indigo-600 hover:bg-indigo-800"
      default:
        return "bg-lime-600 hover:bg-lime-800"
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-3xl">
        <div className="text-center text-3xl font-bold">React Draglist</div>
        <div className="text-center">react-draglist-ipo</div>
        <div className="mb-6 mt-2 flex justify-center">
          <a href="https://www.npmjs.com/package/react-draglist-ipo" className="bg-rose-700 text-wrap rounded-full p-2">NPM Package</a>
        </div>
        <div>
          <ul>
            {items?.map((item: any) => (
              <li className="flex gap-4 my-2 items-center" key={item.id}>
                <button
                  className={`w-10 h-10 rounded-lg text-2xl ${COLOR(item.id)}`}
                  {...getItemProps(item.id)}
                >
                  ::
                </button>
                <span>{item?.id + 1} : {item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}