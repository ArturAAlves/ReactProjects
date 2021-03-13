import React from "react"
import { ChatEngine } from "react-chat-engine"
import "./scss/app.css"
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/loginForm"

const App = () => {

    if (!localStorage.getItem("username")) {
        return <LoginForm />
    }
    return (
        <div>
            <ChatEngine
                // privateKey="158cff28-956c-4a93-8dbb-6f271eadba31"
                height="100vh"
                projectID="3498eb6b-f805-4713-a030-a8dd8882ba64"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                // userName="AAlves"
                // userSecret="123123"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )



}

export default App