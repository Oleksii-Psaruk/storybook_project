type TTitleColor = "text-gray-200" | "text-gray-500" | "text-gray-900" | "text-purple-800";

type TTitleWeight = "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold";

type TTitleSize = "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl";

export interface ITitleProps {
    title: string,
    color?: TTitleColor,
    weight?: TTitleWeight,
    size?: TTitleSize
}
