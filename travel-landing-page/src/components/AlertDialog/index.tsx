"use-client";

import {
  AlertDialog as ShadCNAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Button from "../Button";

interface AlertDialogProps {
  title: string;
  description?: string;
  textButton?: string;
  textCancel?: string;
  textAction?: string;
  onOpenChange?: (open?: boolean) => void;
  onClickAction?: () => void;
  onClickCancel?: () => void;
}

const AlertDialog = ({
  title,
  description = "",
  textButton = "Confirm",
  textCancel = "Cancel",
  textAction = "Continue",
  onOpenChange,
  onClickAction,
  onClickCancel,
}: AlertDialogProps) => {
  return (
    <ShadCNAlertDialog onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild className="p-0">
        <Button variant="ghost" className="p-0 h-auto">
          {textButton}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClickCancel} className="h-10">
            {textCancel}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onClickAction} className="h-10">
            {textAction}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadCNAlertDialog>
  );
};

export default AlertDialog;
