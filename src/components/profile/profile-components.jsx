import { useState } from "react";

import { useGetUsersInfo } from "../../helpers/get-users-info";

import ProfileSetting from "../../components/profile-setting/profile";
import { ProfileContainer, ImageCon } from "./profile.styles";

import {user} from '../../assets'

const Profile = () => {
  const [profile, setProfile] = useState(false);
  const { photoURL, displayName } = useGetUsersInfo();

  const handlerClicked = () => {
    setProfile(!profile);
  };

  return (
    <ProfileContainer>
      <ImageCon
        src={photoURL || user}
        alt={displayName}
        onClick={handlerClicked}
      />
      {profile && <ProfileSetting />}
    </ProfileContainer>
  );
};

export default Profile;
