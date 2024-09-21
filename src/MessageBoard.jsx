import {useState} from 'react';

function MessageBoard(){

  const [messages, setMessages] = useState(['hi']);
  const [newMessage, setNewMessage] = useState("");

  function handlePostMessage(){
    setMessages(m => [...m, newMessage]);
  }

  function handleInputChange(event){
    setNewMessage(nm => nm = event.target.value);
  }


  return(
    <div>
      <input className="input-field" placeholder="Input your message!" onChange={handleInputChange}/><button onClick={handlePostMessage}>Post</button>

      <ul className="board-messages">
        {messages.map((message, index) => <li key={index}>{message}</li>)}
      </ul>
    </div>
  )

}

export default MessageBoard