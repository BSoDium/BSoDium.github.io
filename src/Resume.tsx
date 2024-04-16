import {
  Avatar, Box, Button, Chip, Divider, Stack, Textarea, Typography,
} from '@mui/joy';
import React, { useState } from 'react';
import {
  RiBriefcaseLine,
  RiCompasses2Line,
  RiSettings5Line,
} from 'react-icons/ri';
import { TbSchool } from 'react-icons/tb';
import { IoLanguage } from 'react-icons/io5';
import details from 'assets/Details';
import FixedMode from 'components/FixedMode';
import { Education, Experience, Skills } from 'components/Details';
import Title from 'components/Title';
import { useMobileMode } from 'components/Responsive';

export function Languages() {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} p={1}>
      {details.languages.map((language) => (
        <Chip
          size="lg"
          key={language.name}
          color={language.native ? 'primary' : 'info'}
          variant="outlined"
          startDecorator={(
            <Avatar
              color={language.native ? 'primary' : 'info'}
              variant="solid"
              size="sm"
            >
              {language.level}
            </Avatar>
          )}
        >
          {`${language.name}${language.native ? ' (native)' : ''}`}
        </Chip>
      ))}
    </Stack>
  );
}

export default function Resume() {
  const mobile = useMobileMode();

  const [descriptionEditable, setDescriptionEditable] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState('Dedicated software developer with expertise in various programming languages and technologies. Dedicated to contributing to the development community through impactful open-source projects on GitHub. Proven ability to tackle challenging tasks and excel as a valuable team member.');

  return (
    <FixedMode mode="system">
      <Title text="Curriculum Vitae - Elliot Négrel-Jerzy" />
      <Stack
        alignItems="center"
        sx={{
          width: '100vw',
          height: '100vh',

        }}
      >
        <Box component="div" maxWidth="65em">
          <Stack
            paddingX={mobile ? 4 : 12}
            paddingY={mobile ? 4 : 6}
            gap={3}
            width="100%"
            height="100%"
          >
            <Stack component="header" gap={0.5}>
              <Typography level="h2" fontWeight="xl">
                Elliot Négrel-Jerzy
              </Typography>
              <Typography level="h6" fontWeight="lg" textColor="text.secondary">
                Software Engineer
              </Typography>
              {descriptionEditable ? (
                <Stack gap={1.5}>
                  <Textarea
                    value={descriptionContent}
                    onChange={(event) => {
                      setDescriptionContent(event.target.value);
                    }}
                    sx={{
                      padding: '.2rem .5rem',
                      margin: '-.2rem -.5rem',
                      marginTop: '.2rem',
                      fontSize: 'var(--joy-fontSize-sm)',
                    }}
                  />
                  <Stack direction="row" justifyContent="end">
                    <Button
                      size="sm"
                      onClick={() => {
                        setDescriptionEditable(false);
                      }}
                    >
                      Save changes
                    </Button>
                  </Stack>
                </Stack>
              ) : (
                <Typography
                  component="div"
                  role="textbox"
                  onClick={() => {
                    setDescriptionEditable(true);
                  }}
                  level="body2"
                  sx={{
                    position: 'relative',
                    borderRadius: '.5rem',
                    padding: '.2rem .5rem',
                    margin: '-.2rem -.5rem',
                    marginTop: '.2rem',
                    outline: '1px solid transparent',
                    transition: 'all ease .2s',
                    cursor: 'pointer',
                    '&:hover': {
                      outlineColor: 'var(--joy-palette-divider)',
                    },
                  }}
                >
                  {descriptionContent}
                </Typography>
              )}
            </Stack>
            <Box
              component="section"
              sx={{
                gap: 3,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Stack direction="row" flexWrap="wrap" columnGap={2} rowGap={1}>
                {[
                  { key: 'address', label: 'Address' },
                  { key: 'email', label: 'Email' },
                  { key: 'phone', label: 'Phone' },
                  { key: 'website', label: 'Website' },
                ].map(
                  ({ key, label }) => {
                    const value = details.contact[
                          key as keyof typeof details.contact
                    ];
                    const isUrl = value.startsWith('http');
                    return (
                      <Stack key={key}>
                        <Typography
                          level="body2"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {label}
                        </Typography>
                        {isUrl ? (
                          <Typography
                            component="a"
                            level="body2"
                            href={value}
                            target="_blank"
                            sx={{
                              wordBreak: 'break-word',
                              textDecoration: 'none',
                              '&:hover': {
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            {value}
                          </Typography>
                        ) : (
                          <Typography
                            level="body2"
                            sx={{
                              wordBreak: 'break-word',
                            }}
                          >
                            {value}
                          </Typography>
                        )}
                      </Stack>
                    );
                  },
                )}
              </Stack>
              <Stack gap={1}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  startDecorator={(
                    <Avatar size="sm">
                      <RiBriefcaseLine />
                    </Avatar>
                    )}
                >
                  Work experience
                </Typography>
                <Divider />
                <Experience />
              </Stack>

              <Stack gap={1}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  startDecorator={(
                    <Avatar size="sm">
                      <TbSchool />
                    </Avatar>
                    )}
                >
                  Education
                </Typography>
                <Divider />
                <Stack gap={1}>
                  <Education />
                </Stack>
              </Stack>

              <Stack gap={1}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  startDecorator={(
                    <Avatar size="sm">
                      <IoLanguage />
                    </Avatar>
                    )}
                >
                  Languages
                </Typography>
                <Divider />
                <Stack gap={1}>
                  <Languages />
                </Stack>
              </Stack>

              <Stack gap={1}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  startDecorator={(
                    <Avatar size="sm">
                      <RiSettings5Line />
                    </Avatar>
                    )}
                >
                  Technical skills
                </Typography>
                <Divider />
                <Stack gap={1}>
                  <Skills include={['languages', 'frameworks', 'tools']} />
                </Stack>
              </Stack>

              <Stack gap={1}>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  startDecorator={(
                    <Avatar size="sm">
                      <RiCompasses2Line />
                    </Avatar>
                    )}
                >
                  Competencies
                </Typography>
                <Divider />
                <Stack gap={1}>
                  <Skills include={['others']} />
                </Stack>
              </Stack>

            </Box>
          </Stack>
        </Box>
      </Stack>
    </FixedMode>
  );
}
