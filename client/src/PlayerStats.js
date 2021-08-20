import { Container, Row } from "react-bootstrap"
import UserName from "./UserName"
import CharacterStats from "./CharacterStats"

export default function PlayerStats({ userInformation, lifetimeStats, platformSlug }) {
    return (
        <Container >
            <UserName lifetimeStats={lifetimeStats} platformSlug={platformSlug} />
            <Row className="text-center text-justify g-0" xs={1} md={3}>
                {userInformation.map(info =>
                    <CharacterStats info={info} />
                )}
            </Row>
        </Container>
    )
}

