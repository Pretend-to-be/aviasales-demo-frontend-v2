import styled from "styled-components";

export const CheapestTickets = styled.div`
	padding: 24px 8px 32px;
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;

export const CheapestTicketsInviteText = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	line-height: 40px;
	font-size: 32px;
	text-align: center;

	color: #5c5c5c;
	margin: 0;
`;

export const CheapestTicketslider = styled.div`
	padding: 24px 0 0 0;
	position: relative;
`;

export const CheapestTicketsSliderContent = styled.div`
	text-align: center;
`;

export const CheapestTicketsCompanyLogo = styled.img`
	padding: 24px 24px;
`;

export const CheapestTicketsSliderButtonLeft = styled.img`
	position: absolute;
	left: 0;
	top: 45%;
`;

export const CheapestTicketsSliderButtonRight = CheapestTicketsSliderButtonLeft.extend`
	position: absolute;
	right: 0;
	left: unset;
`;

export const CheapestTicketsSliderStateDisplay = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`;

export const CheapestTicketsSliderState = styled.div`
	background: rgba(0, 0, 0, 0.0001);
	border: 1px solid #818181;
	border-radius: 50px;
	margin: 0 4px;
	padding: 5px;
	${props => (props.active ? "background-color: #818181;" : " ")};
`;

export const CheapestTicketsOutline = styled.img`
	width: 100%;
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;
