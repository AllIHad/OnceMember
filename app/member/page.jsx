import { Suspense } from "react"
import MemberList from "./MemberList"

import Loading from "../loading"

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Twice</h2>
          <p><small>List of Members.</small></p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <MemberList />
      </Suspense>

    </main>
  )
}