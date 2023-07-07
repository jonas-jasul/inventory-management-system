"use client"

import { Button } from '@/components/ui/button'
import { useCategoryModal } from "@/hooks/use-category-modal";
import { useEffect } from "react";
import { BsPlusLg } from 'react-icons/bs'

export function AddCategoryButton() {
  const onOpen = useCategoryModal((state) => state.onOpen);
  const isOpen = useCategoryModal((state) => state.isOpen);

  useEffect(() => {

  }, [isOpen, onOpen]);

  return (
    <Button onClick={onOpen} size="sm" color="primary">Add Category <BsPlusLg className='ml-2' size={'1.4em'} /></Button>
  )
}