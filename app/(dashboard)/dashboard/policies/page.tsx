'use client'


import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';

export default function PoliciesPage() {
  const [policies, setPolicies] = useState([
    { id: 1, title: 'Policy 1', content: 'Content 1', claimAmount: '$1000' },
    { id: 2, title: 'Policy 2', content: 'Content 2', claimAmount: '$2000' },
    // Add more policies as needed
  ])

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {policies.map((policy) => (
          <Card key={policy.id} className="mb-8">
            <CardHeader>
              <CardTitle>{policy.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{policy.content}</p>
              <p>Claim Amount: {policy.claimAmount}</p>
            </CardContent>
            <CardFooter>
              {/* Add footer content as needed */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
