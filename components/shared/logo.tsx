import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className='flex  items-center gap-4'>
        <h1 className='cursor-pointer font-space-grotesk text-4xl font-bold'>Jamshid</h1>
    </Link>
  );
};

export default Logo;