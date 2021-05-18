function sayHello(name, byeCallback){
    setTimeout(()=>{
        console.log(name+" 안녕하세요");
        byeCallback()
    },2000)
}

sayHello("Mike", function(){
    console.log("안녕히 가세요")
})