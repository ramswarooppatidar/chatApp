// import { useState } from "react";
// import styles from "../styles/Chatbox.module.css";

// const Chatbox = ({ selectedUser, handleSendMessage, setSelectedUser }) => {
//   const [currentMessage, setCurrentMessage] = useState(""); // Initialize with empty string

//   if (!selectedUser) {
//     return <div className={styles.header}><span>No conversation selected</span></div>;
//   }

//   const handlerInput = (e) => {
//     setCurrentMessage(e.target.value);
//   };

//   const handleClick = () => {
//     if (currentMessage.trim() === "") return; // Prevent sending empty messages

//     handleSendMessage(selectedUser.id, currentMessage);
//     setCurrentMessage(""); // Clear the input field after sending the message
//   };

//   const message = selectedUser.messages;

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <div>
//           <span>{selectedUser.name}</span>
//           <span> && CurrentUser</span>
//         </div>
//       </div>
//       <div className={styles.body}>
//         <ul>
//           {message.map((msg, index) => (
//             <li key={index}>
//               <span>{msg}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={styles.footer}>
//         <div>
//           <input
//             placeholder="Type a message"
//             value={currentMessage} // Control input value
//             onChange={handlerInput}
//           />
//         </div>
//         <div>
//           <button onClick={handleClick}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbox;








import { useState , useEffect, useRef} from "react";
import { items } from "../data/data";
import styles from "../styles/Chatbox.module.css"
// import styles from "../styles/Sidebar.module.css"
const Chatbox=({selectedUser, handleSendMessage, setSelectedUser})=>{
    const [currentMessage, setCurrentMessage] = useState("")
    const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ selectedUser?.messages]);

    if (!selectedUser) {
        return <div className={styles.header}><span>No conversation selected</span></div>;
      }
    
    const handlerInput=(e)=>{
        setCurrentMessage(e.target.value);
        // e.target.value=""
    }
    const handleClick=(message)=>{
        handleSendMessage(selectedUser.id, message)
        setCurrentMessage(""); 
        // selectedUser.messages = {...selectedUser.message, }
        
    }
   

    const message =  selectedUser.messages
    return(
        <>
        <div className={styles.container}> 
            <div  className={styles.header}>
                <div>
                    <span>{selectedUser.name}</span>
                    <span>&& CurrentUser</span>
                </div>
            </div>
            <div className={styles.body}>
                <ul>
                    { message.map((msg, index)=>{
                        return(<li key={index}>
                            <span>{msg}</span>
                        </li>
                        )
                    })}
                    {/* Empty element to scroll into view */}
                    <div ref={messagesEndRef} />
                </ul> 
            </div>
            <div className={styles.footer}>
                <div>
                
                    <input
                        placeholder="type your message"
                         onChange={handlerInput}
                            value={currentMessage}
                    />
                </div>
                <div>
                    <button onClick={()=>handleClick(currentMessage)}>
                        send
                    </button>
                </div>
            </div>           
        </div>
        
        </>
    )
}
export default Chatbox;