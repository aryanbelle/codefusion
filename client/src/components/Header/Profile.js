import React from 'react'
import { Image, Popup } from 'semantic-ui-react'
import File from './elliot.jpg'



function Profile({ data }) {
    const users = [
        {
            name: data,
            bio: '',
            avatar: File,
        }
    ]
    return <>
        {
            users.map((user) => (
                <Popup
                    style={{
                        alignItems: 'right'
                    }}
                    content={user.bio}
                    key={user.name}
                    header={user.name}
                    trigger={<Image src={user.avatar} avatar />}
                />
            ))
        }
    </>
}

export default Profile