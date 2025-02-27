import React from 'react'

interface ResponseMessagesProps {
    messages: {
        text: string
        sender: boolean
    }[]
}

export const ResponseMessages = ({messages}:ResponseMessagesProps) => {
  return (


    <div className='flex flex-col gap-2 w-full'>
    {messages.map((message, index) => (
      <div
        key={index}
        className={`flex ${
          message.sender ? 'justify-end' : 'justify-start'
        }`}
      >
        <div
          className={`text-[13px] font-light w-[90%] rounded-lg h-auto p-2 ${
            message.sender
              ? 'bg-blue-100 text-right'
              : 'bg-white text-left'
          }`}
        >
          <div className='flex items-center gap-2'>
            {!message.sender && (
              <span className='w-2 h-2 bg-green-500 rounded-full'></span>
            )}
            {message.text}
            {message.sender && (
              <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
