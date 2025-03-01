export const UserResponse = ({ message }: { message: string }) => {
  return (
    <div
      className="whitespace-pre-wrap rounded-2xl 
    text-base px-4 py-5 max-w-[50%] break-words 
    bg-[#101524] text-white"
    >
      {message}
    </div>
  );
};
