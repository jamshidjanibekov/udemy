"use client"

import { useState } from "react"
import { UploadButton } from "@uploadthing/react"
import type { OurFileRouter } from "@/app/api/uploadthing/core"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { toast } from "sonner"
import { ImageDown, Trash2 } from "lucide-react"

type Props = {
  value?: string
  onChange: (url: string) => void
  disabled?: boolean
}

export default function PreviewImageUploader({ value, onChange, disabled }: Props) {
  const [isUploading, setIsUploading] = useState(false)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Preview image<span className="text-red-500">*</span>
      </label>

      {value ? (
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-28 overflow-hidden rounded-md border">
            <Image src={value} alt="preview" fill className="object-cover" />
          </div>
          <Button
            type="button"
            variant="destructive"
            onClick={() => onChange("")}
            disabled={disabled || isUploading}
          >
            Remove
            <Trash2 className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div>
          <UploadButton<OurFileRouter>
            endpoint="imageUploader"
            disabled={disabled}
            appearance={{
              button: "bg-secondary hover:bg-secondary/80 text-foreground border border-input",
              container: "ut-container",
              allowedContent: "text-xs text-muted-foreground",
            }}
            onUploadBegin={() => {
              setIsUploading(true)
              toast.info("Uploading...")
            }}
            onClientUploadComplete={(res) => {
              setIsUploading(false)
              const url = res?.[0]?.url
              if (url) {
                onChange(url)
                toast.success("Successfully uploaded!")
              } else {
                toast.error("Upload failed: no URL returned")
              }
            }}
            onUploadError={(error) => {
              setIsUploading(false)
              toast.error(error?.message ?? "Something went wrong!")
            }}
          />
        </div>
      )}
    </div>
  )
}
