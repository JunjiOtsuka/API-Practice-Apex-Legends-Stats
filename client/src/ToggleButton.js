import { Button } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function ToggleButton( {platformUserIdentifier, setPlatformUserIdentifier} ) {

    const onButtonSubmit = e => {
        e.preventDefault()
        e.stopPropagation();
        setPlatformUserIdentifier(e.target.value)
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example" onClick={onButtonSubmit}>
                <Button
                    variant="secondary"
                    className="btn btn-dark"
                    value="5"
                    type="submit"
                >Origin</Button>
                <Button
                    variant="secondary"
                    className="btn btn-dark"
                    value="2"
                    type="submit"
                >PSN</Button>
                <Button
                    variant="secondary"
                    className="btn btn-dark"
                    value="1"
                    type="submit"
                >Xbox</Button>
                <Button
                    variant="secondary"
                    className="btn btn-dark"
                    value="switch"
                    type="submit"
                >Switch</Button>
            </ButtonGroup>
        </>
    );
}