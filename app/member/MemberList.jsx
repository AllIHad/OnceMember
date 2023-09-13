import Link from "next/link"

async function getMembers() {
  const res = await fetch('http://localhost:3000/api/tickets', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function MemberList() {

  const { members } = await getMembers()
  return (
    <>
      {members.map(member => (
        <div key={member.id} className='card my-5'>
          <Link href={`/member/${member._id}`}>
            <h3>{member.title}</h3>
            <p>Written By <span className="font-bold">{member.name}</span></p>
            <p>{member.body.slice(0, 200)}...</p>
          </Link>
        </div>
      ))}
    </>
  )
}
