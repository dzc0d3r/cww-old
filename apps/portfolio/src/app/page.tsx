import {Button} from "@codewithwalid/ui/components/button"

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen grid place-content-center bg-teal-200">
       <div>
        <h2 className="text-3xl m-5" >Portfolio app using shared cww-ui (shadcn)</h2>
        <Button className="flex mx-auto"> Great</Button>
       </div>
    </main>
  );
}
