import ProfilePictureEditor from "./components/ProfilePictureEditor.tsx";
import useUser from '../../hooks/useUser.ts';
import ProfileInformation from "./components/ProfileInformation.tsx";
import Loading from "../../components/layouts/Loading.tsx";
import WeeklySchedule from "./components/WeeklySchedule.tsx";

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
    <div className='w-fit flex bg-white rounded-sm shadow-sm box-border p-5'>
      <ProfilePictureEditor/>
      <ProfileInformation user={user}/>
      <WeeklySchedule/>
    </div>
  )
}