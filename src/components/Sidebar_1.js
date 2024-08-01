import { items } from "../data/data";
import styles from "../styles/Sidebar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Sidebar=({setSelectedUser})=>{
//     const [name, setName] = useState("");
//   const [isSearch, setIsSearch] = useState(false);
//   const [activeItemId, setActiveItemId] = useState(null);

//   const handlerSearch = (e) => {
//     setIsSearch(true);
//     setName(e.target.value);
//   };

//   const serItems = items.filter((itm) =>
//     itm.name.toLowerCase().startsWith(name.toLowerCase())
//   );

//   const handlerList = (itemId) => {
//     setActiveItemId(itemId);
//   };

//   return (
//     <>
//       <div className={styles.searchbar}>
//         <div>
//           <button>
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </button>
//           <input
//             placeholder="search for conversation"
//             onChange={handlerSearch}
//           />
//           <button className="search-button">
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//         </div>
//       </div>
//       <div className={styles.conversationContainer}>
//         <div className={styles.conversation}>
//           <div>
//             <span className={styles.headingName}>CONVERSATION</span>
//           </div>
//           <div>
//             <button className="search-button">
//               <FontAwesomeIcon icon={faPlus} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <ul className={styles.scrollableList}>
//         {(isSearch ? serItems : items).map((itm) => {
//           const messages = itm.messages;
//           const isActive = itm.id === activeItemId; // Check if the item is active
//           return (
//             <li
//               key={itm.id}
//               onClick={() => handlerList(itm.id)}
//               className={isActive ? styles.activeLi : styles.nonActiveLi}
//             >
//               <div className={styles.profile}>
//                 <img src={itm.imageUrl} alt={`${itm.name}'s profile`} />
//               </div>
//               <div className={styles.middle}>
//                 <span className={styles.headingName}>{itm.name}</span>
//                 <br />
//                 <span className={styles.truncatedText}>
//                   {messages[messages.length - 1]}
//                 </span>
//               </div>
//               <div className={styles.last}>
//                 <span>{itm.price}</span>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );







    const [name, setName]= useState()
    const [isSearch, setIsSearch] = useState(false)
    // const [isActive, setIsActive] = useState(false)
    const [activeItemId, setActiveItemId] = useState(null)
    const [item, setItem] = useState()

    const handlerSearch=(e)=>{
        console.log("value is :", e.target.value)
        setIsSearch(true)
        setName(e.target.value);
    }
    const serItems = items.filter((itm)=>{
        
            return itm.name.startsWith(name);
    })
    const handlerList=(itemId, item)=>{
        console.log("item is :", item)
        // setIsActive((prev) => !prev);
        setActiveItemId(itemId)
        // setItem(item);
        setSelectedUser(item)
    }
    return(
        <>
        <div className={styles.searchbar}>
            <div> 
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <input placeholder="search for conversation"
                    onChange={handlerSearch}
                >
                </input>
                <button className="search-button">
                <FontAwesomeIcon icon={faPlus} />
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                </button>
            </div>
        
        </div>
        <div className={styles.conversationContainer}>
            <div className={styles.conversation}> 
                <div>
                    <span  className={styles.headingName}>CONVERSATION</span>
                </div>
                <div>
                    <button className="search-button">
                    <FontAwesomeIcon icon={faPlus} />
                        {/* <FontAwesomeIcon icon={faSearch} /> */}
                    </button>
                </div>
            </div>
        
        </div>
        <hr/>
        <ul className={styles.scrollableList}>
            {isSearch ? 
             
             (serItems.map((itm)=>{
                const messages = itm.messages
                const isActive = itm.id === activeItemId;
               return (
                    <li 
                    key={itm.id}
                    onClick={()=>handlerList(itm.id, itm)}
                    className={isActive ? styles.activeLi : styles.nonActiveLi}
                    >
                    <div className={styles.profile}>
                        <img src={itm.imageUrl}/>
                    </div>
                    <div className={styles.middle}>
                        <span className={styles.headingName}>{itm.name}</span>
                        <br></br>
                        <span  className={styles.truncatedText}>{messages[messages.length - 1]}</span>
                    </div>
                    <div className={styles.last}>
                        <span>{itm.price}</span>
                    </div>
                </li>)
            }
        ) )   
            
            
            : 

            (items.map((itm)=>{
                const messages = itm.messages
                const isActive = itm.id === activeItemId;
               return (
                  <li 
                        onClick={()=>handlerList(itm.id, itm)}
                        // className={ isActive ? styles.activeLi :styles.nonActiveLi}
                        className={ isActive ? styles.activeLi :styles.nonActiveLi}
                    >
                    <div className={styles.profile}>
                        <img src={itm.imageUrl}/>
                    </div>
                    <div className={styles.middle}>
                        <span className={styles.headingName}>{itm.name}</span>
                        <br></br>
                        <span  className={styles.truncatedText}>{messages[messages.length - 1]}</span>
                    </div>
                    <div className={styles.last}>
                        <span>{itm.price}</span>
                    </div>
                </li>)
            })) }
        </ul>
        </>
        )



        {/* <ul className={styles.scrollableList}>
    {items.map((itm) => {
      const messages = itm.messages;
      return (
        <li key={itm.id}> 
          <div className={styles.profile}>
            <img src={itm.imageUrl} alt="Profile" className={styles.profileImg} />
          </div>
          <div className={styles.middle}>
            <span className={styles.headingName}>{itm.name}</span>
            <br />
            <span>{messages[messages.length - 1]}</span>
          </div>
          <div className={styles.last}>
            <span>{itm.price}</span>
          </div>
        </li>
      );
    })}
  </ul> */}


    
}
export default Sidebar;