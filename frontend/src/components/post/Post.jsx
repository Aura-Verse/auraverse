import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
const Post = () => {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Username</h1>

      </div>
    </div>
  )
}

export default Post