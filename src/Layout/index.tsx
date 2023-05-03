import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return <div className="w-full  h-screen flex justify-center ">{children}</div>
}
