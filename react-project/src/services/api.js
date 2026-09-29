export const getUsers = async()=>{
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("failed to fetch users")
        }
    const data = await response.json();
return data;

    } catch (error) {
        console.error("API ERROR", error)
        return []
    }


}

export const sendChatMessage=async(message, messages)=>{
    const response = await fetch("http://localhost:4000/api/chat",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: message,
            messages: messages,

        })
    });

    const data = await response.json()
    return data;
}