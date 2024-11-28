import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface HintProps {
    label: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
}

export const Hint: React.FC<HintProps> = ({
    label,
    children,
    asChild,
    side,
    align
}: HintProps) => {
    return (
        <TooltipProvider >
            <Tooltip delayDuration={0} >
                <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
                <TooltipContent className=' '
                side={side}
                align={align}>

                    <p className='font-semibold text-white'>{label}</p>

                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};