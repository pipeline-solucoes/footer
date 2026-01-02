import React from 'react';
import { Box, Container, Stack, styled } from '@mui/material';

interface FooterProps {      
    background: string;               
    renderColunas: () => React.ReactElement;
    renderCopywriter: () => React.ReactElement;
  }

  interface FooterStyledProps {
    background: string;
  }

  const FooterStyled = styled('footer', {
    shouldForwardProp: (prop) => !['background'].includes(prop as string),
  })<FooterStyledProps>(({ background }) => ({
  
    position: 'relative',
    background: background,
    display: 'flex',     
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto'
}));


export const ContainerFooter = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '24px 0px 0px',
  height: 'auto',
  gap: '32px',
}));

export const ContentWrapStyled = styled('div')(() => ({
  width: '100%',
  height: '100%',
  gap: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

const ContainerSafe = styled('div')(({ theme }) => ({
  
  position: 'relative',
  margin: '48px 0px',
  width: '100%',
  
  [theme.breakpoints.between(0, 'sm')]: { margin: '0 15px', padding: '30px 0', },
  [theme.breakpoints.up('sm')]: { margin: '0 30px', padding: '30px 0', },
  [theme.breakpoints.up('md')]: { margin: '0 30px', padding: '60px 0', },
  [theme.breakpoints.up('lg')]: { margin: '0 100px', padding: '60px 0', },
  [theme.breakpoints.up('xl')]: { margin: '0 170px', padding: '60px 0', },  
  
}));


const Footer: React.FC <FooterProps> =  ({ background, renderColunas, renderCopywriter}) => {

  return (
    <FooterStyled background={background}>        
        <ContainerSafe>
            <ContainerFooter>
                <Container maxWidth="lg">                        
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                    {renderColunas()}
                  </Stack>                    
                </Container>
                <Box display='flex' flexDirection="row" alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                  {renderCopywriter()}
                </Box>
            </ContainerFooter>
        </ContainerSafe>
    </FooterStyled>
  );
};

export default Footer;
