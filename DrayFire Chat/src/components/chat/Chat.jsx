import "./chat.css"
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [chat, setChat] = useState();
    const [text, setText] = useState("");
    const { chatId } = useChatStore();

    const endRef = useRef(null)
    useEffect(()=>{
    endRef.current?.scrollIntoView({ behavior:"smooth" });
    },[]);

    useEffect(()=>{
      const unSub = onSnapshot(doc(db,"chats", chatId), (res)=>{
         setChat(res.data())
      })

      return () =>{
        unSub();
      }
    },[chatId])

    const handleEmoji = e =>{
        setText((prev) => prev + e.emoji);
        setOpen(false)
    };

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>This user doesen't has an description</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Messaggio di prova giorno 17/08/2024 ore 19:58</p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Messaggio di prova giorno 17/08/2024 ore 19:58</p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="message own">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>Messaggio di prova giorno 17/08/2024 ore 19:58</p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>
            <div ref={endRef}></div>
            <div className="bottom">
                <div className="icons">
                    <img src="img.png" alt="" />
                    <img src="camera.png" alt="" />
                    <img src="mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." onChange={e=>setText(e.target.value)} value={text}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
                    <div className="picker"><EmojiPicker open={open} onEmojiClick={handleEmoji}/></div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}
export default Chat