import connectDB from "@/_data/db"
import Member from "@/model/member"
import { NextResponse } from "next/server"

connectDB()

export async function POST(req, res) {
    const { title, body, name } = await req.json() 
    await Member.create({title, body, name})
    return NextResponse.json({message : "Member Created"}, {status : 201})
}

export async function GET(req, res) {
    const members = await Member.find()
    return NextResponse.json({members})
}

export async function DELETE(req, res) {
    const id = req.nextUrl.searchParams.get('id')
    await Member.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Once Deleted' }, { status: 200 })
}