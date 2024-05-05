import {Button} from "@codewithwalid/ui/components/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@codewithwalid/ui/components/select"

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen grid place-content-center bg-teal-200">
       <div>
        <h2 className="text-3xl m-5" >Blog app using shared cww-ui (shadcn)</h2>
        <Button className="flex mx-auto"> Great</Button>
        
       </div>
       <div className="w-full flex my-2 justify-center mx-auto">
          <Select> 
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
         </Select>
        </div>
    </main>
  );
}
