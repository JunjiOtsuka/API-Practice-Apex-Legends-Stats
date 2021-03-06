import { Col, Card, Row } from 'react-bootstrap'

export default function UserName({ lifetimeStats, platformSlug }) {
    return (
        <>
            <Card className="bg-dark">
                <Row className="text-center text-justify text-white g-0">
                    <Card.Img
                        className="mx-auto"
                        src={lifetimeStats.stats.arenaRankScore.metadata.iconUrl}
                        alt="Card image"
                        style={{
                            width: "200px",
                            marginLeft: '100px',
                        }}
                    />
                    <Card.Title> {platformSlug} </Card.Title>
                    <Card.Text> Current {lifetimeStats.stats.level.displayName}: {lifetimeStats.stats.level.displayValue} </Card.Text>
                    <Card.Text> Top {Math.ceil(100 - lifetimeStats.stats.level.percentile)}%  </Card.Text>
                    <Card.Text> All time {lifetimeStats.stats.kills.displayName}: {lifetimeStats.stats.kills.displayValue} </Card.Text>
                    <Card.Text> Top {Math.ceil(100 - lifetimeStats.stats.kills.percentile)}% </Card.Text>
                </Row>
                <Row className="text-center text-justify g-0">
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img
                                className="mx-auto"
                                src={lifetimeStats.stats.arenaRankScore.metadata.iconUrl}
                                style={{
                                    width: "150px",
                                }}
                            />
                            <Card.Body >
                                <Card.Text>
                                    Arena Rank
                                </Card.Text>
                                <Card.Text>
                                    {lifetimeStats.stats.arenaRankScore.metadata.rankName}
                                </Card.Text>
                                <Card.Text>
                                    Top {Math.ceil(100 - lifetimeStats.stats.arenaRankScore.percentile)}%
                                </Card.Text>
                                <Card.Text>
                                    {lifetimeStats.stats.rankScore.displayName}: {lifetimeStats.stats.rankScore.displayValue}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img
                                className="mx-auto"
                                src={lifetimeStats.stats.rankScore.metadata.iconUrl}
                                style={{ width: "150px" }}
                            />
                            <Card.Body>
                                <Card.Text>
                                    Battle Royale Rank
                                </Card.Text>
                                <Card.Text>
                                    {lifetimeStats.stats.rankScore.metadata.rankName}
                                </Card.Text>
                                <Card.Text>
                                    Top {Math.ceil(100 - lifetimeStats.stats.rankScore.percentile)}%
                                </Card.Text>
                                <Card.Text>
                                    {lifetimeStats.stats.rankScore.displayName} : {lifetimeStats.stats.rankScore.displayValue}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </>


    )
}


    //     {/* <Container className="d-flex justify-content-center align-items-center">
    //     <div> UserName: {platformSlug} </div>
    //     <div> {lifetimeStats.metadata.name} </div>
    //     <div> 
    //         {lifetimeStats.stats.arenaRankScore.displayName} : {lifetimeStats.stats.arenaRankScore.displayValue} 
    //     </div>
    //     <img 
    //         src= {lifetimeStats.stats.arenaRankScore.metadata.iconUrl}
    //         key={lifetimeStats.stats.arenaRankScore.metadata.iconUrl} 
    //         alt={lifetimeStats.stats.arenaRankScore.metadata.iconUrl} 
    //     /> 
    //     <div> {lifetimeStats.stats.arenaRankScore.metadata.rankName} </div>
    //     <div> {lifetimeStats.stats.arenaRankScore.percentile} </div>


    //     {/* <div> {lifetimeStats.stats.kills.displayName} : {lifetimeStats.stats.kills.displayValue} </div>
    //     <div> {lifetimeStats.stats.kills.percentile}</div> */}

    //     {/* <div> {lifetimeStats.stats.level.displayName} : {lifetimeStats.stats.level.displayValue} </div>
    //     <div> {lifetimeStats.stats.level.percentile}</div> */}

    //     {/* <div>  */}
    //         {/* {lifetimeStats.stats.rankScore.displayName} : {lifetimeStats.stats.rankScore.displayValue} 
    //     </div>
    //     <div> <img src= {lifetimeStats.stats.rankScore.metadata.iconUrl} /> </div>
    //     <div> {lifetimeStats.stats.rankScore.metadata.rankName} </div>
    //     <div> {lifetimeStats.stats.rankScore.percentile} </div> */}
    // </Container> */}