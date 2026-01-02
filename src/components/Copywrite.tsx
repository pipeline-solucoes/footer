import React from 'react';
import { Box, styled } from '@mui/material';

interface StyledTextProps {
  color_border: string;
}

const TextoStyle = styled('div', {
  shouldForwardProp: (prop) =>
    !['textColor'].includes(prop as string),
})<{textColor: string;}>(({ theme, textColor }) => ({

    width: '100%',
    textAlign: 'left',
    color: textColor,

    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1?.fontWeight,
    fontStyle: theme.typography.body1?.fontStyle,
    lineHeight: theme.typography.body1?.lineHeight,
    letterSpacing: theme.typography.body1?.letterSpacing,
    fontSize: theme.typography.body1?.fontSize,
    margin: theme.typography.body1?.margin,
}));

const LinkStyle = styled('a', {
  shouldForwardProp: (prop) =>
    !['textColor'].includes(prop as string),
})<{textColor: string;}>(({ theme, textColor }) => ({
    width: 'auto',
    color: textColor,

    // Tipografia
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.body1?.fontWeight,
    fontStyle: theme.typography.body1?.fontStyle,
    lineHeight: theme.typography.body1?.lineHeight,
    letterSpacing: theme.typography.body1?.letterSpacing,
    fontSize: theme.typography.body1?.fontSize,
    margin: theme.typography.body1?.margin,
}));

const ContentWrapStyled = styled('div', {
  shouldForwardProp: (prop) =>
    !['color_border'].includes(prop as string),
})<StyledTextProps>(({ color_border }) => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  borderTopStyle: 'solid',
  borderTopWidth: '1px',
  padding: '16px',
  borderTopColor: color_border,
}));

export interface CopywriteProps {      
    ano: string;
    color_border: string; 
    color: string;
    children?: React.ReactNode;
    color_link_pipeline: string;
  }

const Copywrite: React.FC<CopywriteProps> = ({ ano, color_border, color, children, color_link_pipeline }) => (
    
    <ContentWrapStyled color_border={color_border}>        
      <Box>
        <TextoStyle textColor={color}>
          Copyright ©{ano} todos os direitos reservados.
        </TextoStyle>
      </Box>
        
      <Box flex={1}>
        <TextoStyle textColor={color}>
          Criado por <LinkStyle href='https://pipelinesolucoes.com.br/' 
            textColor={color_link_pipeline} target="_blank" rel="noopener noreferrer">
            Pipeline Soluções
          </LinkStyle>
        </TextoStyle>
      </Box>

      <Box>        
        {children}
      </Box>    
    </ContentWrapStyled>
);



export default Copywrite;