import { SigninButton } from "@/components/auth/signin-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full gap-y-6">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md text-[#775ea0]">
          Board
        </h1>
        <p className="text-[#775ea0] text-lg font-semibold">
          A Collaborative board!
        </p>
      </div>
      <div>
        <SigninButton>
          <Button 
            variant={"primary"} 
            size={"lg"}
          >
            Sign In
          </Button>
        </SigninButton>
      </div>
    </main>
  );
}
