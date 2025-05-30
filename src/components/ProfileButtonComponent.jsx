export function ProfileButtonComponent({ children }) {
  return (
    <>
      <button className="bg-neutral-700 rounded-2xl w-full h-14 font-inter font-bold text-neutral-50 hover:scale-105 hover:bg-lime-400 text-xl mt-5 last:mb-4 active:bg-lime-400 active:text-neutral-900">
        {children}
      </button>
    </>
  );
}
