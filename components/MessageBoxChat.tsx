import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

export default function MessageBox(props: { output: string }) {
  const { output } = props;
  return (
    <Card
      className={`${
        output ? 'flex' : 'hidden'
      } !max-h-max bg-zinc-950 p-5 !px-[22px] !py-[22px] text-base font-normal leading-6 text-white backdrop-blur-xl dark:border-zinc-800 dark:!bg-white/5 dark:text-white md:text-base md:leading-[26px]`}
    >
      <div className="text-base font-normal">
        <ReactMarkdown>
          {output ? output : ''}
        </ReactMarkdown>
      </div>
    </Card>
  );
}
