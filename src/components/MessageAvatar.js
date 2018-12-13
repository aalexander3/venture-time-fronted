import React from "react"
import { Avatar, Popover } from 'antd';

const MessageAvatar = props => {
  const handleClick = event => {
    props.startNewMessage(props.conversation)
  }

  const renderAvatars = () => {
    if (props.type === 'investor') {
      return (
        <Popover content={props.conversation.attributes["start_up"].name}>
          <Avatar src={props.conversation.attributes["start_up"].logo}/>
        </Popover>
      )
    } else {
      return (
        <Popover content={props.conversation.attributes.investor.name}>
          <Avatar src={props.conversation.attributes.investor.logo}/>
        </Popover>
      )
    }
  }

  return (
    <div conversation={props.conversation} onClick={handleClick} className="message-avatar" >{renderAvatars()}</div>
  )
}

export default MessageAvatar
