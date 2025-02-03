import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
}

const PreviewModal = ({ isOpen, onClose, content, title }: PreviewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto flex-1 p-6 bg-white rounded-lg">
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap font-serif text-base">
              {content}
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModal;