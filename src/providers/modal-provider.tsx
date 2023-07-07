"use client";

import { useEffect, useState } from "react";

import { AddCategoryModal } from "@/components/modals/add-category-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddCategoryModal />
    </>
  );
}