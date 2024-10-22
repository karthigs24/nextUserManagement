'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/tabel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const users = useSelector((state: RootState) => state.users)
  const currentUser = useSelector((state: RootState) => state.auth.currentUser)

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>Welcome, {currentUser?.username}! Here is a list of all registered users.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}