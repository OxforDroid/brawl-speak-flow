export function CardSkeleton() {
  return (
    <div className="h-[100dvh] w-full flex items-center justify-center px-4 pt-4 pb-28">
      <div className="w-full max-w-md aspect-[3/4.6] rounded-[2rem] skeleton" />
    </div>
  );
}
