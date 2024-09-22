import {useState} from 'react';
import './MessageBoard.css';

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
    <div className="message-board">
      <div clasName="input-container">
      <input className="input-field" placeholder="Input your message!" onChange={handleInputChange}/>
      <button className="post-button" onClick={handlePostMessage}>Post</button>
      </div>

      <ul className="board-messages">
        {messages.map((message, index) => <li key={index} className="message-item">{message}</li>)}
      </ul>
    </div>
  )

}

export default MessageBoard