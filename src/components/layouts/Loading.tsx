import { ClipLoader } from "react-spinners";

export default function Loading({fullSize}: {fullSize: boolean}) {
  return (
    <div className={`flex justify-center items-center ${fullSize ? 'w-full h-dvh' : 'w-full h-full'}`}>
      <ClipLoader size='50'/>
    </div>
  )
}