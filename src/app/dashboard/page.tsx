import PrivateRoute from '@/components/PrivateRoute'
import Dashboard from '@/components/Dashboard'

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  )
}