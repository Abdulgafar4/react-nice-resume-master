import {
  Card,
  Text,
  Container,
  Center,
  RingProgress,
  ThemeIcon,
  createStyles
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  highlight: {
    color: "rgba(122, 209, 221, 1)",
    borderRadius: theme.radius.sm,
    padding: "0px 15px",
    fontSize: 44,
    fontWeight: 500,
  },
  text: {
    textAlign: "center",
    padding: "2px 15px",
  },
}));


export function Skills() {
    const { classes } = useStyles();
  return (
      <Container
        mb={50}
        id="skills"
        style={{ marginBottom: "20px", marginTop: "3em" }}
      >
        <Card shadow="sm" p="md" radius="lg" withBorder>
          <Center>
            <span className={classes.highlight}>Skills</span>
          </Center>
          <Text size="sm" color="dimmed" className={classes.text}>
            Meticulous web developer with over 2 years of front end experience
            and passion for responsive website design and a firm believer in the
            mobile-first approach. UDACITY certified. Implemented new responsive
            website approach which increased mobile traffic.
          </Text>
          <Card.Section>
            <Carousel
              slideSize="40%"
              height={200}
              slideGap="xs"
              controlSize={25}
              loop
              mb={20}
            >
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    CSS
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 90, color: "ocean" }]}
                    label={
                      <Text color="ocean" weight={700} align="center" size="xl">
                        90%
                      </Text>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    JavaScript
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 90, color: "ocean" }]}
                    label={
                      <Text color="ocean" weight={700} align="center" size="xl">
                        90%
                      </Text>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    React JS
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 60, color: "ocean" }]}
                    label={
                      <Text color="ocean" weight={700} align="center" size="xl">
                        60%
                      </Text>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    React Native
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 70, color: "ocean" }]}
                    label={
                      <Text color="ocean" weight={700} align="center" size="xl">
                        70%
                      </Text>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    Redux
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 50, color: "ocean" }]}
                    label={
                      <Text color="ocean" weight={700} align="center" size="xl">
                        50%
                      </Text>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    Recoil
                  </Text>
                </Center>
              </Carousel.Slide>
              <Carousel.Slide>
                <Center>
                  <RingProgress
                    sections={[{ value: 100, color: "ocean" }]}
                    label={
                      <Center>
                        <ThemeIcon
                          color="ocean"
                          variant="light"
                          radius="xl"
                          size="xl"
                        >
                          <IconCheck size={22} />
                        </ThemeIcon>
                      </Center>
                    }
                    mt={40}
                  />
                </Center>
                <Center>
                  <Text color="ocean" style={{ fontFamily: "Open Sans" }}>
                    HTML
                  </Text>
                </Center>
              </Carousel.Slide>
            </Carousel>
          </Card.Section>
        </Card>
      </Container>
  );
}
