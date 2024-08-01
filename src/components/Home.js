import Sidebar from "./Sidebar";
import styles from "../styles/Main.module.css"
import Chatbox from "./Chatbox";
import { useState } from "react";
import { items } from "../data/data";
const Home=()=>{
    const [users, setUsers] = useState(items);
    const [selectedUserId, setSelectedUserId] = useState(null)

    const handleUserSelect = (userId) => {
        setSelectedUserId(userId);
      };

    const handleSendMessage=(userId, message)=>{
        console.log("handleSendMessage  is called ", message)
        setUsers(prevUser =>
            prevUser.map(usr=>
                usr.id === userId 
                ? {...usr, messages : [...usr.messages, message]}
                : usr
            )
        )
        setSelectedUserId(userId)
        console.log("USER",users)
      }
      const selectedUser = users.find(user => user.id === selectedUserId);
    return(
        <>
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar 
                users={users}
                onSelectUser={handleUserSelect}
                />
            </div>
            <div className={styles.chatbox}>
                <Chatbox 
                    selectedUser={selectedUser}
                    handleSendMessage={handleSendMessage}
                />
            </div>
        </div>
        </>
    )
}
export default Home;