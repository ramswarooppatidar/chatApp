import { items } from "../data/data";
import styles from "../styles/Sidebar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Sidebar=({setSelectedUser, users, onSelectUser})=>{
    // const [users, setUsers] = useState(items)
    const [name, setName] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [activeItemId, setActiveItemId] = useState(null);
  //
  const [convUserId, setConvUserId] = useState(null);

  const handlerSearch = (e) => {
    setIsSearch(true);
    setName(e.target.value);
  };

  const serItems = users.filter((itm) =>
    itm.name.toLowerCase().startsWith(name.toLowerCase())
  );

  const handlerList = (itemId, item) => {
    setActiveItemId(itemId);
    // setSelectedUser(item)
    setConvUserId(itemId)
    // onSelectUser(itemId)
  };
  const handlerConversion=()=>{
    onSelectUser(convUserId)
  }
  

  return (
    <>
      <div className={styles.searchbar}>
        <div>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            placeholder="search for conversation"
            onChange={handlerSearch}
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className={styles.conversationContainer}>
        <div className={styles.conversation}>
          <div>
            <span className={styles.headingName}>CONVERSATION</span>
          </div>
          <div>
            <button className="search-button"
            onClick={handlerConversion}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <ul className={styles.scrollableList}>
        {(isSearch ? serItems : users).map((itm) => {
          const messages = itm.messages;
          const isActive = itm.id === activeItemId; // Check if the item is active
          return (
            <li
              key={itm.id}
              onClick={() => handlerList(itm.id, itm)}
              className={isActive ? styles.activeLi : styles.nonActiveLi}
            >
              <div className={styles.profile}>
                <img src={itm.imageUrl} alt={`${itm.name}'s profile`} />
              </div>
              <div className={styles.middle}>
                <span className={styles.headingName}>{itm.name}</span>
                <br />
                <span className={styles.truncatedText}>
                  {messages[messages.length - 1]}
                </span>
              </div>
              <div className={styles.last}>
                <span>{itm.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
    
}
export default Sidebar;