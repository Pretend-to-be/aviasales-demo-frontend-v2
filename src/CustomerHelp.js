import styled from "styled-components";

export const CustomerHelp = styled.div`
	padding: 20px 6px 8px;
	background: #ffffff;

	@media (min-width: 768px) {
		padding: 16px 8px 32px;
	}
`;

export const CustomerHelpArticle = styled.div`
	padding-bottom: 16px;
`;

export const CustomerHelpLabel = styled.img`
	margin-top: 2px;
	margin-right: 10px;
`;

export const CustomerHelpHeader = styled.h1`
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	line-height: 18px;
	font-size: 13px;
	display: inline-block;
	margin: 0;

	color: #4a4a4a;
`;

export const CustomerHelpText = styled.p`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	line-height: 20px;
	font-size: 14px;
	margin-top: 12px;
	margin-bottom: 0;

	color: #4a4a4a;
`;

export const CustomerHelpMore = styled.a`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	line-height: 20px;
	font-size: 14px;
	margin-left: 20px;

	color: #00ace2;
`;
