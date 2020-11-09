import React from 'react';

interface Props {
    label?: string;
    symbol: string;
}

const Emoji: React.FC<Props> = ({ label, symbol }: Props) => (
    <>
        <span className="emoji" role="img" aria-label={label || ''} aria-hidden={label ? 'false' : 'true'}>
            {symbol}
        </span>
    </>
);

export default Emoji;
