import { FC, ReactNode } from "react";

interface iCardTooltipProps {
  icon: ReactNode;
  textBg: string;
  hoverName: string;
  hoverBg: string;
  onClick?: () => void;
}

const CardTooltipProps: FC<iCardTooltipProps> = ({
  icon,
  textBg,
  hoverName,
  hoverBg,
  onClick,
}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <div
          onClick={onClick}
          className={`group cursor-pointer p-2 rounded-[15px] hover:${hoverBg}`}
        >
          <div className={`text-[20px] group-hover:${textBg}`}>{icon}</div>
          <div className="absolute left-0 mb-1 bottom-full hidden p-2 bg-purple-700 text-white text-center rounded-md group-hover:block">
            {hoverName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTooltipProps;
