'use client'
import { useState } from 'react';
import { IoCopy, IoCopyOutline } from 'react-icons/io5';
import { useToast } from './ui/use-toast';

const CopyLink: React.FC<{ link: string }> = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
      toast({
        title: "Successfuly",
        description: "The link copied successfuly",
      });
    } catch (error) {
      if (error !== null) {
        toast({
            variant: "destructive",
            title: "Error ocured",
            description: `Error: ${error}`,
        });
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleCopyLink}
        className="size-10 bg-white p-2 text-gray-700 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 duration-200 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/80"
      >
        {copied ?  <IoCopy /> : <IoCopyOutline />}
      </button>
    </div>
  );
};

export default CopyLink;