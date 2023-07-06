import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { BsThreeDotsVertical, BsPlusLg, BsSortDown, BsSortUp } from 'react-icons/bs'
import { Button } from '@/components/ui/button'


type Props = {}

const CategoriesPage = (props: Props) => {
    return (
        <div className="p-4 sm:ml-64">
            {/* top menu */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Categories</h2>
                    <p>hellow wrdasda</p>
                    </div>  
                </div>  

                {/* table */}
                <div className="flex items-center justify-between p-4 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        <Button size="sm" color="primary">Add Category <BsPlusLg className='ml-2' size={'1.4em'} /></Button>
                    </div>
                    <div className="flex items-center space-x-4">
                    <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Sales <BsSortDown className='ml-2 inline' size={'1.4em'} /></SelectItem>
                        <SelectItem value="system">Sales <BsSortUp className='ml-2 inline' size={'1.4em'} /> </SelectItem>
                    </SelectContent>
                    </Select>
                    </div>
                </div>

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4">

                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Sales</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right pr-6">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger><BsThreeDotsVertical size={'1.4em'} /></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
            </div>
        </div>
    )
}

export default CategoriesPage