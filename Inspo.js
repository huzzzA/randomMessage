const randomMessage = () => {
    let messages = ['youre beautiful', 'youre amazing', 'youre strong']

    const randomGenerator = Math.floor(Math.random() * messages.length);
    if (randomGenerator === 0){
        console.log(messages[0]);
    }else if (randomGenerator === 1){
        console.log(messages[1]);
    }else if (randomGenerator === 2){
        console.log(messages[2]);
    }
   

    
}

console.log(randomMessage());
