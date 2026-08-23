import { useMatches } from "@tanstack/react-router";

export default function Header() {
  const matches = useMatches();
  const currentMatch = matches.at(-1);

  const title = currentMatch?.staticData?.title ?? 'Panel';
  const subtitle = currentMatch?.staticData?.subtitle ?? '';

  return (
    <div className='py-5 px-6 w-full gap-6 bg-gray-50 text-[#011627] self-baseline shadow-md'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center text-3xl font-bold'>
          {title}
        </div>
        <div className='text-xl'>
          {
            subtitle.split('/').join(' / ')
          }
        </div>
      </div>
    </div>
  )
}