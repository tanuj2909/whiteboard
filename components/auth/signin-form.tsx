"use client";

import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export const SigninForm = () => {
    const searchParams  = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl")
    const onClick = ( provider: "google" | "github" ) => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <Card className="w-[500px] shadow-md bg-[#dfdbe5] border-[3px] border-[#9c92ac]">
            <CardHeader>
                <div className="w-full flex flex-col gap-y-4 items-center justify-center">
                    <h1 className="text-3xl text-[#775ea0] font-semibold">
                        Board
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Log In / Register
                    </p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col w-full gap-y-4">
                    <Button
                        size={"lg"}
                        variant={"outline"}
                        onClick={() => onClick("google")}
                    >
                        <FcGoogle className="h-5 w-5"/>
                        <p className="text-[#775ea0] pl-2">Continue with Google</p>
                    </Button>
                    <Button
                        size={"lg"}
                        variant={"outline"}
                        onClick={() => onClick("github")}
                    >
                        <FaGithub className="h-5 w-5"/>
                        <p className="text-[#775ea0] pl-2">Continue with Github</p>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}