import ProfilePictureEditor from "./components/ProfilePictureEditor.tsx";
import useUser from '../../hooks/useUser.ts';
import ProfileInformation from "./components/ProfileInformation.tsx";
import Loading from "../../components/layouts/Loading.tsx";

export default function Profile() {
  const { loading, user } = useUser();

  if (loading) {
    return (
      <div className='w-full h-full grow'>
        <Loading fullSize={false}/>
      </div>
    )
  }

  return (
    <div className='w-fit flex bg-white rounded-sm shadow-sm'>
      <ProfilePictureEditor/>
      <ProfileInformation user={user}/>
    </div>
  )
}