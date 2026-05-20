"use client";

import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type VideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  youtubeId: string;
};

export default function VideoModal({
  open,
  onOpenChange,
  youtubeId,
}: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl border-0 bg-black p-0 overflow-hidden">
        <div className="relative aspect-video w-full">
          {open && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title="AutoSOP video overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}