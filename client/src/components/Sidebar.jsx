import { useDisconnect } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, sun, logout } from "../assets";
import { navlinks } from "../constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
	<div
		className={`w-[48px] h-[48px] rounded-[10px] ${
			isActive && isActive === name && "bg-[#2c2f32]"
		} flex justify-center items-center ${
			!disabled && "cursor-pointer"
		} ${styles}`}
		onClick={handleClick}
	>
		{!isActive ? (
			<img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
		) : (
			<img
				src={imgUrl}
				alt="fund_logo"
				className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
			/>
		)}
	</div>
);

const Sidebar = () => {
	const disconnect = useDisconnect({ reconnectPrevious: true });
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState("dashboard");

	return (
		<div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
			<Link to="/">
				<Icon
					styles="w-[60px] h-[60px] bg-[#2c2f32]"
					imgUrl={
						"https://user-images.githubusercontent.com/86917304/208297008-e3473b0c-3865-410c-9485-38091d2b8eb4.png"
					}
				/>
			</Link>

			<div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
				<div className="flex flex-col justify-center items-center gap-3">
					{navlinks.map((link) => (
						<Icon
							key={link.name}
							{...link}
							isActive={isActive}
							handleClick={() => {
								if (!link.disabled) {
									setIsActive(link.name);
									navigate(link.link);
								}
							}}
						/>
					))}
					<Icon
						name={"logout"}
						imgUrl={logout}
						isActive={isActive}
						handleClick={disconnect}
					/>
				</div>

				<Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
			</div>
		</div>
	);
};

export default Sidebar;
