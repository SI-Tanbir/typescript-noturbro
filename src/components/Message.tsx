


import React from 'react'


interface UserMessage {
    name:string 
    message:string


}
const Message :React.FC<UserMessage> = ({name,message}) => {
  return (



    <div>


        <p> {name},{message}</p>


        
        
        </div>
  )
}

export default Message