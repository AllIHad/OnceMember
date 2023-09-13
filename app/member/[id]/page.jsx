import { notFound } from "next/navigation"

export const dynamicParams = true

// export async function generateStaticParams() {
//     const res = await fetch('http://localhost:3000/api/tickets')

//     const { members } = await res.json()

//     return members.map((member) => ({
//         id: member._id
//     }))
// }

async function getOneMember(id) {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}` , {
        next: {
            revalidate: 60 // use 0 to opt out of using cache
        }
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

export default async function MemberDetails({ params }) {
    const { id } = params
    const { member } = await getOneMember(id)

    return (
        <main>
            <nav>
                <h2>Member Details</h2>
            </nav>

            <div className="card">
                <h3>{member.title}</h3>
                <small>Created by {member.name}</small>
                <p>{member.body}</p>
            </div>
        </main>
    )
}
