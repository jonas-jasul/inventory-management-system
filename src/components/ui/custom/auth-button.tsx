
import { auth } from '@clerk/nextjs';
import {
    UserButton
} from "@clerk/nextjs";
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {}

const AuthButton = (props: Props) => {
    const { userId } = auth();
    return (
        <>
            {!userId && (
                <Link href='/sign-up'>
                    <Button>Sign Up</Button>
                </Link>
            )}
            {userId && (
                <UserButton />
            )}
        </>
    )
}

export default AuthButton