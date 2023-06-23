"use client";

// import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  // const router = useRouter();
  // const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className,
      )}
    >
      Hello header - {children}
    </div>
  );
}
