import connectDB from "@/_data/db"
import Member from "@/model/member"
import { NextResponse } from "next/server"

connectDB();

export async function GET(req, { params }) {
    const { id } = params
    const member = await Member.findOne({ _id: id })
    return NextResponse.json({ member }, { status: 200 })
}