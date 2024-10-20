import {Container,ButtonSignOut} from './profile.styles'

import { signOutUser } from "../../utils/firebase.config";


const ProfileSetting = () => {
    return (
      <Container>
        <ButtonSignOut onClick={signOutUser}>Sign Out</ButtonSignOut>
      </Container>
    );
}

export default ProfileSetting