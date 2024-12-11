import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegUserCircle } from "react-icons/fa";
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
        <FaRegUserCircle className="size-6 text-primary-dark" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarCircle;
