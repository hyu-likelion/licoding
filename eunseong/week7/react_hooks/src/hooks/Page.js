import React from "react";
import { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") { 
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => { 
      if (window.confirm(message)) { 
        onConfirm();
      } else { 
        onCancel();
      }
    };
    return confirmAction; 
};

const usePreventLeave = () => {
    const listener = event => {
      event.preventDefault();
      event.returnValue = "";
    };
    
    const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload 이벤트 리스너로 listener 지정
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener); // beforeunload event 제거
    
      return { enablePrevent, disablePrevent }; 
};
  
const useBeforeLeave = onBefore => {
    const handle = (event) => {
        const {clientY} = event;
        if (clientY <= 0) { // 밖으로 나가는 종류가 2가지임 위로 아래로, 위로만 나가는 것을 인식하고 싶을 때
          onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave", handle)
        return () => document.removeEventListener("mouseleave", handle);
    }, []); 
    // 유효성 검사
    if(!onBefore || typeof onBefore !== "function") {
        return;
    };

};

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [duration, delay]);
    
    if (typeof duration !== "number" || typeof delay !== "number"){
      return;
    };
    return {ref: element, style: {opacity:0}};
}

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
      if (typeof onChange === "function"){
        onChange(navigator.onLine)
      }
      setStatus(navigator.onLine);
    }
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      }
    }, [status]);
    return status;
}

const useScroll = () => {
    const [state, setState] = useState({
        x: 0, y: 0
    });

    const onScroll = () => {
        setState({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll); 
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
};

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
      if(callback && typeof callback === "function") {
        callback(isFull);
      };
    };
  
    const triggerFull = () => {
      if(element.current) {
        if(element.current.requestFullscreen){
          element.current.requestFullscreen();
        } else if(element.current.mozRequestFullscreen) {
          element.current.mozRequestFullscreen();
        } else if(element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if(element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    };
  
    const exitFull = () => {
      if (document.fullscreen === true) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullscreen) {
          document.mozCancelFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        runCb(false);
      };
    };
  
    return {element, triggerFull, exitFull };
  };


const Page = () => {
    
    const deleteWorld = () => console.log("delete");
    const abortWorld = () => console.log("Aborted"); 

    const conformDelete = useConfirm("Are you sure?", deleteWorld, abortWorld);

    const { enablePrevent, disablePrevent } = usePreventLeave();

    const beforeLeave = () => console.log("Please don't leave");
    useBeforeLeave(beforeLeave);

    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    const hanldeNetworkChange = online => {
        console.log(online ? "Online" : "Offline");
    };
    const online = useNetwork(hanldeNetworkChange);

    const { y } = useScroll();

    const onFullS = (isFull) => {
        console.log(isFull ? "we are full" : "We are small");
    }
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);

    return (
        <div style={{ height: "200vh" }}>
            
            <h1>Hello</h1>
            <button onClick={conformDelete} >Delete the world</button>
        
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button> 
        

            <div>
                <h1 {...fadeInH1}>Hello</h1>
                <p {...fadeInP}>check the opacity and animations with hooks</p>
            </div>

            <h1>{online ? "Online" : "Offline"}</h1>

            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
                Scroll Test
            </h1>

            <div ref={element}>
                <img alt="image" src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>

        </div>
    );
};

  
export default Page;