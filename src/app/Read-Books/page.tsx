"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/BookType";
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: BookType) => ({
    name:
      book.bookName.length > 15
        ? `${book.bookName.slice(0, 15)}...`
        : book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="container mx-auto my-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Your Read Books</h2>

        <p className="mt-1 text-sm text-gray-500">
          Number of pages in each book you&apos;ve read
        </p>
      </div>

      {readBooks.length === 0 ? (
        <div className="flex min-h-75 items-center justify-center">
          <p className="text-gray-500">You haven&apos;t added any books yet.</p>
        </div>
      ) : (
        <div className="w-full overflow-x-auto flex justify-center items-center">
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
            margin={{
              top: 30,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip
              cursor={{ fillOpacity: 0.1 }}
              formatter={(value) => [`${value} pages`, "Pages"]}
            />

            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />

            <YAxis
              width="auto"
              tick={{ fontSize: 12 }}
              label={{
                value: "Pages",
                angle: -90,
                position: "insideLeft",
              }}
            />

            <Bar dataKey="pages" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
          </BarChart>
        </div>
      )}
    </div>
  );
};

export default ReadBooks;
