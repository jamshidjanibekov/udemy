'use client'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Languages} from "lucide-react";
import Image from "next/image";
import {lngs} from "@/constants";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useParams} from "next/navigation";

const LanguageDropdown = () => {
  const {lng} = useParams();
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
            {lngs.map(item => (
              <Link key={item.route} href={`/${item.route}`}>
                <DropdownMenuItem  className={cn(`cursor-pointer`, lng===item.route && 'bg-secondary')}>
                  <Image
                    src={`/assets/locales/${item.route}.png`}
                    alt={item.label}
                    width={30}
                    height={30}
                    className='pr-2'
                  />
                  <span className='font-space-grotesk font-medium'>{item.label}</span>
                </DropdownMenuItem>
              </Link>
              ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageDropdown;