"use client";
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const ErrorCard = () => {
    return (
        <Card className="w-[500px] shadow-md bg-[#dfdbe5] border-[3px] border-[#9c92ac]">
            <CardHeader>
                <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                    <h1 className="text-3xl text-[#775ea0] font-semibold">
                        Board
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Oops! Somthing went wrong!
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="w-full h-[50px] flex items-center justify-center rounded-lg bg-destructive/15 ">
                    <HiOutlineExclamationTriangle className="text-destructive"/>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    variant={"link"}
                    className="font-normal w-full"
                    size={"sm"}
                    asChild
                >
                    <Link href={"/auth/signin"}>
                        Back to Sign In
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

        