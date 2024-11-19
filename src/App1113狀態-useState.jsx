
function App() {
    // 常數=>不能變動的值
    // React執行中若要改變const值，必須使用useState方法 
    // const num = 0;

    // 定義 useState
    // const[變數名稱,變更變數的方法] = useState(初始值);
    const [num, setNum] = useState(0);

    function btnClick(){
        //修改num值
        setNum(num+5);
    }

    return (
        <>
            <h1>React狀態-useState方法</h1>
            <h2>目前值:{num}</h2>
            {/* 事件綁定 : 使用箭頭函式 */}
            <button onClick={() => {
                //num++;

                setNum(num + 1);
                //這邊不能寫num++ 
            }}>+1</button>

            {/* 事件綁定 : 呼叫函式 */}
            <button onClick={btnClick}>+5</button>
        </>
    )
}


export default App
