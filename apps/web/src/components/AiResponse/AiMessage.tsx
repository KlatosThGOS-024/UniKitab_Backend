export const AiResponse = ({ message }: { message: string }) => {
  return (
    <div
      className="h-fit  max-w-[80%] mt-[48px] 
    whitespace-pre-wrap bg-lightBlue2 px-5 py-3 
    text-base leading-10 break-words rounded-2xl
     bg-[#101524] text-white"
    >
      {message}
    </div>
  );
};
