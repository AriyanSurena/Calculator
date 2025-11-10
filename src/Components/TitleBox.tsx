type TitleBoxType = {
    label?: string,
    title: string,
    pos: 'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'top-left',
    classes?: string,
}

type PositionStyle = {
    clipPath: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    transform?: string;
}

const TitleBox: React.FC<TitleBoxType> = ({ label, title, pos, classes }) => {
    const positionConfig: Record<'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'top-left', PositionStyle> = {
        top: {
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        right: {
            clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
            top: '83%',
            right: '-20px',
            transform: 'translateY(-50%)'
        },
        bottom: {
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        left: {
            clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
            top: '83%',
            left: '-20px',
            transform: 'translateY(-50%)'
        },
        "top-right": {
            clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
            top: '83%',
            left: '-20px',
            transform: 'translateY(-50%)'
        },
        "top-left": {
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            top: '-20px',
            left: '80%',
            transform: 'translateX(-50%)'
        }
    };

    const config = positionConfig[pos];

    return (
        <div 
            className={`absolute border-b-2 bg-slate-800 shadow-lg w-fit max-w-fit p-3 rounded-lg select-none ${classes}`}>
            {/* مثلث نشانگر */}
            <span
                className="absolute w-6 h-6 bg-slate-800 z-10"
                style={{
                    clipPath: config.clipPath,
                    top: config.top,
                    right: config.right,
                    bottom: config.bottom,
                    left: config.left,
                    transform: config.transform
                }}
            ></span>

            {/* محتوا */}
            {label && (
                <span className="block text-red-400 text-sm font-medium mb-1 z-20">
                    {label}
                </span>
            )}
            <div className="text-white max-w-xs z-20 overflow-x-hidden overflow-text-wrap">
                {
                    !isNaN(Number(title))
                        ? new Intl.NumberFormat().format(Number(title))
                        : title
                }
            </div>
        </div>
    );
}

export default TitleBox;