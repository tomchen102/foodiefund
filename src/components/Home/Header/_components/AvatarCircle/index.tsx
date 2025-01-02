import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/utils/providers/AuthProvider";

type ClassNameProps = {
  className?: string;
};

const AvatarCircle = ({ className = "size-9" }: ClassNameProps) => {
  const { user } = useAuth();

  return (
    <Avatar className={className}>
      <AvatarImage src={user?.photo} />
      <AvatarFallback className="bg-transparent">
        <Icons.Avatar size={28} />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarCircle;
