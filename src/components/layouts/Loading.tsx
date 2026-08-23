import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className='flex w-full h-dvh justify-center items-center'>
      <ClipLoader size='50'/>
    </div>
  )
}