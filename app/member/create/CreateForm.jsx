"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const newMember = { title, name, body }

        const res = await fetch('http://localhost:3000/api/tickets', {
            method :'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newMember)
        })

        if(res.status === 201){
            router.refresh()
            router.push('/member')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Name:</span>
                <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}
