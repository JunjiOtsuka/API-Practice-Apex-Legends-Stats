import { Col, Card, OverlayTrigger } from "react-bootstrap"

export default function CharacterStats({ info }) {
    return (
        <Col>
            <Card className="bg-dark text-white">
                <Card.Img
                    className="mx-auto"
                    src={info.metadata.imageUrl}
                    style={{ width: "150px" }}
                />
                <Card.Body>
                    <Card.Title>
                        {info.metadata.isActive &&
                            <img src="https://emojiguide.com/wp-content/uploads/platform/windows/43604.png"
                                style={{ width: "15px", height: "15px" }}
                            />}
                        {info.metadata.name}
                    </Card.Title>
                    {info.stats.hasOwnProperty('kills') ?
                        <>
                            <Card.Text>
                                {info.stats.kills.displayName}: {info.stats.kills.displayValue}
                            </Card.Text>
                            <Card.Text>
                                Top: {100 - info.stats.kills.percentile}%
                            </Card.Text>
                        </> :
                        <>
                            <Card.Text>
                                N/A
                            </Card.Text>
                            <Card.Text>
                                N/A
                            </Card.Text>
                        </>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}


    // <div>
    //     <img src={info.metadata.imageUrl} key={info.metadata.imageUrl} alt={info.metadata.imageUrl} />
    //     <h5> {info.metadata.name} </h5>
    //     <h5> {info.metadata.isActive} </h5>
    // </div>
    // { info.stats.hasOwnProperty('kills') &&
    // <div>
    //     <h5> {info.stats.kills.displayName}: {info.stats.kills.displayValue}  </h5>
    //     <h5> Percentile{info.stats.kills.percentile}% </h5>
    // </div> 
    // }
