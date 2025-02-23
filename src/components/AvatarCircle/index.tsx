import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ClassNameProps = {
  className?: string;
  src: string;
};

const AvatarCircle = ({ className = "size-11", src }: ClassNameProps) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} />
      <AvatarFallback className="bg-transparent">
        <Icons.Avatar size={28} />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarCircle;
