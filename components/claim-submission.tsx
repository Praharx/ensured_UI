"use client"

import { PlusCircle } from 'lucide-react'
import { Card } from '@radix-ui/themes'
import React from 'react'
import { CardContent } from './ui/card'
import { Button } from 'react-day-picker'
import { FileText } from 'lucide-react'
import { Input } from './ui/input'

function ClaimSubmission() {
  return (
    
        <Card className="text-center p-6 -mt-20 flex items-center justify-center min-h-screen">
          <CardContent>
            <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Policies upto claim yet.</h2>
            <p className="text-muted-foreground mb-4">
              Create your claim submission to get the insurance
            </p>
            <input type="file"/>
          </CardContent>
        </Card>
    )}

export default ClaimSubmission
