/* eslint-disable no-nested-ternary */
import {
  Button, IconButton, Stack, Tooltip, Typography,
  useColorScheme,
} from '@mui/joy';
import React, { useMemo } from 'react';
import { useLandScapeMode, useMobileMode } from 'components/Responsive';
import {
  FiBookmark, FiHome, FiUser,
} from 'react-icons/fi';
import { MdAutoMode } from 'react-icons/md';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const modes = ['light', 'dark', 'system'] as const;

function NavigationBarItem({
  icon,
  text,
  to,
  layout = 'vertical',
  selected,
} : {
  icon: JSX.Element;
  text: string;
  to: string;
  layout?: 'vertical' | 'horizontal' ;
  selected?: boolean;
}) {
  return layout === 'vertical'
    ? (
      <Stack
        alignItems="center"
        gap={0.5}
        sx={{
          cursor: 'pointer',
          borderRadius: '0.5rem',
          fontSize: '1.3rem',
          paddingX: '1rem',
        }}
      >
        <Button
          component={Link}
          to={to}
          color="neutral"
          variant={selected ? 'solid' : 'plain'}
          sx={(theme) => ({
            transition: 'background 0.2s',
            padding: '0.4rem 1.2rem',
            borderRadius: '100vmax',
            minHeight: 'fit-content',
            fontSize: 'inherit',
            '& > svg': {
              transition: 'transform 0.2s',
            },
            '&:hover > svg': {
              transform: 'scale(1.05)',
            },
            ...(selected ? {
              backgroundColor: selected
                ? theme.palette.text.primary : theme.palette.background.body,
              color: selected ? theme.palette.background.body : theme.palette.text.primary,
              '&:hover': {
                color: theme.palette.background.body,
              },
            } : {}),
          })}
        >
          {icon}
        </Button>
        <Typography
          level="body3"
          fontWeight="700"
          textColor="text.primary"
        >
          {text}
        </Typography>
      </Stack>
    )
    : (
      <Button
        component={Link}
        to={to}
        color="neutral"
        variant={selected ? 'solid' : 'plain'}
        sx={(theme) => ({
          minHeight: 'fit-content',
          borderRadius: '100vmax',
          padding: '.6rem 1rem',
          transition: 'background 0.2s',
          backgroundColor: selected ? theme.palette.background.body : 'transparent',
          '& > svg': {
            transition: 'transform 0.2s',
          },
          '&:hover > svg': {
            transform: 'scale(1.05)',
          },
          ...(selected ? {
            backgroundColor: selected
              ? theme.palette.text.primary : theme.palette.background.body,
            color: selected ? theme.palette.background.body : theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.background.body,
            },
          } : {}),
        })}
        startDecorator={icon}
      >
        {text}
      </Button>
    );
}

export default function NavigationBar({ children } : {children: JSX.Element | JSX.Element[]}) {
  const bottom = useMobileMode();
  const landscape = useLandScapeMode();

  const horizontal = useMemo(() => !landscape && !bottom, [landscape, bottom]);

  const { mode, setMode } = useColorScheme();

  const location = useLocation();

  return (
    <>
      <Stack
        direction={landscape ? 'column' : 'row'}
        sx={(theme) => ({
          position: 'fixed',
          ...(bottom ? {
            bottom: 0,
            borderTop: `1px solid ${theme.palette.divider}`,
          } : {
            top: 0,
          }),
          left: 0,
          gap: 4,
          alignItems: 'center',
          backgroundColor: `color-mix(in srgb, ${theme.palette.background.body}, transparent 50%)`,
          backdropFilter: 'blur(10px)',
          webkitBackdropFilter: 'blur(10px)',
          zIndex: 1000,
          ...(landscape ? {
            paddingY: '1.5rem',
            height: '100vh',
            width: 'fit-content',
            borderRight: `1px solid ${theme.palette.divider}`,
            '& + *': {
              paddingLeft: '5rem',
            },
          } : {
            padding: bottom ? '.5rem' : '.5rem 2rem',
            width: '100vw',
            height: 'fit-content',
            borderBottom: bottom ? undefined : `1px solid ${theme.palette.divider}`,
          }),
        })}
      >
        <Stack
          flex={1}
          justifyContent={bottom ? 'space-evenly' : 'flex-start'}
          direction={landscape ? 'column' : 'row'}
          gap={1}
        >
          <NavigationBarItem
            icon={<FiHome />}
            text="Home"
            layout={horizontal ? 'horizontal' : 'vertical'}
            to="/"
            selected={location.pathname === '/'}
          />
          <NavigationBarItem
            icon={<FiBookmark />}
            text="Projects"
            layout={horizontal ? 'horizontal' : 'vertical'}
            to="/projects"
            selected={location.pathname === '/projects'}
          />
          <NavigationBarItem
            icon={<FiUser />}
            text="Resume"
            layout={horizontal ? 'horizontal' : 'vertical'}
            to="/resume"
            selected={location.pathname === '/resume'}
          />
        </Stack>
        {horizontal ? (
          <Button
            variant="plain"
            color="neutral"
            size="lg"
            sx={{
              minHeight: 'fit-content',
              borderRadius: '100vmax',
              padding: '.6rem 1rem',
              transition: 'background 0.2s',
              fontSize: 'var(--joy-fontSize-sm)',
            }}
            onClick={() => {
              if (mode) setMode(modes[(modes.indexOf(mode) + 1) % modes.length]);
            }}
            startDecorator={mode === 'system' ? (
              <MdAutoMode />
            ) : mode === 'light' ? (
              <IoMdSunny />
            ) : (
              <IoMdMoon />
            )}
          >
            {`${mode === 'system' ? 'System' : mode === 'light' ? 'Light' : 'Dark'} theme`}
          </Button>
        ) : (
          <Tooltip
            variant="soft"
            placement="right"
            title={`${mode === 'system' ? 'System' : mode === 'light' ? 'Light' : 'Dark'} theme`}
          >
            <IconButton
              variant="plain"
              color="neutral"
              size="lg"
              sx={{
                display: bottom ? 'none' : undefined,
                borderRadius: '100vmax',
                padding: 2,
              }}
              onClick={() => {
                if (mode) setMode(modes[(modes.indexOf(mode) + 1) % modes.length]);
              }}
            >
              {mode === 'system' ? (
                <MdAutoMode />
              ) : mode === 'light' ? (
                <IoMdSunny />
              ) : (
                <IoMdMoon />
              )}
            </IconButton>
          </Tooltip>
        )}
      </Stack>
      {children}
    </>
  );
}
