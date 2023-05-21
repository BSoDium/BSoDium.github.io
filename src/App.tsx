/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Box, Stack, Typography,
} from '@mui/joy';
import { SxProps, TextColor } from '@mui/joy/styles/types';
import Featured from 'components/Featured';
import Contact from 'components/Contact';
import Terminal from 'components/Terminal';
import Title from 'components/Title';
import Header from 'components/Header';

export function ATypography({
  children,
  href = '#',
  target = '_blank',
  textColor = 'inherit',
  sx = {},
}: {
  children: React.ReactNode;
  href?: string;
  target?: string;
  textColor?: TextColor;
  sx?: SxProps;
}) {
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
    >
      {children}
    </Typography>
  );
}

export default function App() {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    }}
    >
      <Title text="Elliot Négrel-Jerzy" />
      <Stack
        p={3}
        gap={10}
        sx={{
          width: 'min(100%, 1200px)',
          paddingTop: '450px',
        }}
      >
        <Header />
        <Terminal />
        <Featured />
        <Contact />
        <Box
          component={Stack}
          direction="row"
          flexWrap="wrap"
          gap={2}
          p={3}
          justifyContent="space-between"
        >
          <Typography level="body2" textColor="text.tertiary">
            © 2023 Elliot Négrel-Jerzy. All rights reserved.
          </Typography>
          <Typography level="body2" textColor="text.tertiary">
            Illustrations generated with
            {' '}
            <ATypography href="https://www.bing.com/create">
              Bing Image Creator
            </ATypography>
            {' '}
            powered by
            {' '}
            <ATypography href="https://openai.com/product/dall-e-2/">
              DALL·E
            </ATypography>
            .
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
