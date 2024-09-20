import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Languages} from "lucide-react";
import Image from "next/image";
import {lngs} from "@/constants";

const LanguageDropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'ghost'} size={'icon'} >
            <Languages/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
          <DropdownMenuGroup>
            {lngs.map(lng => (
              <DropdownMenuItem key={lng.route} className='cursor-pointer'>
                <Image
                  src={`/assets/locales/${lng.route}.png`}
                  alt={lng.label}
                  width={30}
                  height={30}
                  className='pr-2'
                />
                <span className='font-space-grotesk font-medium'>{lng.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageDropdown;