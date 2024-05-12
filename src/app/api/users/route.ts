import db from '@/lib/db'

export async function GET(request: Request) {
    const { users } = db.data
    return Response.json({ users })
}