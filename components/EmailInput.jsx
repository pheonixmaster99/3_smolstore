'use client'

import { useState } from "react"

export default function EmailInput() {
    const [email, setEmail ] = useState('')

    async function handleAddSubscriber() {
        try {
            // write the post fetch request send off the email to whatever service it is that you use to build up your email list. 
        } catch(err) {
            console.log('Failed to add subscriber: ', err.message)
        }
    }

    return(
        <div className="sign-up">
            <input value={email} onChange={(e) => {
                setEmail(e.target.value) // ties the text inside the input to the state
            }} placeholder="Email address..."/>
            <button handleAddSubscriber={handleAddSubscriber} className="button-card">Sign Up</button>
        </div>
    )
}