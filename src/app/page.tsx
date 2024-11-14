import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
          <CardDescription>
            계정 정보를 입력하여 로그인해주세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input 
              id="email" 
              placeholder="name@example.com" 
              type="email" 
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="rounded border-gray-300"/>
            <label htmlFor="remember" className="text-sm text-gray-500">
              로그인 상태 유지
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full">로그인</Button>
          <div className="flex justify-between w-full text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              비밀번호 찾기
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              회원가입
            </a>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}
