"use client";

import * as React from "react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Icons } from "~/components/Icons";
import { useTranslation } from "react-i18next";
import { api } from "~/trpc/react";
import { useToast } from "~/components/ui/use-toast";

interface MenuOperationProps {
  menuId: string;
}

export function MenuOperations({ menuId: menuId }: MenuOperationProps) {
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
  const { mutateAsync, isLoading } = api.menus.deleteMenu.useMutation();
  const { toast } = useToast();
  const { t } = useTranslation();
  const handleDeleteMenu = async () => {
    await mutateAsync({ menuId });
    setShowDeleteAlert(false);
    toast({
      title: t("menuOperations.menuDeleted"),
      description: t("menuOperations.menuDeletedDescription"),
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
          <Icons.ellipsis className="h-4 w-4" />
          <span className="sr-only">{t("menuOperations.open")}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href={`/edit/${menuId}`} className="flex w-full">
              {t("menuOperations.editMenu")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-destructive focus:text-destructive"
            onSelect={() => setShowDeleteAlert(true)}
          >
            {t("menuOperations.deleteMenu")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {t("menuOperations.areYouSureYouWantToDeleteThisMenu")}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {t("menuOperations.itCannotBeUndone")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("menuOperations.cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleDeleteMenu()}
              className="bg-red-600 focus:ring-red-600"
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.trash className="mr-2 h-4 w-4" />
              )}
              <span>{t("menuOperations.delete")}</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
