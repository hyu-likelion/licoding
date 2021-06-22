import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import useInput from './hooks/useInput'
import useTabs from './hooks/useTabs';
import Page from './hooks/Page';


const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2"
  }
];

const useTitle = iniitialTitle => {
  const [title, setTitle] = useState(iniitialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  // useState사용
  const [item, setItem] = useState(1);
  // const item = useState(1)[0];
  // const item = useState(1)[1];
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  //useInput
  const maxLen = value => value.length < 10; // maxLen 함수 선언
  const name = useInput("hj", maxLen); // maxLen을 args로

  const { currentItem, changeItem } = useTabs(0, content);


  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);


  const titleUpdater = useTitle("My React App...");
  setTimeout(() => { // 3초후 titleUpdater 실행
    titleUpdater("home");
  }, 3000);

  const input = useRef();
  setTimeout(() => {input.current?.focus()}, 5000)

  const useClick = onClick => {
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick); 
      }
    });
    return element;
  };
  const h1Element = useClick(sayHello);

  return (
    <div className="App">
      <div>
        <h1>Hello! {item}</h1>
        <h2>Learning hooks in React </h2>
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
      </div>
      <div>
        <h1>Hello</h1>
        <input placeholder="name" {...name} />
      </div>
      <div>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
      <br></br>
      <div>
        <div>Hi</div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
      </div>

      <div>HI</div>
      <input ref={input} placeholder="test"  />

      <h1 ref={h1Element}>Hi</h1>
      <Page/>
    </div>
  );
}

export default App;
