import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { CiPlay1 } from "react-icons/ci";
  

export const Share = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"secondary"}>Share</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-[#775ea0] text-center text-3xl mb-2">Live Collaboration</DialogTitle>
                    <DialogDescription>
                        Invite people to the room.
                    </DialogDescription>
                </DialogHeader>
                <Button 
                    variant={"primary"}
                    className="flex gap-x-2"
                >
                    <CiPlay1 className="font-bold"/>Start Session
                </Button>
            </DialogContent>
            </Dialog>

    )
}

