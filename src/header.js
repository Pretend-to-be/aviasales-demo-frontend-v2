import styled from "styled-components";
import aero from "./images/aero.svg";
import calendar from "./images/date-calendar.svg";
import leftArrow from "./images/arrowleft.svg";
import rightArrow from "./images/arrowright.svg";

export const Aviasales = styled.div``;

export const Header = styled.div`
	background: linear-gradient(
		148.48deg,
		#00b0de 22.46%,
		#01aedc 26.15%,
		#02abdb 29.89%,
		#02abdb 33.59%,
		#02abdb 33.81%,
		#196ebd 122.26%
	);
	padding: 0px 6px 88px 6px;

	@media (min-width: 768px) {
		background: linear-gradient(
			126.97deg,
			#00b0de -13.66%,
			#01aedc -9.98%,
			#02abdb -6.26%,
			#02abdb -2.56%,
			#02abdb -2.34%,
			#196ebd 85.88%
		);
	}
`;

export const Logo = styled.img`
	position: absolute;
	left: 6px;
	top: 12px;
`;

export const LogoText = styled.p`
	display: none;
	font-family: "Roboto";
	font-style: normal;
	font-weight: normal;
	line-height: 25px;
	font-size: 20px;
	color: #ffffff;
	position: absolute;
	top: 14px;
	left: 50px;
	margin: 0;
	@media (min-width: 768px) {
		display: block;
	}
`;

export const InviteTextBlock = styled.div`
	padding: 88px 0px 16px 0px;
`;

export const InviteText = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: bold;
	line-height: normal;
	font-size: 20px;
	text-align: center;

	color: #ffffff;
	margin: 0;
`;

export const FlightSearch = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin: 0;
	padding: 0;
	@media (min-width: 768px) {
		padding: 0 45px 32px;
	}
`;

export const CustomerTextCity = styled.input`
	box-sizing: border-box;
	min-width: 0;
	flex: 2 100%;
	font-family: "Roboto";
	font-style: normal;
	font-weight: normal;
	line-height: 20px;
	font-size: 16px;
	text-align: left;
	color: #4a4a4a;
	border: none;
	${props => (props.departure ? "border-radius: 4px 4px 0 0" : "")};

	padding: 18px 0 18px 16px;
	margin-bottom: 2px;

	@media (min-width: 768px) {
		flex: 2 49%;
		border-radius: ${props => (props.departure ? " 4px 0 0 0" : " 0 4px 0 0")};
		${props => (props.departure ? "margin-right: 2px" : "margin-left: 2px")};
	}
`;

export const CustomerTextDate = CustomerTextCity.extend`
	flex: 1 2px;
	margin-right: ${props => (props.departure ? "2px" : "0")};
	border-radius: 0;
	@media (min-width: 768px) {
		flex: 1 24.4%;
		border-radius: ${props => (props.departure ? " 	 0 0 0 4px" : "0 ")};
		margin-right: ${props => (props.departure ? "  1px" : " 2px")};
		margin-left: 0;
	}
`;

export const CalendarLogo = styled.div`
	&::after {
		content: "";
		display: inline-block;
		position: absolute;
		width: 17px;
		height: 20px;
		top: 262px;

		${props => (props.departure ? "right: 55%;" : "right: 7%;")};
		background: url(${calendar}) no-repeat;
	}
	@media (min-width: 768px) {
		position: relative;
		&::after {
			top: 18px;
			right: 17px;
		}
	}
`;

export const PassengerInfo = styled.button`
	box-sizing: border-box;
	min-width: 0;
	flex: ${props => (props.date ? "1 2px" : "2 100%")};
	font-family: "Roboto";
	font-style: normal;
	font-weight: normal;
	line-height: 20px;
	font-size: 16px;
	text-align: left;
	background-color: #ffffff;
	color: #4a4a4a;
	border: none;
	margin-bottom: 16px;
	border-radius: 0 0 4px 4px;
	position: relative;

	padding: 18px 0 18px 16px;
	@media (min-width: 768px) {
		flex: 2 49%;
		margin-bottom: 2px;
		border-radius: 0 0 4px 0;
		margin-left: 2px;
	}
`;

export const AirportName = styled.div`
	&::before {
		content: "MOW";
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		line-height: 20px;
		font-size: 16px;
		color: #a0b0b9;
		display: inline-block;
		position: absolute;
		top: 148px;
		right: 15%;
	}
	@media (min-width: 768px) {
		position: relative;
		&::before {
			top: 20px;
			right: 60px;
		}
	}
`;

export const CitySwapper = styled.div`
	&::before {
		content: "";
		display: inline-block;
		position: absolute;
		width: 26px;
		height: 21px;
		top: 148px;
		right: 2.4%;
		background: url(${leftArrow}) no-repeat;
	}
	@media (min-width: 768px) {
		position: relative;
		&::before {
			top: 20px;
			right: 10px;
		}
	}

	&::after {
		content: "";
		display: inline-block;
		position: absolute;
		width: 26px;
		height: 21px;
		top: 158px;
		right: 2.4%;
		background: url(${rightArrow}) no-repeat;
	}
	@media (min-width: 768px) {
		position: relative;
		&::after {
			top: 30px;
			right: 10px;
		}
	}
`;

export const PassengerInfoSeatType = styled.span`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	line-height: 20px;
	font-size: 16px;

	color: #a0b0b9;
`;

export const FindFlight = styled.button`
	background: #ff9241;
	border-radius: 4px;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	text-align: center;
	font-size: 24px;
	padding: 14px 0 13px;
	color: #ffffff;
	border: none;
	width: 100%;
	&::after {
		content: "";
		display: inline-block;
		position: relative;
		width: 26px;
		height: 21px;
		top: 3px;
		right: -3%;
		background: url(${aero}) no-repeat;
	}
	@media (min-width: 768px) {
		margin: 0 auto;
		display: block;
		width: unset;
		padding: 14px 62px 13px;
	}
`;

export const ChoosePassengerType = styled.img`
	display: inline-block;
	position: absolute;
	top: 328px;
	right: 7%;
	margin-left: 282px;
	padding: 14px 62px 13px;
	position: absolute;
	top: 25px;
	right: 25px;
	margin: 0;
	padding: 0;
	/*	@media (min-width: 768px) {
		position: absolute;
		top: 25px;
		right: 25px;
		margin: 0;
		padding: 0;
	}*/
`;
