import React from 'react'
import '/Users/gin/Desktop/Ipsupply/crwn-clothing/src/page/sign-in-and-sign-up pages/sign-in-and-sign-up.styles.scss'

import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-sign-up'>
             
            <SignIn />
            <SignUp />

        </div>
    )
}

export default SignInAndSignUp
