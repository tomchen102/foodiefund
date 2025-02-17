import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Controls = () => {
  return (
    <>
      <h3 className="mb-5 text-primary-dark">Controls</h3>
      <div className="mb-20 grid w-full grid-cols-2 gap-x-5 gap-y-16">
        <div>
          <h4 className="mb-3">Checkbox</h4>
          <div className="flex h-14 items-center gap-3">
            <Checkbox id="checkbox1" />
            <label htmlFor="checkbox1">記住密碼</label>
          </div>
          <div className="flex h-14 items-center gap-3">
            <Checkbox id="checkbox2" checked />
            <label htmlFor="checkbox2">記住密碼</label>
          </div>
        </div>
        <div>
          <h4 className="mb-3">Radio Button</h4>
          <RadioGroup defaultValue="b">
            <div className="flex h-10 items-center gap-3">
              <RadioGroupItem id="radio1" value="a" />
              <label htmlFor="radio1">Item A</label>
            </div>
            <div className="flex h-10 items-center gap-3">
              <RadioGroupItem id="radio2" value="b" />
              <label htmlFor="radio2">Item B</label>
            </div>
            <div className="flex h-10 items-center gap-3">
              <RadioGroupItem id="radio3" value="c" />
              <label htmlFor="radio3">Item C</label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h4 className="mb-3">Input</h4>
          <Input className="w-[250px]" type="text" placeholder="Textline"></Input>
        </div>
        <div>
          <h4 className="mb-3">Select</h4>
          <Select>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Textline" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(5)].map((_, index) => (
                <SelectItem key={index} value={"Item" + index}>
                  Item-{index}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <h4 className="mb-3">Button - primary</h4>
          <div className="flex flex-col gap-3">
            <div>
              <h5 className="mb-2">Button + Icon</h5>
              <Button className="group" size="icon">
                <Icons.FavoriteFill className="group-hover:text-white" />
              </Button>
            </div>
            <div>
              <h5 className="mb-2">Button + Text</h5>
              <Button>我要贊助</Button>
            </div>
            <div>
              <h5 className="mb-2">Button + Text + Icon</h5>
              <Button className="group" size="iconButton">
                <span>查看更多</span>
                <Icons.ArrowRightFill dimension="s" className="group-hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-3">Button - secondary</h4>
          <div className="flex flex-col gap-3">
            <div>
              <h5 className="mb-2">Button + Icon</h5>
              <Button variant="secondary" size="icon">
                <Icons.FavoriteFill mode="dark" />
              </Button>
            </div>
            <div>
              <h5 className="mb-2">Button + Text</h5>
              <Button variant="secondary">我要贊助</Button>
            </div>
            <div>
              <h5 className="mb-2">Button + Text + Icon</h5>
              <Button variant="secondary" className="group" size="iconButton">
                <span>查看更多</span>
                <Icons.ArrowRightFill dimension="s" mode="dark" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
