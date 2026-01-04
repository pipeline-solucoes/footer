import { CSSObject, styled } from "@mui/material/styles";
import { PipelineSolucoesTypographyTokens } from "@pipelinesolucoes/theme";

interface TitleFooterStyleProps {
  textColor: string;
  typo?: CSSObject | PipelineSolucoesTypographyTokens;
}

export const TextoFooterStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor', 'typo'].includes(prop as string),
})<TitleFooterStyleProps>(({ theme, textColor, typo}) => ({

    width: '100%',
    textAlign: 'left',
    color: textColor,

    ...(typo ?? theme.typography['body1']),
}));

export const TitleFooterStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor', 'typo'].includes(prop as string),
})<TitleFooterStyleProps>(({ theme, textColor, typo }) => ({

    width: '100%',
    textAlign: 'left',
    color: textColor,

    ...(typo ?? theme.typography['body1']),
}));

export const TitleFooterCenterToMobileStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor', 'typo'].includes(prop as string),
})<TitleFooterStyleProps>(({ theme, textColor, typo }) => ({
    
  width: '100%',
  textAlign: 'center',
  color: textColor,

  ...(typo ?? theme.typography['body1']),

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  }
}));

export const ContentColFooter = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    gap: '16px',
    width: '100%',    
}));

export const ContentColCenterToMobileFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  gap: '16px',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
}));