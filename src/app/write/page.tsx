'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Editor from "@/components/Editor"

export default function WritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async () => {
    // API 호출 로직
    const post = {
      title,
      content,
      createdAt: new Date().toISOString()
    }
    console.log('Submitting:', post)
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>새 글 작성</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">제목</label>
            <Input 
              placeholder="제목을 입력하세요" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">내용</label>
            <Editor 
              content={content}
              onChange={setContent}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">임시저장</Button>
            <Button onClick={handleSubmit}>저장</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
