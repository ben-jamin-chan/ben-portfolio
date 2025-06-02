import { useToast } from "@/hooks/use-toast"
import { createPortal } from "react-dom"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  // Create portal container if it doesn't exist
  if (typeof document !== 'undefined') {
    let toastContainer = document.getElementById('toast-container')
    if (!toastContainer) {
      toastContainer = document.createElement('div')
      toastContainer.id = 'toast-container'
      toastContainer.style.position = 'fixed'
      toastContainer.style.top = '0'
      toastContainer.style.left = '0'
      toastContainer.style.right = '0'
      toastContainer.style.bottom = '0'
      toastContainer.style.pointerEvents = 'none'
      toastContainer.style.zIndex = '9999'
      document.body.appendChild(toastContainer)
    }
  }

  const toastContent = (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )

  // Use portal to render outside main component tree
  if (typeof document !== 'undefined') {
    const toastContainer = document.getElementById('toast-container')
    if (toastContainer) {
      return createPortal(toastContent, toastContainer)
    }
  }

  // Fallback for SSR
  return toastContent
}
