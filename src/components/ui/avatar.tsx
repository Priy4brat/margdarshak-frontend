import * as React from "react"

interface AvatarProps {
  children: React.ReactNode
  className?: string
}

export function Avatar({ children, className = "" }: AvatarProps) {
  return (
    <div className={`relative inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-200 ${className}`}>
      {children}
    </div>
  )
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({ src, alt, className = "", ...props }: AvatarImageProps) {
  return <img src={src} alt={alt || "Avatar"} className={`h-full w-full object-cover ${className}`} {...props} />
}

interface AvatarFallbackProps {
  children: React.ReactNode
  className?: string
}

export function AvatarFallback({ children, className = "" }: AvatarFallbackProps) {
  return (
    <div className={`h-full w-full flex items-center justify-center bg-gray-300 text-gray-600 font-semibold text-lg ${className}`}>
      {children}
    </div>
  )
}