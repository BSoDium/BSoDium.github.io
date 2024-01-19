/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Box,
  Stack, Typography, TypographyProps,
} from '@mui/joy';
import { SxProps, TextColor } from '@mui/joy/styles/types';
import Featured from 'components/Featured';
import Contact from 'components/Contact';
import Terminal from 'components/Terminal';
import Title from 'components/Title';
import Header from 'components/Header';
import FixedMode from 'components/FixedMode';
import { useMobileMode, Default } from 'components/Responsive';
import OpenSource from 'components/OpenSource';
import Divider from 'components/Divider';
import Goals from 'components/Goals';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Illustrations from 'components/Illustrations';

export function ATypography({
  children,
  href = '#',
  target = '_blank',
  textColor = 'inherit',
  sx = {},
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  target?: string;
  textColor?: TextColor;
  sx?: SxProps;
} & TypographyProps) {
  return (
    <Typography
      component="a"
      href={href}
      target={target}
      textColor={textColor}
      sx={{
        textDecoration: 'dotted underline',
        '&:hover': {
          textDecoration: 'underline',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default function App() {
  const mobile = useMobileMode();

  return (
    <ParallaxProvider>
      <FixedMode mode="dark">
        <Title text="Elliot Négrel-Jerzy" />
        <Box
          component="div"
          sx={{
            width: '100vw',
            overflowX: 'hidden',
          }}
        >
          <Parallax speed={-20} startScroll={0}>
            <Illustrations />
          </Parallax>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              marginTop: 'calc(-100vh + 420px)',
            }}
          >
            <Stack
              sx={{
                width: 'min(100%, 1200px)',
                height: 'fit-content',
              }}
            >
              <Stack
                sx={{
                  paddingLeft: mobile ? 0 : '70px',
                }}
              >
                <Stack
                  p="20px"
                  gap="80px"
                >
                  <Header />
                  <Terminal />
                </Stack>
                <Stack
                  p="20px"
                  gap="80px"
                  sx={(theme) => ({
                    position: 'relative',
                    '&::before': mobile ? {} : {
                      content: '""',
                      position: 'absolute',
                      top: '-20px',
                      left: '-30px',
                      height: 'calc(100% + 20px)',
                      width: '1px',
                      background: `linear-gradient(to bottom, ${theme.palette.info[400]} 10%, ${theme.palette.warning[400]} 70%, ${theme.palette.warning[700]})`,
                    },
                  })}
                >
                  <Featured />
                  <Contact />
                </Stack>
              </Stack>
              <Default>
                <Stack sx={{
                  paddingX: mobile ? 0 : '70px',
                }}
                >
                  <Divider />
                </Stack>
              </Default>
              <Stack sx={{
                paddingRight: mobile ? 0 : '70px',
              }}
              >
                <Stack
                  p="20px"
                  gap="80px"
                  sx={(theme) => ({
                    position: 'relative',
                    '&::before': mobile ? {} : {
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      right: '-30px',
                      height: '100%',
                      width: '1.5px',
                      background: `linear-gradient(to bottom, ${theme.palette.danger[400]} 30%, ${theme.palette.success[400]})`,
                    },
                  })}
                >
                  <Goals />
                </Stack>
                <Stack
                  p="20px"
                  gap="80px"
                  sx={(theme) => ({
                    position: 'relative',
                    '&::before': mobile ? {} : {
                      content: '""',
                      position: 'absolute',
                      top: '0',
                      right: '-30px',
                      height: '100%',
                      width: '1.5px',
                      background: `linear-gradient(to bottom, ${theme.palette.success[400]}, transparent)`,
                    },
                  })}
                >
                  <OpenSource />
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Box>
      </FixedMode>
    </ParallaxProvider>
  );
}
